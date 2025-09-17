import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

function AdhesiveSelector() {
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] = useState(1)
  const [subStep, setSubStep] = useState(1)
  const [selections, setSelections] = useState({
    roomCategory: "",
    specificRoom: "",
    applicationArea: "",
    substrateType: "",
    tileType: "",
    tileSize: "",
  })

  const adhesiveData = useRef({
    roomCategories: {
      "Internal Area": {
        icon: "🏠",
        rooms: [
          { name: "Bedroom" },
          { name: "Living Room" },
          { name: "Kitchen" },
          { name: "Bathroom / Toilet" },
        ],
      },
      "External Area": {
        icon: "🌳",
        rooms: [
          { name: "Terrace" },
          { name: "Balcony" },
          { name: "Porch" },
          { name: "Parapet Wall" },
        ],
      },
      "Water Submerged": {
        icon: "💧",
        rooms: [
          { name: "Swimming Pool" },
          { name: "Water Tank" },
          { name: "Fountain" },
          { name: "Wet Areas" },
        ],
      },
      "Vibration Areas": {
        icon: "📳",
        rooms: [
          { name: "Door/Window Frame" },
          { name: "Lift Lobby" },
          { name: "Industrial Floor" },
          { name: "Heavy Traffic" },
        ],
      },
    },
    applicationAreas: [
      { name: "Floor" },
      { name: "Wall" },
    ],
    substrateTypes: [
      { name: "Cement Based Surfaces Like Concrete, Screed" },
      { name: "Tile-On-Tile / Existing Stones" },
      { name: "Drywalls Like Gypsum/ Cement/ Bison Boards / Plywood" },
      { name: "Metal/ Glass/ Epoxy Flooring" },
    ],
    tileTypes: [
      { name: "Ceramic Tiles/ Porous Tiles" },
      { name: "Vitrified Tiles" },
      { name: "Natural Stones" },
      { name: "Glass Mosaic Tile" },
      { name: "Quartz/ Composites/ Engineered Stone/ Metal/ Glass" },
    ],
    tileSizes: [
      { name: "Up to 2'x2'" },
      { name: "2'x2' to 4'x4'" },
      { name: "Above 4'x4'" },
    ],
    productRecommendations: [
      {
        type: "Standard Recommendation",
        name: "Tile Adhesive for Ceramic & Vitrified Tiles",
        description: "Polymer fibre modified grey cement based adhesive with no vertical slip, suitable for fixing ceramic and Gres tiles for floors and walls in internal applications",
        image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146318/S-11_gajeor.png",
        slug: "ceramic-tile"
      },
      {
        type: "Best Recommendation",
        name: "Polymer Modified Improved Tile Adhesive",
        description: "Cementitious, polymer fibre modified tile adhesive with no vertical slip with extended performance. Suitable for fixing ceramic & vitrified tiles for floor & walls in internal application.",
        image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-21_onlbrd.png",
        slug: "polymer-modified",
      },
    ],
  });

  const handleSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));

    // Logic to move to the next sub-step or main step
    if (currentStep === 1) {
      if (key === "roomCategory") {
        setSubStep(2);
      } else if (key === "specificRoom") {
        setSubStep(3);
      } else if (key === "applicationArea") {
        setCurrentStep(2);
        setSubStep(1);
      }
    } else if (currentStep === 2) {
      if (key === "substrateType") {
        setSubStep(2);
      } else if (key === "tileType") {
        setSubStep(3);
      } else if (key === "tileSize") {
        setCurrentStep(3);
      }
    }
  };

  const resetSelection = () => {
    setSelections({
      roomCategory: "",
      specificRoom: "",
      applicationArea: "",
      substrateType: "",
      tileType: "",
      tileSize: "",
    })
    setCurrentStep(1)
    setSubStep(1)
  }

  const getStepStatus = (step) => {
    if (step === 1) {
      return selections.applicationArea !== "";
    } else if (step === 2) {
      return selections.tileSize !== "";
    } else if (step === 3) {
      return currentStep === 3;
    }
    return false;
  }

  const getSubStepStatus = (mainStep, subStepNumber) => {
      if (mainStep === 1) {
          if (subStepNumber === 1) return selections.roomCategory !== "";
          if (subStepNumber === 2) return selections.specificRoom !== "";
          if (subStepNumber === 3) return selections.applicationArea !== "";
      }
      if (mainStep === 2) {
          if (subStepNumber === 1) return selections.substrateType !== "";
          if (subStepNumber === 2) return selections.tileType !== "";
          if (subStepNumber === 3) return selections.tileSize !== "";
      }
      return false;
  };

  const goBack = () => {
    if (currentStep === 1 && subStep === 3) {
      setSubStep(2);
      setSelections(prev => ({ ...prev, applicationArea: "" }));
    } else if (currentStep === 1 && subStep === 2) {
      setSubStep(1);
      setSelections(prev => ({ ...prev, specificRoom: "", applicationArea: "" }));
    } else if (currentStep === 2 && subStep === 1) {
      setCurrentStep(1);
      setSubStep(3);
      setSelections(prev => ({ ...prev, substrateType: "", tileType: "", tileSize: "" }));
    } else if (currentStep === 2 && subStep === 2) {
      setSubStep(1);
      setSelections(prev => ({ ...prev, tileType: "", tileSize: "" }));
    } else if (currentStep === 2 && subStep === 3) {
      setSubStep(2);
      setSelections(prev => ({ ...prev, tileSize: "" }));
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "+918700630602";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const isStep1Complete = getStepStatus(1);
  const isStep2Complete = getStepStatus(2);

  const { roomCategories, applicationAreas, substrateTypes, tileTypes, tileSizes, productRecommendations } = adhesiveData.current;

  return (
    <div className=" bg-white min-h-screen text-gray-800 p-4 sm:p-8 mb-14">
      {/* Header and Progress Bar */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="text-center">
          <h1 className="text-xl md:text-5xl font-semibold text-center text-gray-800 mb-2">Adhesive Selector</h1>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            A comprehensive tool to help you select the right product for your requirements.
          </p>
        </div>
      </div>
      
      {/* Horizontal Steps */}
      <div className="bg-gray-100 py-4 md:py-6 px-4 mb-8 rounded-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-2 md:space-x-8">
            <div className="flex items-center">
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-black font-bold text-sm transition-colors duration-300 ${currentStep >= 1 ? "bg-green-500" : "bg-gray-400"}`}>1</div>
              <span className={`ml-1 md:ml-2 font-medium text-xs md:text-base ${currentStep >= 1 ? "text-gray-800" : "text-black"}`}>Select Room</span>
            </div>
            <div className="w-8 md:w-16 h-1 bg-gray-300">
              <div className={`h-full transition-all duration-300 ${currentStep >= 2 ? "bg-green-500 w-full" : "w-0"}`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-black font-bold text-sm transition-colors duration-300 ${currentStep >= 2 ? "bg-green-500" : "bg-gray-400"}`}>2</div>
              <span className={`ml-1 md:ml-2 font-medium text-xs md:text-base ${currentStep >= 2 ? "text-gray-800" : "text-black"}`}>Type & Size</span>
            </div>
            <div className="w-8 md:w-16 h-1 bg-gray-300">
              <div className={`h-full transition-all duration-300 ${currentStep >= 3 ? "bg-green-500 w-full" : "w-0"}`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-black font-bold text-sm transition-colors duration-300 ${currentStep >= 3 ? "bg-green-500" : "bg-gray-400"}`}>3</div>
              <span className={`ml-1 md:ml-2 font-medium text-xs md:text-base ${currentStep >= 3 ? "text-gray-800" : "text-gray-500"}`}>Product</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content grid with yellow left sidebar */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Sidebar - Steps Summary */}
        <div className="lg:col-span-1 bg-yellow-200 p-6 rounded-2xl shadow-lg h-fit">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-500">Steps</h3>
          <div className="space-y-6">
            
            <div className="relative pl-8">
              <div className={`absolute top-0 left-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${isStep1Complete ? "bg-green-600 text-white" : "bg-red-500 text-black"}`}>1</div>
              <span className={`font-medium text-base md:text-lg ${isStep1Complete ? "text-green-600" : "text-gray-700"}`}>Choose Area / Room</span>
              {selections.roomCategory && (
                <div className="ml-2 mt-2 text-xs md:text-sm text-gray-500 break-words space-y-1">
                    <div className={getSubStepStatus(1, 1) ? "text-green-600" : "text-gray-700"}>- Select the Area</div>
                    {selections.specificRoom && (
                        <div className={getSubStepStatus(1, 2) ? "text-green-600" : "text-gray-700"}>- Select the Room</div>
                    )}
                    {selections.applicationArea && (
                        <div className={getSubStepStatus(1, 3) ? "text-green-600" : "text-gray-700"}>- Select the Application Area</div>
                    )}
                </div>
              )}
            </div>

            <div className="relative pl-8">
              <div className={`absolute top-0 left-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${isStep2Complete ? "bg-green-600 text-white" : "bg-red-500 text-black"}`}>2</div>
              <span className={`font-medium text-base md:text-lg ${isStep2Complete ? "text-green-600" : "text-gray-700"}`}>Size & Type Of Tile/Stone</span>
              {selections.substrateType && (
                <div className="ml-2 mt-2 text-xs md:text-sm text-gray-500 break-words space-y-1">
                    <div className={getSubStepStatus(2, 1) ? "text-green-600" : "text-gray-700"}>- Select the Substrate</div>
                    {selections.tileType && (
                        <div className={getSubStepStatus(2, 2) ? "text-green-600" : "text-gray-700"}>- Select the Tile Type</div>
                    )}
                    {selections.tileSize && (
                        <div className={getSubStepStatus(2, 3) ? "text-green-600" : "text-gray-700"}>- Select the Tile Size</div>
                    )}
                </div>
              )}
            </div>

            <div className="relative pl-8">
              <div className={`absolute top-0 left-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${currentStep === 3 ? "bg-green-600 text-white" : "bg-red-500 text-black"}`}>3</div>
              <span className={`font-medium text-base md:text-lg ${currentStep === 3 ? "text-green-600" : "text-gray-700"}`}>Recommended Adhesives</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {currentStep === 1 && (subStep === 1 ? "Select the Area" : subStep === 2 ? "Select the Room" : "Select the Application Area")}
                {currentStep === 2 && (subStep === 1 ? "Select the Type of Substrate" : subStep === 2 ? "Select the Type of Tile" : "Select the Size of Tile")}
                {currentStep === 3 && "Recommended Adhesives"}
            </h2>
            {/* Conditional render for Back or Refresh button */}
            {currentStep === 3 ? (
              <button
                onClick={resetSelection}
                className="px-4 py-2 text-sm md:text-base border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Refresh / Start Again
              </button>
            ) : (currentStep > 1 || subStep > 1) && (
              <button
                onClick={goBack}
                className="px-4 py-2 text-sm md:text-base border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                ← BACK
              </button>
            )}
          </div>

          {/* Step 1: Room Selection */}
          {currentStep === 1 && (
            <>
              {/* Sub-step 1: Select Room Category */}
              {subStep === 1 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(roomCategories).map(([category, data]) => (
                    <button
                      key={category}
                      onClick={() => handleSelection("roomCategory", category)}
                      className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-center group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{data.icon}</div>
                      <div className="font-medium text-sm md:text-base">{category}</div>
                    </button>
                  ))}
                </div>
              )}
              {/* Sub-step 2: Select Specific Room */}
              {subStep === 2 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roomCategories[selections.roomCategory].rooms.map((room) => (
                    <button
                      key={room.name}
                      onClick={() => handleSelection("specificRoom", room.name)}
                      className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-center group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {roomCategories[selections.roomCategory].icon}
                      </div>
                      <div className="font-medium text-sm md:text-base">{room.name}</div>
                    </button>
                  ))}
                </div>
              )}
              {/* Sub-step 3: Select Application Area */}
              {subStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {applicationAreas.map((area) => (
                    <button
                      key={area.name}
                      onClick={() => handleSelection("applicationArea", area.name)}
                      className="p-6 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-center group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {area.name === "Floor" ? "🏠" : "🧱"}
                      </div>
                      <div className="font-medium text-sm md:text-base">{area.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Step 2: Type & Size Selection */}
          {currentStep === 2 && (
            <>
              {/* Sub-step 1: Select Substrate Type */}
              {subStep === 1 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {substrateTypes.map((substrate) => (
                    <button
                      key={substrate.name}
                      onClick={() => handleSelection("substrateType", substrate.name)}
                      className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-center"
                    >
                      <div className="text-sm md:text-base font-medium">{substrate.name}</div>
                    </button>
                  ))}
                </div>
              )}
              {/* Sub-step 2: Select Tile Type */}
              {subStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tileTypes.map((tile) => (
                    <button
                      key={tile.name}
                      onClick={() => handleSelection("tileType", tile.name)}
                      className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-center"
                    >
                      <div className="text-sm md:text-base font-medium">{tile.name}</div>
                    </button>
                  ))}
                </div>
              )}
              {/* Sub-step 3: Select Tile Size */}
              {subStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tileSizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => handleSelection("tileSize", size.name)}
                      className="p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-center"
                    >
                      <div className="text-sm md:text-base font-medium">{size.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Step 3: Product Recommendations */}
          {currentStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productRecommendations.map((product, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className={`p-4 font-bold text-white text-center ${product.type.startsWith("Best") ? "bg-green-600" : "bg-blue-600"}`}>
                    {product.type}
                  </div>
                  <div className="p-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center text-xs text-gray-500">
                      <img src={product.image} alt={product.name} className="max-w-full max-h-full" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={openWhatsApp}
                      className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm">
                        CONTACT US
                      </button>
                      <button
                        onClick={() => navigate(`/products/${product.slug}`)}
                        className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                        VIEW PRODUCT
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdhesiveSelector
