// src/components/ProductInfo.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    name: "Tile, Block & Stone Adhesive",
    slug: "/category/tile-adhesive",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757152171/1_wl10m2.png",
  },
  {
    name: "Epoxy & Tile Grout",
    slug: "/category/epoxy-grout",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757326898/2_1_dlkmlk.png",
  },
  {
    name: "Epoxy Grout Glitter",
    slug: "/products/epoxy-grout-glitter",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146319/Epoxy_filler_o3tshe.png",
  },
  {
    name: "Grout Hardener",
    slug: "/products/grout-hardener",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757326897/1_1_tpmde2.png",
  },
  {
    name: "Tile Cleaner",
    slug: "/products/tile-cleaner",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146318/Tile_Cleaner_lqrt3k.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProductInfo = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 sm:px-12 rounded-t-[48px] mt-[-40px] pt-[40px] z-10">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Senzo Premium <br /> Tile Fixing & Stone Care Solutions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Explore our premium range of adhesives, grouts, cleaners, and
            hardeners - crafted to deliver strength, durability, and elegance.
            Trusted by professionals nationwide, Senzo ensures every project is
            built to last.
          </p>
        </motion.div>
      </div>

      {/* Product Grid */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {products.map((product, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden group cursor-pointer hover:shadow-xl"
          >
            <Link to={product.slug}>
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-gray-50"
                />
              </div>

              {/* Product Name */}
              <div className="p-4 text-center">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductInfo;
