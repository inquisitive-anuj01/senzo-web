// src/components/ProductInfo.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    name: "Tile, Block & Stone Adhesive",
    slug: "/category/tile-adhesive",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756894358/Gemini_Generated_Image_hbr0ikhbr0ikhbr0_q9poqz.png", 
  },
  {
    name: "Epoxy & Tile Grout",
    slug: "/category/epoxy-grout",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756894562/Gemini_Generated_Image_oio72boio72boio7_qh25n4.png",
  },
  {
    name: "Epoxy Grout Glitter",
    slug: "/products/epoxy-grout-glitter",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756894358/Gemini_Generated_Image_hbr0ikhbr0ikhbr0_q9poqz.png",
  },
  {
    name: "Grout Hardener",
    slug: "/products/grout-hardener",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756894562/Gemini_Generated_Image_oio72boio72boio7_qh25n4.png",
  },
  {
    name: "Tile Cleaner",
    slug: "/products/tile-cleaner",
    img: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756894736/Gemini_Generated_Image_usszpdusszpdussz_pgfovh.png",
    
  },
];

const ProductInfo = () => {
  return (
    <section className="relative min-h-screen bg-white text-black py-20 px-6 sm:px-12 rounded-t-[48px] mt-[-40px] pt-[40px] z-10 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Senzo Premium <br /> Tile Fixing & Stone Care Solutions
          </h2>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Discover our premium range of adhesives, grouts, cleaners, and
            hardeners — crafted to deliver strength, durability, and elegance
            for tiles, blocks, and stones. Trusted by professionals nationwide,
            Senzo ensures every project is built to last.
          </p>
        </motion.div>
      </div>

      {/* Product Cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {products.map((product, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-50 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl"
          >
            <Link to={product.slug}>
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center font-semibold text-gray-800">
                {product.name}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductInfo;
