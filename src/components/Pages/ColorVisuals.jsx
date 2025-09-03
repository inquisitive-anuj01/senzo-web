import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ColorVisuals = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [colorPage, setColorPage] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);

  const navigate = useNavigate();

  // The list of colors to display. You can add more as needed.
  const jointColors = [
    { name: "PASTEL BROWN", hex: "#904140" },
    { name: "TERRACOTTA", hex: "#812c2c" },
    { name: "RED", hex: "#ad393c" },
    { name: "SCARLET", hex: "#b82c37" },
    { name: "BURGUNDY", hex: "#a97362" },
    { name: "ARCTIC BLUE", hex: "#4a7697" },
    { name: "SAPPHIRE BLUE", hex: "#29446f" },
    { name: "SKY BLUE", hex: "#82bfc9" },
    { name: "ALPINE BLUE", hex: "#135a7f" },
    { name: "MEDOW GREEN", hex: "#314512" },
    { name: "DARK GREEN", hex: "#2d5345" },
    { name: "PASTEL GREEN", hex: "#639f9e" },
    { name: "BEIGE", hex: "#a89957" },
    { name: "JAISALMER", hex: "#c28e2a" },
    { name: "LILY WHITE", hex: "#fef2bc" },
    //  { name: "SNOW WHITE", hex: "#e9ebe7" },
    { name: "PASTEL GREY", hex: "#979992" },
    { name: "IVORY", hex: "#c5bca9" },
    { name: "KHAKI", hex: "#b79f8b" },
    { name: "BURLYWOOD", hex: "#7f6a64" },
    { name: "SLATE GREY", hex: "#5a5051" },
    { name: "STEEL GREY", hex: "#4d4d53" },
    { name: "COFFEE BROWN", hex: "#382c2c" },
    { name: "DARK GREY", hex: "#373437" },
    { name: "JET BLACK", hex: "#292929" },
  ];

  const hexTileImage =
    "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756450498/tilebg_n2aspr.png";

  const intervalRef = useRef(null);

  useEffect(() => {
    if (selectedColor) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    intervalRef.current = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % jointColors.length);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [selectedColor, jointColors.length]);

  const handleColorSelect = (colorHex) => {
    setSelectedColor(colorHex);
  };

  const currentColor = selectedColor || jointColors[animationIndex]?.hex;

  const colorsPerPage = window.innerWidth < 768 ? 4 : 7;
  const totalPages = Math.ceil(jointColors.length / colorsPerPage);
  const colorsToShow = jointColors.slice(
    colorPage * colorsPerPage,
    (colorPage + 1) * colorsPerPage
  );

  const handleNextPage = () => {
    setColorPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setColorPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleViewMore = () => {
    navigate("/tools/tile-joint-filler-visualizer");
  };

  return (
    <div className="relative z-20 w-full min-h-[640px] mt-[-40px] pt-[40px] flex justify-center py-12 px-4 overflow-hidden bg-[#F0EAD8] font-sans text-black rounded-t-[48px] shadow-lg">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-x-24 overflow-hidden">
        {/* Left Section: Image and Color Swatches */}
        <div className="relative z-10 flex flex-col items-center py-12 px-4 w-full md:w-auto">
          <div className="relative w-full md:w-[500px] h-[250px] bg-gray-500 rounded-lg shadow-xl overflow-hidden">
            {/* Dynamic Background */}
            <div
              className="absolute inset-0 transition-colors duration-1000 ease-in-out"
              style={{ backgroundColor: currentColor }}
            ></div>

            {/* Tile Overlay */}
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
          <div className="mt-8 w-full md:w-[500px]">
            <div className="w-full bg-white p-4 rounded-full shadow-lg">
              <div className="flex items-center justify-center">
                {/* Prev Button */}
                <button
                  onClick={handlePrevPage}
                  disabled={colorPage === 0}
                  className={`p-1 rounded-full transition-colors duration-200 ${
                    colorPage === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  <ChevronLeft size={26} />
                </button>

                {/* Color Circles */}
                <div className="flex items-center gap-3 overflow-hidden flex-1 justify-center flex-wrap">
                  {colorsToShow.map((color, index) => (
                    <div
                      key={index}
                      onClick={() => handleColorSelect(color.hex)}
                      title={color.name}
                      className={`w-10 h-10 rounded-full border-2 border-teal-200 cursor-pointer transition-transform duration-200 hover:scale-110 shadow-md ${
                        selectedColor === color.hex
                          ? "ring-1 ring-blue-500 ring-offset-1"
                          : ""
                      }`}
                      style={{ backgroundColor: color.hex }}
                    ></div>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNextPage}
                  disabled={colorPage === totalPages - 1}
                  className={`p-1 rounded-full transition-colors duration-200 ${
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

        {/* Right Section: Text */}
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
