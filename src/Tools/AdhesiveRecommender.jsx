"use client"

import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

const tileAdhesiveProducts = [
  {
    id: 1,
    name: "Tile Adhesive for Ceramic & Vitrified Tiles",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146318/S-11_gajeor.png",
    description:
      "Polymer fibre modified grey cement based adhesive with no vertical slip, suitable for fixing ceramic and Gres tiles for floors and walls in internal applications",
    usage: "Tile Adhesive for Interior floor Applications",
    bg: "#569D7F",
    slug: "ceramic-tile",
    colours: "Grey & white",
    achievedThickness: "Upto 15mm",
    standard: "C2T as per EN/TYPE 2 T as per IS",
    packaging: "20 Kg Bag",
    coverage:
      "As a guide: 1.2kg/m/mm of thickness (Consumption may vary depending on the evenness on the substrate, trowel notch size, type of tile and the application technique.)",
    shelflife:
      "Until 12 months since the date of production when stored in undamaged dry conditions and original packaging.",
    characteristics:
      "For Gres and vitrified tiles, Control tile slippage ceramic tiles, Application up to 10mm, Prolonged workability, Adjustable surfaces, Excellent workability plaster cement ground coat",
    scope:
      "SENZO S-11 is a tile adhesive designed for Gres tiles and glazed terracotta, Indoor use, On horizontal and vertical, On cement and cement-lime, Cement screeds and concrete",
    itemNo: "S-11",
    type: "Standard Recommendation",
  },
  {
    id: 2,
    name: "Polymer Modified Improved Tile Adhesive",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-21_onlbrd.png",
    usage: "Tile Adhesive for Interior floor and walll Applications",
    bg: "#E0D45A",
    description:
      "Cementitious, polymer fibre modified tile adhesive with no vertical slip with extended performance. Suitable for fixing ceramic & vitrified tiles for floor & walls in internal application.",
    slug: "polymer-modified",
    colours: "Grey & White",
    achievedThickness: "Upto 15 mm",
    standard: "C2T as per EN/TYPE 2 T as per IS",
    packaging: "20 Kg Bag",
    coverage:
      "As a guide: 1.2kg/m/mm of thickness (Consumption may vary depending on the evenness on the substrate, trowel notch size, type of tile and the application technique.)",
    shelflife:
      "Until 12 months since the date of production when stored in undamaged dry conditions and original packaging.",
    characteristics:
      "Perfect adherence adhesive, Allows installation of tiles from top towards the bottom, Ideal for new tile flooring surfaces, Application up to 10mm plaster, Smooth & Creamy ground coats, Extended open time",
    scope:
      "SENZO S-21 is a tile adhesive designed for vitrified tiles and glazed terracotta, Indoor use,On horizontal and vertical, On cement and cement-lime, Cement screeds and concrete",
    itemNo: "S-21",
    type: "Best Recommendation",
  },
  {
    id: 3,
    name: "POLYMER MODIFIED TILE & STONE ADHESIVE",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-31_gesscu.png",
    usage: "Tile Adhesive for interior & Exterior floor and wall Applications",
    bg: "#ECAD48",
    description:
      "Universal fibre modified, Thin bed and middle bed adhesive for application of ceramic tiles, vitrified tiles and natural stone on wall & floor in internal and external application.",
    slug: "polymer-modified-tile",
    colours: "Grey & White",
    achievedThickness: "Upto 12 mm",
    standard: "C2TE as per EN/TYPE 3 T as per IS",
    packaging: "20 Kg Bag",
    coverage:
      "As a guide: 1.2kg/m/mm of thickness (Consumption may vary depending on the evenness on the substrate, trowel notch size, type of tile and the application technique.)",
    shelflife:
      "Until 12 months since the date of production when stored in undamaged dry conditions and original packaging.",
    characteristics:
      "For ceramic vitrified (semi and fully) tiles glass mosaic and natural stone (non-sensitive)., On balconies terraces wet rooms and bathrooms., Oa water proof and moisture proof layers For inside and outside use, Longer open time for safer application, Application Up to 12mm., For Tile on Tile application",
    scope:
      "SENZO S-31 adhesive mortar for layramic tile  vitrified (semi and fully) tiles and al stone (non sensitive & color fast),Indoors and Outdoors.,Senzo S-31mortars can be used in room exposed to water.,It is recommended for floors with elevated functional loads in shopping malls staircas.",
    itemNo: "S-31",
    type: "Best Recommendation",
  },
  {
    id: 4,
    name: "DEFORMABLE TILE & STONE ADHESIVE",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-41_ppe6yv.png",
    usage:
      "Tile Adhesive for underwater, Interior & Exterior floor and wall Applications for Medium and Heavy tiles and stones",
    bg: "#CB5533",
    description:
      "Deformable cementitious, polymer fibre modified adhesive with improved characteristic, slip resistance and extended open time. High performance adhesive for installing vitrified tiles, large scale tiles, thin tiles and slabs as well as natural stones.",
    slug: "deformable-tile-stone",
    colours: "Grey & White",
    achievedThickness: "Upto 15 mm",
    standard: "C2 TEST as per EN/TYPE 4T S1 as per IS",
    packaging: "20 Kg Bag",
    coverage:
      "As a guide: 1.2kg/m/mm of thickness (Consumption may vary depending on the evenness on the substrate, trowel notch size, type of tile and the application technique.)",
    shelflife:
      "Until 12 months since the date of production when stored in undamaged dry conditions and original packaging.",
    characteristics:
      "With visible fibres for strength and flexibility balancing substrate deformations on critical surfaces like balconies terraces wet rooms bathrooms swimming pool and external facade etc., For ceramic vitrified tiles (semi and fully) glass mosaic and natural stone (non-sensitive), Suitable for large scale and heavy duty vitrified tiles",
    scope:
      "SENZO S-41 is used to laying vitrified tilles (semi and fully) cement and stone tihus large format and heavy duty tiles thin tiles., Its features keep elastic connection with substrate which allowed to carry over shear stresses between tile and substrate., On horizontal and vertical surface - Polymer Modified Bonds with various substrates",
    itemNo: "S-41",
    type: "Premium Recommendation",
  },
  {
    id: 5,
    name: "HIGHLY DEFORMABLE TILE & STONE ADHESIVE",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-51_yl5yjh.png",
    usage: "Tile Adhesive for Interior & Exterior Facade for Medium and Heavy tiles and stones.",
    bg: "#75BCD7",
    description:
      "Highly flexible, polymer fibre modified special adhesive mortar for installing vitrified and natural stone slabs with high safety reserves.",
    slug: "deformable-tile",
    colours: "Grey & White",
    achievedThickness: "Upto 15 mm",
    standard: "C2 TE S2 as per EN/TYPE 4 T S2 as per IS",
    packaging: "20 Kg Bag",
    coverage:
      "As a guide: 1.2kg/m/mm of thickness (Consumption may vary depending on the evenness on the substrate, trowel notch size, type of tile and the application technique.)",
    shelflife:
      "Until 12 months since the date of production when stored in undamaged dry conditions and original packaging.",
    characteristics:
      "For use on difficult substrates, For tile and stones of size more than 1200 x 1200 mm, For indoor and Outdoor use, Application up to 15mm",
    scope:
      "SENZO S-51 is used to laying vitrified tiles (semi and fully) cement and stone tiles large format and heavy duty tiles thin tiles., Its features keep elastic connection with substrate which allowed to carry over shear stresses between tile and substrate., On horizontal and vertical surfaces",
    itemNo: "S-51",
    type: "Premium Recommendation",
  },
]

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
        rooms: [{ name: "Bedroom" }, { name: "Living Room" }, { name: "Kitchen" }, { name: "Bathroom / Toilet" }],
      },
      "External Area": {
        icon: "🌳",
        rooms: [{ name: "Terrace" }, { name: "Balcony" }, { name: "Porch" }, { name: "Parapet Wall" }],
      },
      "Water Submerged": {
        icon: "💧",
        rooms: [{ name: "Swimming Pool" }, { name: "Fountain" }],
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
    applicationAreas: [{ name: "Floor" }, { name: "Wall" }],
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
    tileSizes: [{ name: "Up to 2'x2'" }, { name: "2'x2' to 4'x4'" }, { name: "Above 4'x4'" }],
  })

  const getProductRecommendations = () => {
    const { roomCategory, substrateType, tileType, tileSize } = selections

    // Water Submerged areas - mostly S-31 with some S-41 and S-51
    if (roomCategory === "Water Submerged") {
      if (tileType === "Natural Stones" && tileSize === "Above 4'x4'") {
        return [tileAdhesiveProducts.find((p) => p.itemNo === "S-41")]
      }
      if (tileType === "Quartz/ Composites/ Engineered Stone/ Metal/ Glass") {
        return [tileAdhesiveProducts.find((p) => p.itemNo === "S-51")]
      }
      // Default to S-31 for water submerged
      return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
    }

    // Vibration Areas - based on characteristics and scope
    if (roomCategory === "Vibration Areas") {
      if (tileSize === "Above 4'x4'" || tileType === "Quartz/ Composites/ Engineered Stone/ Metal/ Glass") {
        return [tileAdhesiveProducts.find((p) => p.itemNo === "S-51")]
      }
      if (tileType === "Natural Stones" || tileSize === "2'x2' to 4'x4'") {
        return [tileAdhesiveProducts.find((p) => p.itemNo === "S-41")]
      }
      return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
    }

    // Internal and External Areas (same logic)
    if (roomCategory === "Internal Area" || roomCategory === "External Area") {
      // Cement Based Surfaces
      if (substrateType === "Cement Based Surfaces Like Concrete, Screed") {
        if (tileType === "Ceramic Tiles/ Porous Tiles") {
          if (tileSize === "Up to 2'x2'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-11")]
          if (tileSize === "2'x2' to 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-21")]
          if (tileSize === "Above 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
        }

        if (tileType === "Vitrified Tiles") {
          if (tileSize === "Up to 2'x2'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-11")]
          if (tileSize === "2'x2' to 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-21")]
          if (tileSize === "Above 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
        }

        if (tileType === "Natural Stones") {
          if (tileSize === "Up to 2'x2'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-21")]
          if (tileSize === "2'x2' to 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
          if (tileSize === "Above 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-41")]
        }

        if (tileType === "Glass Mosaic Tile") {
          if (tileSize === "Up to 2'x2'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
          if (tileSize === "2'x2' to 4'x4'" || tileSize === "Above 4'x4'")
            return [tileAdhesiveProducts.find((p) => p.itemNo === "S-41")]
        }

        if (tileType === "Quartz/ Composites/ Engineered Stone/ Metal/ Glass") {
          if (tileSize === "Up to 2'x2'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
          if (tileSize === "2'x2' to 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-41")]
          if (tileSize === "Above 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-51")]
        }
      }

      // Tile-On-Tile applications
      if (substrateType === "Tile-On-Tile / Existing Stones") {
        if (tileSize === "Up to 2'x2'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-21")]
        if (tileSize === "2'x2' to 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
        if (tileSize === "Above 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-41")]
      }

      // Other substrate types - default recommendations
      if (
        substrateType === "Drywalls Like Gypsum/ Cement/ Bison Boards / Plywood" ||
        substrateType === "Metal/ Glass/ Epoxy Flooring"
      ) {
        if (tileSize === "Up to 2'x2'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
        if (tileSize === "2'x2' to 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-41")]
        if (tileSize === "Above 4'x4'") return [tileAdhesiveProducts.find((p) => p.itemNo === "S-51")]
      }
    }

    // Fallback to default recommendations
    return [tileAdhesiveProducts.find((p) => p.itemNo === "S-31")]
  }

  const handleSelection = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }))

    // Logic to move to the next sub-step or main step
    if (currentStep === 1) {
      if (key === "roomCategory") {
        setSubStep(2)
      } else if (key === "specificRoom") {
        setSubStep(3)
      } else if (key === "applicationArea") {
        setCurrentStep(2)
        setSubStep(1)
      }
    } else if (currentStep === 2) {
      if (key === "substrateType") {
        setSubStep(2)
      } else if (key === "tileType") {
        setSubStep(3)
      } else if (key === "tileSize") {
        setCurrentStep(3)
      }
    }
  }

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
      return selections.applicationArea !== ""
    } else if (step === 2) {
      return selections.tileSize !== ""
    } else if (step === 3) {
      return currentStep === 3
    }
    return false
  }

  const getSubStepStatus = (mainStep, subStepNumber) => {
    if (mainStep === 1) {
      if (subStepNumber === 1) return selections.roomCategory !== ""
      if (subStepNumber === 2) return selections.specificRoom !== ""
      if (subStepNumber === 3) return selections.applicationArea !== ""
    }
    if (mainStep === 2) {
      if (subStepNumber === 1) return selections.substrateType !== ""
      if (subStepNumber === 2) return selections.tileType !== ""
      if (subStepNumber === 3) return selections.tileSize !== ""
    }
    return false
  }

  const goBack = () => {
    if (currentStep === 1 && subStep === 3) {
      setSubStep(2)
      setSelections((prev) => ({ ...prev, applicationArea: "" }))
    } else if (currentStep === 1 && subStep === 2) {
      setSubStep(1)
      setSelections((prev) => ({ ...prev, specificRoom: "", applicationArea: "" }))
    } else if (currentStep === 2 && subStep === 1) {
      setCurrentStep(1)
      setSubStep(3)
      setSelections((prev) => ({ ...prev, substrateType: "", tileType: "", tileSize: "" }))
    } else if (currentStep === 2 && subStep === 2) {
      setSubStep(1)
      setSelections((prev) => ({ ...prev, tileType: "", tileSize: "" }))
    } else if (currentStep === 2 && subStep === 3) {
      setSubStep(2)
      setSelections((prev) => ({ ...prev, tileSize: "" }))
    }
  }

  const openWhatsApp = () => {
    const phoneNumber = "+918700630602"
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  const isStep1Complete = getStepStatus(1)
  const isStep2Complete = getStepStatus(2)

  const { roomCategories, applicationAreas, substrateTypes, tileTypes, tileSizes } = adhesiveData.current

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
              <div
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-black font-bold text-sm transition-colors duration-300 ${currentStep >= 1 ? "bg-green-500" : "bg-gray-400"}`}
              >
                1
              </div>
              <span
                className={`ml-1 md:ml-2 font-medium text-xs md:text-base ${currentStep >= 1 ? "text-gray-800" : "text-black"}`}
              >
                Select Room
              </span>
            </div>
            <div className="w-8 md:w-16 h-1 bg-gray-300">
              <div
                className={`h-full transition-all duration-300 ${currentStep >= 2 ? "bg-green-500 w-full" : "w-0"}`}
              ></div>
            </div>
            <div className="flex items-center">
              <div
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-black font-bold text-sm transition-colors duration-300 ${currentStep >= 2 ? "bg-green-500" : "bg-gray-400"}`}
              >
                2
              </div>
              <span
                className={`ml-1 md:ml-2 font-medium text-xs md:text-base ${currentStep >= 2 ? "text-gray-800" : "text-black"}`}
              >
                Type & Size
              </span>
            </div>
            <div className="w-8 md:w-16 h-1 bg-gray-300">
              <div
                className={`h-full transition-all duration-300 ${currentStep >= 3 ? "bg-green-500 w-full" : "w-0"}`}
              ></div>
            </div>
            <div className="flex items-center">
              <div
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-black font-bold text-sm transition-colors duration-300 ${currentStep >= 3 ? "bg-green-500" : "bg-gray-400"}`}
              >
                3
              </div>
              <span
                className={`ml-1 md:ml-2 font-medium text-xs md:text-base ${currentStep >= 3 ? "text-gray-800" : "text-gray-500"}`}
              >
                Product
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Steps Summary */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg h-fit">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">Steps</h3>
          <div className="space-y-6">
            <div className="relative pl-8">
              <div
                className={`absolute top-0 left-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${isStep1Complete ? "bg-gray-700 text-white" : "bg-gray-400 text-white"}`}
              >
                1
              </div>
              <span
                className={`font-medium text-base md:text-lg ${isStep1Complete ? "text-gray-600" : "text-gray-700"}`}
              >
                Choose Area / Room
              </span>
              {selections.roomCategory && (
                <div className="ml-2 mt-2 text-xs md:text-sm text-gray-500 break-words space-y-1">
                  <div className={getSubStepStatus(1, 1) ? "text-gray-600" : "text-gray-700"}>- Select the Area</div>
                  {selections.specificRoom && (
                    <div className={getSubStepStatus(1, 2) ? "text-gray-600" : "text-gray-700"}>- Select the Room</div>
                  )}
                  {selections.applicationArea && (
                    <div className={getSubStepStatus(1, 3) ? "text-gray-600" : "text-gray-700"}>
                      - Select the Application Area
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="relative pl-8">
              <div
                className={`absolute top-0 left-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${isStep2Complete ? "bg-gray-600 text-white" : "bg-gray-400 text-white"}`}
              >
                2
              </div>
              <span
                className={`font-medium text-base md:text-lg ${isStep2Complete ? "text-gray-600" : "text-gray-700"}`}
              >
                Size & Type Of Tile/Stone
              </span>
              {selections.substrateType && (
                <div className="ml-2 mt-2 text-xs md:text-sm text-gray-500 break-words space-y-1">
                  <div className={getSubStepStatus(2, 1) ? "text-gray-600" : "text-gray-700"}>
                    - Select the Substrate
                  </div>
                  {selections.tileType && (
                    <div className={getSubStepStatus(2, 2) ? "text-gray-600" : "text-gray-700"}>
                      - Select the Tile Type
                    </div>
                  )}
                  {selections.tileSize && (
                    <div className={getSubStepStatus(2, 3) ? "text-gray-600" : "text-gray-700"}>
                      - Select the Tile Size
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="relative pl-8">
              <div
                className={`absolute top-0 left-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${currentStep === 3 ? "bg-gray-600 text-white" : "bg-gray-400 text-white"}`}
              >
                3
              </div>
              <span
                className={`font-medium text-base md:text-lg ${currentStep === 3 ? "text-gray-600" : "text-gray-700"}`}
              >
                Recommended Adhesives
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              {currentStep === 1 &&
                (subStep === 1 ? "Select the Area" : subStep === 2 ? "Select the Room" : "Select the Application Area")}
              {currentStep === 2 &&
                (subStep === 1
                  ? "Select the Type of Substrate"
                  : subStep === 2
                    ? "Select the Type of Tile"
                    : "Select the Size of Tile")}
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
            ) : (
              (currentStep > 1 || subStep > 1) && (
                <button
                  onClick={goBack}
                  className="px-4 py-2 text-sm md:text-base border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  ← BACK
                </button>
              )
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
              {getProductRecommendations()
                .filter(Boolean)
                .map((product, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <div
                      className={`p-4 font-bold text-white text-center ${product.type.startsWith("Best") || product.type.startsWith("Premium") ? "bg-gray-600" : "bg-gray-600"}`}
                    >
                      {product.type}
                    </div>
                    <div className="p-6">
                      <div className="w-40 h-40 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center text-xs text-gray-500">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={openWhatsApp}
                          className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm"
                        >
                          CONTACT US
                        </button>
                        <button
                          onClick={() => navigate(`/products/${product.slug}`)}
                          className="flex-1 py-2 px-4 bg-lime-700 text-white rounded-lg hover:bg-lime-800 transition-colors text-sm"
                        >
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
