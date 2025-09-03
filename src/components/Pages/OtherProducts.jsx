import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TileCleaner, BlockAdhesive, grout2k } from "../ProductsInfo/product";

const OtherProducts = () => {
  // Combine all other products
  const allOtherProducts = [
    ...TileCleaner,
    ...BlockAdhesive,
    ...grout2k
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-16 mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Other Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complementary products for your tiling projects. From cleaners to specialized adhesives, we have everything you need.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allOtherProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/products/${product.slug}`}>
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.heading || product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description || product.coverage}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.colours && (
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {product.colours}
                      </span>
                    )}
                    {product.packaging && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {product.packaging}
                      </span>
                    )}
                    {product.appearance && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {product.appearance}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {product.thickness || 'Specialized Product'}
                    </span>
                    <button className="text-red-600 hover:text-red-900 font-medium text-sm">
                      View Details →
                    </button>
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

export default OtherProducts;