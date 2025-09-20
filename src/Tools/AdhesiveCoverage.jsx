import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const adhesives = [
  {
    id: "1",
    name: "Tile Adhesive for Ceramic & Vitrified Tiles",
    imgUrl:
      "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146318/S-11_gajeor.png",
    coverageRate: 0.125,
    slug: "ceramic-tile",
  },
  {
    id: "2",
    name: "Polymer Modified Improved Tile Adhesive",
    imgUrl:
      "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-21_onlbrd.png",
    coverageRate: 0.13,
    slug: "polymer-modified",
  },
  {
    id: "3",
    name: "POLYMER MODIFIED TILE & STONE ADHESIVE",
    imgUrl:
      "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-31_gesscu.png",
    coverageRate: 0.14,
    slug: "polymer-modified-tile",
  },
  {
    id: "4",
    name: "DEFORMABLE TILE & STONE ADHESIVE",
    imgUrl:
      "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-41_ppe6yv.png",
    coverageRate: 0.15,
    slug: "deformable-tile-stone",
  },
  {
    id: "5",
    name: "HIGHLY DEFORMABLE TILE & STONE ADHESIVE",
    imgUrl:
      "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146320/S-51_yl5yjh.png",
    coverageRate: 0.135,
    slug: "deformable-tile",
  },
];

const thicknesses = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const AdhesiveCoverage = () => {
  const navigate = useNavigate();

  const [selectedAdhesive, setSelectedAdhesive] = useState(null);
  const [area, setArea] = useState("");
  const [selectedThickness, setSelectedThickness] = useState(6);
  const [requiredKgs, setRequiredKgs] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedAdhesive && area > 0) {
      const coverageRate = adhesives.find(
        (a) => a.id === selectedAdhesive.id
      ).coverageRate;
      const calculatedKgs = area * selectedThickness * coverageRate;
      setRequiredKgs(calculatedKgs);
    } else {
      setRequiredKgs(0);
    }
  }, [selectedAdhesive, area, selectedThickness]);

  const handleAdhesiveSelect = (adhesive) => {
    setSelectedAdhesive(adhesive);
  };

  const handleAreaChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^\d+(\.\d*)?$/.test(value)) {
      if (Number(value) < 1 || Number(value) > 10000000) {
        setError("Area must be between 1 and 10,000,000 Sq.Ft");
      } else {
        setError("");
      }
      setArea(value);
    }
  };

  const handleThicknessChange = (e) => {
    setSelectedThickness(Number(e.target.value));
  };

  //  Contact Us function
  const openWhatsApp = () => {
    const phoneNumber = "+918700630602";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  //  Navigate to product details
  const handleViewDetails = () => {
    if (selectedAdhesive) {
      navigate(`/products/${selectedAdhesive.slug}`);
    }
  };

  const activeStep = selectedAdhesive ? (area > 0 ? 3 : 2) : 1;

  return (
    <div>
      <div className="w-full min-h-screen mx-auto bg-gray-100 font-sans text-gray-800 overflow-hidden p-6 rounded-b-3xl mb-16">
        <h1 className="text-xl md:text-5xl font-semibold text-center text-gray-800 mb-2">
          Adhesive Coverage Calculator
        </h1>
        <p className="text-center text-gray-500 mb-12">
          A tool to estimate the right quantity of tile adhesive for your
          requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="bg-white text-black rounded-2xl p-8 space-y-8">
            {/* Step 1 */}
            <div>
              <h2
                className={`text-2xl font-bold mb-4 ${
                  activeStep === 1 ? "text-[#3944bc]" : "text-black"
                }`}
              >
                1- Select Adhesive
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {adhesives.map((adhesive) => (
                  <button
                    key={adhesive.id}
                    onClick={() => handleAdhesiveSelect(adhesive)}
                    className={`relative p-4 rounded-xl border-2 transition-transform transform hover:scale-105 
                      ${
                        selectedAdhesive && selectedAdhesive.id === adhesive.id
                          ? "border-blue-500 bg-white"
                          : "border-gray-700 bg-gray-300 hover:border-blue-300 "
                      }
                      focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-gray-800`}
                  >
                    <span className="text-sm font-semibold ">
                      {adhesive.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            {selectedAdhesive && (
              <div>
                <h2
                  className={`text-2xl font-bold mb-4 ${
                    activeStep === 2 ? "text-[#3944bc]" : "text-black"
                  }`}
                >
                  2 Enter Area
                </h2>
                <label className="block text-black mb-2 ">
                  Total area of application
                </label>
                <div className="flex items-center bg-gray-100 rounded-xl p-2 border border-gray-700">
                  <input
                    type="text"
                    value={area}
                    onChange={handleAreaChange}
                    placeholder="0"
                    className="w-full bg-transparent text-black placeholder-black-500 outline-none px-2 text-lg"
                  />
                  <span className="text-black px-2">Sq.Ft</span>
                </div>
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </div>
            )}

            {/* Step 3 - Thickness */}
            {area && !error && (
              <div>
                <h2
                  className={`text-2xl font-bold mb-4  ${
                    activeStep === 3 ? "text-[#3944bc]" : "text-black"
                  }`}
                >
                  3 Select Thickness
                </h2>
                <select
                  value={selectedThickness}
                  onChange={handleThicknessChange}
                  className="block w-full sm:w-full max-w-full rounded-md border border-black shadow-sm py-3 px-4 
             focus:outline-none focus:ring-gray-500 focus:border-gray-500 
             bg-white text-gray-800 text-base sm:text-sm"
                >
                  {thicknesses.map((thickness) => (
                    <option key={thickness} value={thickness}>
                      {thickness} mm
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Right Panel */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Required Adhesives
            </h2>
            {selectedAdhesive && area > 0 && !error ? (
              <div className="flex flex-col items-center text-center">
                <img
                  src={selectedAdhesive.imgUrl}
                  alt={selectedAdhesive.name}
                  className="w-auto h-64 object-contain mb-8 rounded-xl shadow-lg "
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x400/CCCCCC/000000?text=Image+Not+Found";
                  }}
                />

                {/*  Bags Needed */}
                <div className="bg-blue-100 border border-blue-400 text-lime-800 px-6 py-3 rounded-xl mb-4 shadow-md">
                  <p className="text-2xl font-bold">
                    {Math.ceil(requiredKgs / 20)} Bags Needed
                  </p>
                  <p className="text-sm text-black">1 Bag = 20kg</p>
                </div>
                <p className="text-5xl font-extrabold text-lime-600 mb-2">
                  {requiredKgs.toFixed(2)} kgs
                </p>
                <p className="text-xl font-semibold text-gray-700 mb-4">
                  {selectedAdhesive.name}
                </p>
                <p className="text-sm italic text-gray-500 mb-6">
                  *Calculated quantity is an estimate, on-site consumption may
                  vary as per site conditions, unevenness of surface,
                  application methodology.
                </p>

                {/* Two Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={openWhatsApp}
                    className="bg-white text-black  px-4 py-2 rounded-lg shadow hover:bg-black hover:text-white border hover:border-blue-500 cursor-pointer"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={handleViewDetails}
                    className="bg-gray-200 text-black  px-4 py-2 rounded-lg shadow hover:bg-black hover:text-white border hover:border-orange-500 cursor-pointer"
                  >
                    View Product Details
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <svg
                  className="w-24 h-24 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2a2 2 0 012-2h4zm-14 0a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2v-2a2 2 0 00-2-2H5z"
                  ></path>
                </svg>
                <p className="text-gray-500">
                  Fill in the requirements on the left to display the quantity
                  required
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdhesiveCoverage;
