import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  epoxyGrout,
  tileGrout,
  groutGlitter,
  groutHardner,
} from "../ProductsInfo/product";
import { Palette, Package, Hourglass } from "lucide-react";

const EpoxyGrout = () => {
  // Combine all grout products
  const allGroutProducts = [
    ...epoxyGrout,
    ...tileGrout,
    ...groutGlitter,
    ...groutHardner,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 mb-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Epoxy Grout Products
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Premium grouting solutions for perfect tile joints. Our epoxy grouts
          deliver superior stain resistance, durability, and vibrant finishes
          that last.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allGroutProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2,}}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-200"
            >
              <Link to={`/products/${product.slug}`} className="block">
                {/* Image */}
                <div className="relative h-56 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    // transition={{ duration: 0.20 }}
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.colours && (
                      <span className="flex items-center gap-1 bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                        <Palette size={14} /> {product.colours}
                      </span>
                    )}
                    {product.packaging && (
                      <span className="flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        <Package size={14} /> {product.packaging}
                      </span>
                    )}
                    {product.shelfLife && (
                      <span className="flex items-center gap-1 bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                        <Hourglass size={14} /> Long Shelf Life
                      </span>
                    )}
                  </div>

                  {/* Button */}
                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-md hover:shadow-lg transition cursor-pointer"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpoxyGrout;
