import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ColorVisuals = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [colorPage, setColorPage] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);

  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const jointColors = [
    { name: "BRIGHT WHITE 24", hex: "#FFFFFF" },
    { name: "QUARRY RED 46", hex: "#613e3a" },
    { name: "SILK 03", hex: "#ffe7c4" },
    { name: "ANTIQUE 33", hex: "#c5b6a7" },
    { name: "DUSTY ROSE 54", hex: "#bb8a84" },
    { name: "PARCHMENT 61", hex: "#b39981" },

    { name: "BUFF 51", hex: "#736766" },
    { name: "MOCHA 35", hex: "#d4beac" },
    { name: "SANDSTONE", hex: "#736766" },
    { name: "MARBLE BEIGE 17", hex: "#b8a89b" },
    { name: "MIDNIGHT BLACK 22", hex: "#212829" },
    { name: "SKY BLUE 101", hex: "#a1cecd" },

    { name: "ALPINE BLUE 108", hex: "#6a92af" },
    { name: "BURGUNDY 101", hex: "#795b5d" },
    { name: "SILVER SHADOW 88", hex: "#b8bec0" },
    { name: "SLATE GREY 91", hex: "#6d7b84" },
    { name: "PLATINUM 42", hex: "#5c6669" },
    { name: "RAVEN 45", hex: "#36434c" },

    { name: "MUSHROOM 105", hex: "#fff1c0" },
    { name: "SABLE 05", hex: "#462624" },
    { name: "HEMP 27", hex: "#9b8879" },
    { name: "IVY 25", hex: "#667f50" },
    { name: "INCA GOLD 11", hex: "#cc9667" },
    { name: "SMOKE GREY 89", hex: "#cdcbc2" },
  ];

  const hexTileImage =
    "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756450498/tilebg_n2aspr.png";

  useEffect(() => {
    if (selectedColor) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    intervalRef.current = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % jointColors.length);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selectedColor, jointColors.length]);

  const handleColorSelect = (colorHex) => {
    setSelectedColor(colorHex);
  };

  const currentColor = selectedColor || jointColors[animationIndex]?.hex;

  // Responsive: colors per page and step
  const colorsPerPage = window.innerWidth < 768 ? 4 : 7;
  const step = window.innerWidth < 768 ? 2 : 4;
  const totalPages = Math.ceil((jointColors.length - colorsPerPage) / step) + 1;

  const handleNextPage = () => {
    setColorPage((prevPage) =>
      prevPage + 1 >= totalPages ? prevPage : prevPage + 1
    );
  };

  const handlePrevPage = () => {
    setColorPage((prevPage) => (prevPage - 1 < 0 ? 0 : prevPage - 1));
  };

  const handleViewMore = () => {
    navigate("/tools/tile-joint-filler-visualizer");
  };

  return (
    <div className="relative z-20 w-full min-h-[640px] mt-[-40px] pt-[40px] flex justify-center py-12 px-4 overflow-hidden bg-[#F0EAD8] font-sans text-black rounded-t-[48px] shadow-lg">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-x-24 overflow-hidden">
        {/* Left Section */}
        <div className="relative z-10 flex flex-col items-center py-12 px-4 w-full md:w-auto">
          <div className="relative w-full md:w-[600px] h-[350px] rounded-lg shadow-xl overflow-hidden">
            <div
              className="absolute inset-0 transition-colors duration-500 ease-in-out"
              style={{ backgroundColor: currentColor }}
            ></div>
            <div
              className="absolute inset-0 z-10 w-full h-full"
              style={{
                backgroundImage: `url(${hexTileImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 1,
                pointerEvents: "none",
              }}
            ></div>
          </div>

          {/* Color Swatches */}
          <div className="mt-8 w-full md:w-[550px]">
            <div className="w-full bg-white rounded-full shadow-lg overflow-hidden">
              <div className="flex items-center justify-center">
                {/* Prev Button */}
                <button
                  onClick={handlePrevPage}
                  disabled={colorPage === 0}
                  className={`p-1 rounded-full transition-colors duration-200 flex-shrink-0 ${
                    colorPage === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  <ChevronLeft size={26} />
                </button>

                {/* Sliding Container */}
                <div className="relative flex-1 overflow-hidden py-3">
                  <motion.div
                    animate={{
                      x: -(colorPage * step * 56) + "px", 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="flex items-center gap-4"
                    style={{
                      width: `${jointColors.length * 56}px`,
                    }}
                  >
                    {jointColors.map((color, index) => (
                      <div
                        key={index}
                        onClick={() => handleColorSelect(color.hex)}
                        title={color.name}
                        className={`w-10 h-10 rounded-full border-2 border-black/30 cursor-pointer transition-all duration-200 hover:scale-110 shadow-md flex-shrink-0 ${
                          selectedColor === color.hex
                            ? "ring-2 ring-yellow-400 ring-offset-2"
                            : ""
                        }`}
                        style={{ backgroundColor: color.hex }}
                      ></div>
                    ))}
                  </motion.div>
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNextPage}
                  disabled={colorPage === totalPages - 1}
                  className={`p-1 rounded-full transition-colors duration-200 flex-shrink-0 ${
                    colorPage === totalPages - 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  <ChevronRight size={26} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative z-10 w-full md:flex-1 flex flex-col justify-center items-center text-center md:text-left md:items-start p-6 md:p-12">
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
            Tile Joint Filler Visualizer
          </h2>
          <p className="mt-4 text-base lg:text-lg max-w-lg mx-auto md:mx-0">
            Keep it subtle with a matching grout shade or dive into a pop of fun
            colors? Try it yourself. Decide.
          </p>

          <button
            onClick={handleViewMore}
            className="mt-6 px-8 py-3 w-fit mx-auto md:mx-0 text-md font-semibold text-black bg-gray-200 border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:text-teal-800 hover:scale-105"
          >
            EXPLORE POSSIBILITIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorVisuals;
