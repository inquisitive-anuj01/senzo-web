import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import html2canvas from "html2canvas";
// import * as htmlToImage from "html-to-image";

const jointColors = [
  { name: "SNOW WHITE", hex: "#e9ebe7" },
  { name: "PASTEL GREY", hex: "#979492" },
  { name: "IVORY", hex: "#c5bca9" },
  { name: "KHAKI", hex: "#b79f8b" },
  { name: "BURLYWOOD", hex: "#7f6a64" },
  { name: "SLATE GREY", hex: "#5a5051" },
  { name: "STEEL GREY", hex: "#4d4d53" },
  { name: "COFFEE BROWN", hex: "#382c2c" },
  { name: "DARK GREY", hex: "#373437" },
  { name: "JET BLACK", hex: "#292929" },
  { name: "DARK CHOCOLATE", hex: "#332f2f" },
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
  { name: "SEA SHELL", hex: "#ece9a4" },
  { name: "ANTIQUE WHITE", hex: "#c5c47f" },
  { name: "RAINY DAY", hex: "#b7b483" },
  { name: "NATURAL", hex: "#fddc7b" },
  { name: "YELLOW", hex: "#dcc580" },
  { name: "MUSTARD", hex: "#c4b12c" },
];

const sparkleImages = [
  {
    name: "SILVER",
    url: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756365874/silver_gyecsj.jpg",
  },
  {
    name: "COPPER",
    url: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756365873/copper_dmcpip.jpg",
  },
  {
    name: "GOLDEN",
    url: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756365885/golden_drlpfw.jpg",
  },
];

const templateImages = [
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-1.webp",
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-2.webp",
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-3.webp",
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-4.webp",
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-5.webp",
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-6.webp",
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-7.webp",
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-8.webp",
  "https://www.roff.in/wp-content/uploads/2021/02/tile-template-9.webp",
];

