import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  tileAdhesive,
  epoxyGrout,
  tileGrout,
  groutGlitter,
  groutHardner,
  TileCleaner,
  BlockAdhesive,
  grout2k,
} from "../ProductsInfo/product";




const splitPoints = (text) => {
  if (!text || typeof text !== "string") return [];
  const hasDash = text.includes(" - ");
  const parts = (hasDash ? text.split(" - ") : text.split(/[,;\n•]+/))
    .map(s => s.replace(/^\-+/, "").trim())
    .filter(Boolean);
  return [...new Set(parts)];
};

const collectImages = (p) => {
  const out = [];
  const keys = [
    "images", "image", "imgUrl", "imageUrl",
    "hardnerImg", "hardner",
    "resinImg", "resin",
  ];
  keys.forEach(k => {
    if (Array.isArray(p?.[k])) out.push(...p[k]);
    else if (p?.[k]) out.push(p[k]);
  });
  return [...new Set(out)];
};

const FieldRow = ({ label, value }) => {
  if (!value) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
    >
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-gray-900 font-semibold mt-1 leading-relaxed">{value}</p>
    </motion.div>
  );
};

const BulletList = ({ title, items, checkmark = false }) => {
  if (!items?.length) return null;
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <ul className="grid md:grid-cols-2 gap-3">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="flex items-start bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition"
          >
            <span className="mr-2 text-gray-900">
              {checkmark ? "✔" : "•"}
            </span>
            <span className="text-gray-700">{it}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const all = [
      ...tileAdhesive,
      ...epoxyGrout,
      ...tileGrout,
      ...groutGlitter,
      ...groutHardner,
      ...TileCleaner,
      ...BlockAdhesive,
      ...grout2k,
    ];
    const found = all.find((i) => i.slug === slug);
    setProduct(found || null);
    setLoading(false);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [slug]);

    const handleClick = () => {
    const phoneNumber = "919876543210"; 
    const message = `Hello, I’m interested in ${product?.name}. Please share more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const images = useMemo(() => collectImages(product || {}), [product]);
  const specFields = useMemo(() => {
    if (!product) return [];
    return [
      { label: "Colours", value: product.colours },
      { label: "Achieved Thickness", value: product.achievedThickness || product.thickness },
      { label: "Standard", value: product.standard },
      { label: "Packaging", value: product.packaging },
      { label: "Coverage", value: product.coverage },
      { label: "Shelf Life", value: product.shelfLife || product.shelflife },
    ].filter(f => !!f.value);
  }, [product]);

  const technicalFields = useMemo(() => {
    if (!product) return [];
    return [
      { label: "Mixing Ratio", value: product.mixingRatio },
      { label: "Mixing Density", value: product.mixingDensity },
      { label: "Appearance", value: product.appearance },
      { label: "pH", value: product.pH },
      { label: "Dose", value: product.dose },
      { label: "Recommended Joint", value: product.recommendedTileJoint },
      { label: "Item No.", value: product.itemNo },
    ].filter(f => !!f.value);
  }, [product]);

  const characteristics = useMemo(() => splitPoints(product?.characteristics), [product]);
  const scopes = useMemo(() => splitPoints(product?.scope), [product]);
  const applications = useMemo(() => splitPoints(product?.applications), [product]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <p className="text-gray-600 mt-2">
            The product you’re looking for doesn’t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-6xl mx-auto">
        {/* top: image + title/desc */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* image area */}
          <div>
            <motion.div
              key={activeImage}
              initial={{ opacity: 0.6, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="bg-gray-100 rounded-2xl flex items-center justify-center p-6 shadow-md h-[420px]"
            >
              <img
                src={images[activeImage]}
                alt={`${product.name} - ${activeImage + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>

            {images.length > 1 && (
              <div className="flex gap-4 mt-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-24 h-24 rounded-xl border-2 p-1 transition ${
                      activeImage === idx
                        ? "border-gray-900 shadow"
                        : "border-transparent hover:border-gray-400"
                    } bg-gray-50`}
                    aria-label={`thumbnail ${idx + 1}`}
                  >
                    <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* title + description + cta */}
          <div>
            <motion.h1
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="text-4xl font-bold text-gray-900"
            >
              {product.name}
            </motion.h1>

            {product.heading && (
              <p className="mt-3 text-lg text-gray-600">{product.heading}</p>
            )}

            {product.description && (
              <p className="mt-6 text-gray-700 leading-relaxed">
                {product.description}
              </p>
            )}

            <motion.div
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Interested in this product?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact us for pricing and more details.
              </p>
              <button
              onClick={handleClick}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request Quote
              </button>
            </motion.div>
          </div>
        </div>

        {/* key specifications */}
        {(specFields.length > 0) && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Specifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specFields.map((f, i) => (
                <FieldRow key={i} label={f.label} value={f.value} />
              ))}
            </div>
          </div>
        )}

        {/* technical data */}
        {(technicalFields.length > 0) && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Data</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalFields.map((f, i) => (
                <FieldRow key={i} label={f.label} value={f.value} />
              ))}
            </div>
          </div>
        )}

        {/* lists */}
        <BulletList title="Characteristics" items={characteristics} checkmark />
        <BulletList title="Scope" items={scopes} />
        <BulletList title="Applications" items={applications} />

        {/* keyFeatures array support */}
        {Array.isArray(product.keyFeatures) && product.keyFeatures.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features (Details)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.keyFeatures.map((k) => (
                <motion.div
                  key={k.id || k.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <p className="font-semibold text-gray-900 mb-1">{k.name}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{k.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* recommendations / notes */}
        {product.recommended && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommendations</h2>
            <p className="text-gray-700 leading-relaxed">{product.recommended}</p>
          </div>
        )}
      </div>
    </div>
  );
}
