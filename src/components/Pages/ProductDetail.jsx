import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  tileAdhesive, 
  epoxyGrout, 
  tileGrout, 
  groutGlitter, 
  groutHardner, 
  TileCleaner, 
  BlockAdhesive, 
  grout2k 
} from "../ProductsInfo/product";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    // Combine all product arrays into one
    const allProducts = [
      ...tileAdhesive,
      ...epoxyGrout,
      ...tileGrout,
      ...groutGlitter,
      ...groutHardner,
      ...TileCleaner,
      ...BlockAdhesive,
      ...grout2k
    ];

    // Find the product with the matching slug
    const foundProduct = allProducts.find(item => item.slug === slug);
    
    setProduct(foundProduct);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
          <p className="text-gray-600 mt-2">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-14 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Product Header */}
          <div className="p-8 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            {product.heading && (
              <p className="text-lg text-gray-600 mt-2">{product.heading}</p>
            )}
          </div>

          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 p-8">
              <div className="rounded-lg overflow-hidden bg-gray-100 aspect-square flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "description"
                        ? "border-red-600 text-red-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("specifications")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "specifications"
                        ? "border-red-600 text-red-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => setActiveTab("application")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "application"
                        ? "border-red-600 text-red-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Application
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mb-8">
                {activeTab === "description" && (
                  <div>
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    
                    {/* Key Features */}
                    {product.characteristics && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                        {typeof product.characteristics === 'string' ? (
                          <p className="text-gray-700">{product.characteristics}</p>
                        ) : (
                          <ul className="space-y-2">
                            {product.characteristics.split(', ').map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "specifications" && (
                  <div className="space-y-4">
                    {product.colours && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Colors:</span>
                        <span className="text-gray-600">{product.colours}</span>
                      </div>
                    )}
                    
                    {product.packaging && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Packaging:</span>
                        <span className="text-gray-600">{product.packaging}</span>
                      </div>
                    )}
                    
                    {product.achievedThickness && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Thickness:</span>
                        <span className="text-gray-600">{product.achievedThickness}</span>
                      </div>
                    )}
                    
                    {product.standard && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Standard:</span>
                        <span className="text-gray-600">{product.standard}</span>
                      </div>
                    )}
                    
                    {product.coverage && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Coverage:</span>
                        <span className="text-gray-600">{product.coverage}</span>
                      </div>
                    )}
                    
                    {product.shelflife && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Shelf Life:</span>
                        <span className="text-gray-600">{product.shelflife}</span>
                      </div>
                    )}
                    
                    {product.mixingRatio && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Mixing Ratio:</span>
                        <span className="text-gray-600">{product.mixingRatio}</span>
                      </div>
                    )}
                    
                    {product.mixingDensity && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Mixing Density:</span>
                        <span className="text-gray-600">{product.mixingDensity}</span>
                      </div>
                    )}
                    
                    {product.appearance && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Appearance:</span>
                        <span className="text-gray-600">{product.appearance}</span>
                      </div>
                    )}
                    
                    {product.pH && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">pH:</span>
                        <span className="text-gray-600">{product.pH}</span>
                      </div>
                    )}
                    
                    {product.dose && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Dose:</span>
                        <span className="text-gray-600">{product.dose}</span>
                      </div>
                    )}
                    
                    {product.recommendedTileJoint && (
                      <div className="flex">
                        <span className="w-40 font-medium text-gray-700">Recommended Joint:</span>
                        <span className="text-gray-600">{product.recommendedTileJoint}</span>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "application" && (
                  <div>
                    {product.scope && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Scope of Application</h3>
                        <p className="text-gray-700 leading-relaxed">{product.scope}</p>
                      </div>
                    )}
                    
                    {product.keyFeatures && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {product.keyFeatures.map((feature) => (
                            <div key={feature.id} className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-medium text-red-600 mb-2">{feature.name}</h4>
                              <p className="text-gray-700 text-sm">{feature.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {product.applications && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Applications</h3>
                        <p className="text-gray-700 leading-relaxed">{product.applications}</p>
                      </div>
                    )}
                    
                    {product.recommended && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h3>
                        <p className="text-gray-700 leading-relaxed">{product.recommended}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Interested in this product?</h3>
                <p className="text-red-700 text-sm mb-4">Contact us for pricing and more information</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;