const JointFillersVisuals = () => {
  const [isTemplateSelected, setIsTemplateSelected] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [surface, setSurface] = useState("floor");
  const [tileType, setTileType] = useState("square");
  const [tileLayout, setTileLayout] = useState("standard");
  const [tileSize, setTileSize] = useState("Small");
  const [jointSize, setJointSize] = useState("3mm");
  const [jointColor, setJointColor] = useState("#e9ebe7");
  const [sparkleImage, setSparkleImage] = useState(null);
  const [selectedSparkleUrl, setSelectedSparkleUrl] = useState(null);
  const [colorPage, setColorPage] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const containerRef = useRef(null);
  const fileInputRefInitial = useRef(null);
  const fileInputRefSidebar = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); 
        setIsTemplateSelected(true);
        setSelectedTemplate(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

// download previow logic !
// const handleDownload = async () => {
//   if (!containerRef.current) return;

//   try {
//     const dataUrl = await htmlToImage.toPng(containerRef.current, {
//       quality: 1,
//       cacheBust: true,   // prevent cached image issues
//       useCORS: true,     // allow cross-origin images like your template & sparkles
//     });

//     const link = document.createElement("a");
//     link.download = "visualizer.png";
//     link.href = dataUrl;
//     link.click();
//   } catch (error) {
//     console.error("Error generating image:", error);
//   }
// };


  // pagination logic !

  const colorsPerPage = 21;

  const totalPages = Math.ceil(jointColors.length / colorsPerPage);

  const colorsToShow = jointColors.slice(
    colorPage * colorsPerPage,
    (colorPage + 1) * colorsPerPage
  );

  const RoomImg =
    "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756446853/emptyroom_ozz2gw.jpg";

  const getSelectedColorName = (hex) => {
    const selected = jointColors.find((color) => color.hex === hex);
    return selected ? selected.name.toUpperCase() : "";
  };
  const selectedColorName = getSelectedColorName(jointColor);

  const handleNextPage = () => {
    setColorPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setColorPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // joints width 
  const getJointWidth = () => {
    switch (jointSize) {
      case "3mm":
        return 3;
      case "4mm":
        return 4;
      case "5mm":
        return 5;
      default:
        return 3;
    }
  };

  const handleTemplateSelect = (imgUrl) => {
    setIsTemplateSelected(true);
    setSelectedTemplate(imgUrl);
  };

  const handleColorSelect = (colorHex) => {
    setJointColor(colorHex);
  };

  const handleSparkleSelect = (imageUrl) => {
    if (selectedSparkleUrl === imageUrl) {
      setSparkleImage(null);
      setSelectedSparkleUrl(null);
    } else {
      setSparkleImage(imageUrl);
      setSelectedSparkleUrl(imageUrl);
    }
  };

  const handleReset = () => {
    setIsTemplateSelected(false);
    setSurface("floor");
    setTileType("square");
    setJointSize("3mm");
    setJointColor("#e9ebe7");
    setSparkleImage(null);
    setSelectedSparkleUrl(null);
    setTileLayout("standard");
    setTileSize("Small");
    setSelectedTemplate(null);
  };

  // rendering logic for tiles and bg and sparkles
  const renderTileGrid = () => {
    let rows, cols;

    if (surface === "wall") {
      if (tileType === "square") {
        switch (tileSize) {
          case "Small":
            rows = 3;
            cols = 5;
            break;
          case "Medium":
            rows = 3;
            cols = 3;
            break;
          case "Large":
            rows = 2;
            cols = 3;
            break;
          default:
            rows = 2;
            cols = 3;
        }
      } else if (tileType === "rectangle") {
        switch (tileSize) {
          case "Small":
            rows = 5;
            cols = 6;
            break;
          case "Medium":
            rows = 5;
            cols = 4;
            break;
          case "Large":
            rows = 5;
            cols = 3;
            break;
          default:
            rows = 4;
            cols = 4;
        }
      }
    } else {
      if (tileType === "square") {
        switch (tileSize) {
          case "Small":
            rows = 6;
            cols = 8;
            break;
          case "Medium":
            rows = 4;
            cols = 6;
            break;
          case "Large":
            rows = 3;
            cols = 4;
            break;
          default:
            rows = 4;
            cols = 6;
        }
      } else if (tileType === "rectangle") {
        // --- FLOOR RECTANGLES ---
        switch (tileSize) {
          case "Small":
            rows = 10;
            cols = 8;
            break;
          case "Medium":
            rows = 7;
            cols = 5;
            break;
          case "Large":
            rows = 5;
            cols = 3;
            break;
          default:
            rows = 4;
            cols = 6;
        }
      }
    }

    const jointWidth = getJointWidth();
    const jointColorValue = jointColor;
    const tiles = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let extraStyle = {};

        if (tileLayout === "horizontalSkew" && row % 2 === 1) {
          extraStyle.transform = "translateX(50%)";
        }
        if (tileLayout === "verticalSkew" && col % 2 === 1) {
          extraStyle.transform = "translateY(-30%)";
        }

        // ✅ enforce rectangle look
        if (tileType === "rectangle") {
          extraStyle.aspectRatio = "2 / 1"; // width:height
        }

        tiles.push(
          <div
            key={`${row}-${col}`}
            className="tile"
            style={{
              backgroundImage: selectedTemplate
                ? `url(${selectedTemplate})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxSizing: "border-box",
              ...extraStyle,
            }}
          ></div>
        );
      }
    }

    // -------- Floor container --------
    if (surface === "floor") {
      return (
        <div
          className="floor-visuals-container"
          style={{
            transform: `perspective(900px) rotateX(70deg)`,
            transformOrigin: "center 100%",
            position: "absolute",
            left: "-25%",
            width: "150%",
            height: "218%",
            backgroundColor: jointColorValue,
            overflow: "hidden",
          }}
        >
          {sparkleImage && (
            <div
              className="sparkle-overlay"
              style={{
                backgroundImage: `url(${sparkleImage})`,
                backgroundSize: "100px",
                backgroundRepeat: "repeat",
                opacity: 0.7,
                pointerEvents: "none",
                zIndex: 1,
              }}
            ></div>
          )}
          <div
            className={`tile-grid ${tileLayout} floor`}
            style={{
              display: "grid",
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: `${jointWidth}px`,
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: 2,
              padding: `${jointWidth}px`,
            }}
          >
            {tiles}
          </div>
        </div>
      );
    }

    // -------- Wall container --------
    return (
      <div
        className="wall-visuals-container"
        style={{
          backgroundColor: jointColorValue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "62%",
          height: "50%",
          position: "absolute",
          top: "18%",
          left: "19%",
          overflow: "hidden",
        }}
      >
        {sparkleImage && (
          <div
            className="sparkle-overlay"
            style={{
              backgroundImage: `url(${sparkleImage})`,
              backgroundSize: "100px",
              backgroundRepeat: "repeat",
              opacity: 0.7,
              pointerEvents: "none",
              zIndex: 1,
            }}
          ></div>
        )}
        <div
          className={`tile-grid ${tileLayout} wall`}
          style={{
            display: "grid",
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: `${jointWidth}px`,
            width: "100%",
            height: "100%",
            zIndex: 2,
            position: "relative",
            padding: `${jointWidth}px`,
          }}
        >
          {tiles}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 flex flex-col mb-10">
      <div className="flex-1 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-5xl font-semibold text-center text-gray-800 mb-2">
              Tile Joint Filler Visualizer
            </h1>
            <p className="mt-2 text-md sm:text-lg text-gray-600">
              A tool to help you visualize the right joint filler for your
              beautiful tiles.
            </p>
          </div>
          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Choose Your Style */}
            <div
              className={`p-6 rounded-2xl shadow-lg transition-all duration-300 w-full lg:w-1/3 ${
                isTemplateSelected ? "bg-white" : "bg-gray-200"
              }`}
            >
              <h2 className="text-xl font-semibold mb-6">Choose Your Style</h2>
              {/* 1. Joint Filler Colour */}
              <div
                className={`mb-6 ${
                  !isTemplateSelected ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <h3 className="text-lg font-medium mb-2">
                  1. JOINT FILLER COLOURANT
                </h3>
                <p className="text-xs mb-3 text-gray-500">
                  *Available colour might vary based on the product, please
                  refer to product pages for detailed information.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={colorPage === 0}
                    className={`p-1 rounded-full ${
                      colorPage === 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <div className="grid grid-cols-7 gap-1 flex-1">
                    {colorsToShow.map((color, index) => (
                      <div
                        key={index}
                        onClick={() => handleColorSelect(color.hex)}
                        title={color.name}
                        className={`w-full aspect-square rounded-md border border-gray-300 cursor-pointer transition-transform duration-200 hover:scale-110 shadow-sm ${
                          jointColor === color.hex
                            ? "ring-2 ring-blue-500 ring-offset-2"
                            : ""
                        }`}
                        style={{ backgroundColor: color.hex }}
                      ></div>
                    ))}
                  </div>
                  <button
                    onClick={handleNextPage}
                    disabled={colorPage === totalPages - 1}
                    className={`p-1 rounded-full ${
                      colorPage === totalPages - 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="relative">
                  <select
                    className="block w-full px-2 py-1 text-sm rounded-lg border border-gray-300 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={jointSize}
                    onChange={(e) => setJointSize(e.target.value)}
                  >
                    <option value="3mm">Joint Size 3mm (Default)</option>
                    <option value="4mm">Joint Size 4mm</option>
                    <option value="5mm">Joint Size 5mm</option>
                  </select>
                </div>
              </div>
              {/* 2. Add Sparkle Effect */}
              <div
                className={`mb-6 ${
                  !isTemplateSelected ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <h3 className="text-lg font-medium mb-2">
                  2. ADD SPARKLE EFFECT
                </h3>
                <div className="flex gap-2">
                  {/* Empty box to deselect sparkle */}
                  <div
                    onClick={() => handleSparkleSelect(null)}
                    title="No Sparkle"
                    className={`w-10 h-10 rounded-md border border-gray-300 cursor-pointer transition-transform duration-200 hover:scale-110 shadow-sm flex items-center justify-center ${
                      selectedSparkleUrl === null
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : ""
                    }`}
                  >
                    <span className="text-xs text-gray-500">None</span>
                  </div>
                  {sparkleImages.map((sparkle, index) => (
                    <div
                      key={index}
                      onClick={() => handleSparkleSelect(sparkle.url)}
                      title={sparkle.name}
                      className={`w-10 h-10 rounded-md border border-gray-300 cursor-pointer transition-transform duration-200 hover:scale-110 shadow-sm overflow-hidden flex items-center justify-center ${
                        selectedSparkleUrl === sparkle.url
                          ? "ring-2 ring-blue-500 ring-offset-2"
                          : ""
                      }`}
                    >
                      <img
                        src={sparkle.url}
                        alt={`${sparkle.name} Sparkle`}
                        className="w-full h-full object-cover opacity-50"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* 3. Tile Size */}
              <div
                className={`mb-6 ${
                  !isTemplateSelected ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <h3 className="text-lg font-medium mb-2">3. TILE SIZE</h3>
                <div className="relative">
                  <select
                    className="block w-full px-2 py-1 text-sm rounded-lg border border-gray-300 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={tileSize}
                    onChange={(e) => setTileSize(e.target.value)}
                  >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>
              </div>
              {/* 4. Tile Type */}
              <div
                className={`mb-6 ${
                  !isTemplateSelected ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <h3 className="text-lg font-medium mb-2">4. TILE TYPE</h3>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tileType"
                      value="square"
                      checked={tileType === "square"}
                      onChange={() => setTileType("square")}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                    />
                    <span className="text-sm">Square</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tileType"
                      value="rectangle"
                      checked={tileType === "rectangle"}
                      onChange={() => setTileType("rectangle")}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                    />
                    <span className="text-sm">Rectangle</span>
                  </label>
                </div>
              </div>
              {/* 5. Tile Layout */}
              <div
                className={`mb-6 ${
                  !isTemplateSelected ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <h3 className="text-lg font-medium mb-2">5. TILE LAYOUT</h3>
                <div className="relative">
                  <select
                    className="block w-full px-2 py-1 text-sm rounded-lg border border-gray-300 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={tileLayout}
                    onChange={(e) => setTileLayout(e.target.value)}
                  >
                    <option value="standard">Standard</option>
                    <option value="horizontalSkew">Horizontal Skew</option>
                    <option value="verticalSkew">Vertical Skew</option>
                  </select>
                </div>
              </div>
              {/* 6. Surface Selection */}
              <div
                className={`mb-6 ${
                  !isTemplateSelected ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <h3 className="text-lg font-medium mb-2">
                  6. SELECT A DEFAULT SURFACE
                </h3>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="surface"
                      value="floor"
                      checked={surface === "floor"}
                      onChange={() => setSurface("floor")}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                    />
                    <span className="text-sm">Floor</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="surface"
                      value="wall"
                      checked={surface === "wall"}
                      onChange={() => setSurface("wall")}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                    />
                    <span className="text-sm">Wall</span>
                  </label>
                </div>
              </div>
              {/* Select another template / Upload Image */}
              <div
                className={`mb-6 ${
                  !isTemplateSelected ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <h4 className="text-lg font-medium mb-2">
                  SELECT ANOTHER TEMPLATE
                </h4>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {templateImages.slice(0, 9).map((img, index) => (
                    <div
                      key={index}
                      onClick={() => handleTemplateSelect(img)}
                      className="w-full aspect-square bg-gray-300 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 shadow-md"
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  ))}
                </div>
                <div
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200"
                  onClick={() => fileInputRefSidebar.current.click()}
                >
                  <span className="text-gray-600">Upload Image</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRefSidebar}
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              {/* Reset Style Button */}
              {isTemplateSelected && (
                <button
                  onClick={handleReset}
                  className="mt-6 w-full py-3 rounded-lg bg-gray-600 text-white font-semibold shadow-md transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-700 uppercase"
                >
                  RESET STYLE
                </button>
              )}
            </div>
            {/* Right Main Viewport */}
            <div className="flex-1 flex flex-col p-6 rounded-2xl shadow-lg bg-white relative"
            ref={containerRef}
            >
              
              <h3 className="text-xl font-semibold uppercase">VIEW LAYOUT</h3>
              <hr className="my-4 border-t-2 border-gray-200" />

              {isTemplateSelected && (
                <div className="flex justify-end items-center w-full mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {surface === "floor"
                        ? "FLOOR"
                        : surface === "wall"
                        ? "WALL"
                        : ""}
                    </div>
                    {/* Display the selected color name */}
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedColorName}
                    </div>
                    {/* Display the selected sparkle name if it exists */}
                    {selectedSparkleUrl && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {
                          sparkleImages.find(
                            (s) => s.url === selectedSparkleUrl
                          )?.name
                        }
                      </div>
                    )}
                    {/* <button
                      onClick={handleDownload}
                      className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition-colors duration-200 uppercase"
                    >
                      DOWNLOAD THIS IMAGE
                    </button> */}
                    
                  </div>
                </div>
              )}
              {!isTemplateSelected ? (
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
                  <div
                    className="border-4 border-dashed border-gray-300 p-8 rounded-lg flex flex-col items-center justify-center text-gray-500 w-full md:w-1/2 min-h-[300px] cursor-pointer hover:border-blue-500 transition"
                    onClick={() => fileInputRefInitial.current.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setUploadedImage(reader.result);
                          setIsTemplateSelected(true);
                          setSelectedTemplate(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRefInitial}
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
                    <svg
                      className="w-12 h-12 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      ></path>
                    </svg>
                    <p className="text-center font-medium">Upload an image</p>
                    <p className="mt-2 text-center">
                      Drag & drop an image here
                    </p>
                    <p className="mt-4 text-xs text-center text-gray-400">
                      <sup>*</sup>Tile image should only cover the area within
                      the tile.
                      <br />
                      Only JPG/PNG up to 10MB allowed.
                    </p>
                  </div>

                  <div className="text-xl font-semibold text-gray-500 my-auto">
                    OR
                  </div>
                  {/* Choose from a template section */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-lg font-medium mb-4 text-gray-800">
                      Choose from a template
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {templateImages.slice(0, 8).map((imgUrl, index) => (
                        <div
                          key={index}
                          onClick={() => handleTemplateSelect(imgUrl)}
                          className="w-full aspect-square bg-gray-300 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 shadow-md"
                          style={{
                            backgroundImage: `url(${imgUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div
                    ref={containerRef}
                    className="relative w-full max-w-[800px] aspect-[3/2] rounded-lg shadow-xl overflow-hidden mx-auto bg-gray-200"
                    style={{
                      backgroundImage: `url(${RoomImg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      padding: "20px",
                      display: "flex",
                      justifyContent: "center",
                      
                      alignItems: "center",
                    }}
                  >

                    {renderTileGrid()}
                  </div>
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    <sup>*</sup>Pictures shown are for visual representation
                    purpose only. Actual product/result may vary.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wall-visuals-container {
          position: absolute;
          top: 22%;
          left: 12%;
          width: 76%;
          height: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .floor-visuals-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: perspective(2000px) rotateX(60deg);
          transform-origin: center 85%;
          overflow: hidden;
        }

        .tile-grid {
          display: grid;
          width: 100%;
          height: 100%;
          background-color: transparent;
        }

        .tile {
          width: 100%;
          height: 100%;
          transition: all 0.3s ease;
        }

        .wall .tile-grid.horizontalSkew .tile {
          transform: skewX(-5deg);
        }

        .wall .tile-grid.verticalSkew .tile {
          transform: skewY(-5deg);
        }

        .floor .tile-grid.horizontalSkew .tile {
          transform: skewY(15deg) rotate(5deg);
        }

        .floor .tile-grid.verticalSkew .tile {
          transform: skewX(-15deg);
        }

        .sparkle-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default JointFillersVisuals;
