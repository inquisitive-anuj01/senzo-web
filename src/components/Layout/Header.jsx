import { useState, useRef, useEffect } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiMenu,
  FiX,
  FiPhone,
  FiTarget,
  FiEye,
  FiTool,
  FiGrid,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const logo =
  "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757323271/senzo_png_dmj1mk.png";

import { tileAdhesive } from "../ProductsInfo/product.js";
import {
  epoxyGrout,
  tileGrout,
  groutGlitter,
  groutHardner,
} from "../ProductsInfo/product.js";
import { TileCleaner } from "../ProductsInfo/product.js";
import { BlockAdhesive, grout2k } from "../ProductsInfo/product.js";
import { discoverSolutions } from "../ProductsInfo/product.js";

const Header = () => {
  const navigate = useNavigate();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isSidebarClosing, setIsSidebarClosing] = useState(false);
  const [isOverlayAnimatingOut, setIsOverlayAnimatingOut] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeProductCategory, setActiveProductCategory] =
    useState("tiles-adhesive");
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsSidebarClosing(false);
      setShowOverlay(true);
      const timer = setTimeout(() => {
        setShowSidebar(true);
      }, 700); // overlay duration
      return () => clearTimeout(timer);
    } else {
      // Closing: first sidebar, then overlay
      if (showSidebar) {
        setIsSidebarClosing(true);
        setTimeout(() => {
          setShowSidebar(false);
          setTimeout(() => setShowOverlay(false), 700);
        }, 500);
      } else {
        setShowOverlay(false);
      }
    }
  }, [isMobileMenuOpen, showSidebar]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMobileMenu = () => {
    setIsSidebarClosing(true);
    setTimeout(() => {
      setShowSidebar(false);
      setIsOverlayAnimatingOut(true);
      setTimeout(() => {
        setIsOverlayAnimatingOut(false);
        setShowOverlay(false);
        setIsMobileMenuOpen(false);
        setIsSidebarClosing(false);
      }, 700);
    }, 500);
  };

  const productCategories = {
    "tiles-adhesive": {
      name: "Tiles Adhesive",
      products: tileAdhesive.map((product) => ({
        name: product.name,
        image: product.image,
        slug: product.slug,
        itemNo: product.itemNo,
      })),
    },
    "epoxy-grout": {
      name: "Grouting Solutions",
      products: [
        ...epoxyGrout.map((product) => ({
          name: product.name,
          image: product.image,
          slug: product.slug,
        })),
        ...tileGrout.map((product) => ({
          name: product.name,
          image: product.image,
          slug: product.slug,
        })),

        ...grout2k.map((product) => ({
          name: product.name,
          image: product.image,
          slug: product.slug,
        })),
        ...groutHardner.map((product) => ({
          name: product.name,
          image: product.image,
          slug: product.slug,
        })),
      ],
    },
    "tile-cleaner": {
      name: "Tile Cleaner",
      products: TileCleaner.map((product) => ({
        name: product.name,
        image: product.image,
        slug: product.slug,
      })),
    },
    "other-products": {
      name: "Other Products",
      products: [
        ...BlockAdhesive.map((product) => ({
          name: product.name,
          image: product.image,
          slug: product.slug,
        })),
        ...groutGlitter.map((product) => ({
          name: product.name,
          image: product.image,
          slug: product.slug,
        })),
      ],
    },
  };

  const categoryRoutes = {
    "tiles-adhesive": "/category/tile-adhesive",
    "epoxy-grout": "/category/epoxy-grout",
    "tile-cleaner": "/products/tile-cleaner",
    "other-products": "/category/other-products",
  };

  const tools = [
    {
      name: "Calculate Adhesive Coverage",
      icon: FiTarget,
      slug: "adhesive-coverage",
    },
    {
      name: "Calculate Joint Filler Coverage",
      icon: FiGrid,
      slug: "joint-filler-coverage",
    },
    {
      name: "Tile Adhesive Recommender",
      icon: FiTool,
      slug: "tile-adhesive-recommender",
    },
    {
      name: "Tile Joint Filler Visualizer",
      icon: FiEye,
      slug: "tile-joint-filler-visualizer",
    },
  ];

  const openWhatsApp = () => {
    const phoneNumber = "+918700630602";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-md shadow-md"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-25">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div
                  className="relative cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <img
                    src={logo || "/placeholder.svg"}
                    alt="Senzo Logo"
                    className="h-20 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Products Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-black hover:text-[#3944bc] font-medium py-9.5 relative">
                  <span>Products</span>
                  {activeDropdown === "products" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[2px] bg-[#fa5b3d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                </button>

                {activeDropdown === "products" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 mt-0">
                    <div className="flex">
                      <div className="w-1/4 pr-6 border-r border-gray-200 relative">
                        <div className="absolute inset-0 bg-gray-50 opacity-30"></div>
                        
                        <div className="relative z-10">
                          <h3 className="font-semibold text-black px-3 mb-4 text-left">
                            Categories
                          </h3>
                          <ul className="space-y-2">
                            {Object.entries(productCategories).map(
                              ([key, category]) => (
                                <li key={key}>
                                  <button
                                    className={`w-full text-left px-3 py-2 rounded-md transition-colors cursor-pointer ${
                                      activeProductCategory === key
                                        ? "bg-white text-[#3944bc] font-medium border border-[#3944bc] transition-all duration-300"
                                        : "text-black hover:bg-gray-50"
                                    }`}
                                    onMouseEnter={() =>
                                      setActiveProductCategory(key)
                                    }
                                    onClick={() => {
                                      navigate(categoryRoutes[key]);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {category.name}
                                  </button>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Right Side - Products Grid */}
                      <div className="w-3/4 pl-6">
                        <h3 className="font-semibold text-black mb-4">
                          {productCategories[activeProductCategory]?.name}
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {productCategories[
                            activeProductCategory
                          ]?.products.map((product, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                navigate(`/products/${product.slug}`);
                                setActiveDropdown(null);
                              }}
                              className="text-center p-3 rounded-lg hover:bg-white cursor-pointer transition-colors border hover:border-[#3944bc]"
                            >
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-20 h-20 mx-auto mb-2 object-contain"
                              />
                              <p className="text-sm text-black mb-1 font-bold">
                                {product.itemNo || ""}
                              </p>
                              <p className="text-sm text-black font-medium">
                                {product.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("discover")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-black hover:text-[#3944bc] font-medium py-9.5 relative">
                  <span>Discover Solution</span>
                  {activeDropdown === "discover" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[2px] bg-[#fa5b3d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                </button>

                {activeDropdown === "discover" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 mt-0">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-black text-center mb-2">
                        Solution to Modern Tile & Stone Fixing Challenges
                      </h3>
                      <div className="w-16 h-0.5 bg-[#fa5b3d] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {discoverSolutions.map((solution) => (
                        <div
                          key={solution.id}
                          onClick={() => {
                            navigate(`/discover-solution/${solution.slug}`);
                            setActiveDropdown(null);
                          }}
                          className="text-center p-3 rounded-lg hover:bg-white cursor-pointer transition-colors border hover:border-[#3944bc]"
                        >
                          <img
                            src={solution.image || "/placeholder.svg"}
                            alt={solution.name}
                            className="w-20 h-20 mx-auto mb-2 object-contain"
                          />
                          <p className="text-sm text-black font-medium leading-tight">
                            {solution.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tools Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("tools")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-black hover:text-[#3944bc] font-medium py-9.5 relative">
                  <span>Tools</span>
                  {activeDropdown === "tools" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[2px] bg-[#fa5b3d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                </button>

                {activeDropdown === "tools" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 mt-0 ">
                    <div className="space-y-2">
                      {tools.map((tool, index) => (
                        <button
                          onClick={() => {
                            navigate(`/tools/${tool.slug}`);
                            setActiveDropdown(null);
                          }}
                          key={index}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg hover:bg-white border hover:border-[#3944bc]  transition-colors"
                        >
                          <tool.icon className="text-[#fa5b3d] text-lg" />
                          <span className="text-black font-medium hover:text-[#3944bc]">
                            {tool.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="relative group text-black hover:text-[#3944bc] font-medium py-9"
              >
                <span>About Us</span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2  w-[140%] h-[2px] bg-[#fa5b3d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </Link>
            </nav>

            <div className="flex items-center space-x-4 ">
              {/* Helpline Button */}
              <button
                onClick={openWhatsApp}
                className={` text-black hover:text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors border border-gray-300 shadow-md font-medium ${
                  isScrolled
                    ? "bg-white/20 backdrop-blur-md hover:bg-black"
                    : "bg-white hover:bg-black"
                }`}
              >
                <FiPhone className="text-lg" />
                <span className="hidden sm:inline font-medium hover:text-white">Helpline</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-[#3944bc]  transition-colors py-5"
              >
                <FiMenu className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {(isMobileMenuOpen || showOverlay || isOverlayAnimatingOut) && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          {(showOverlay || isOverlayAnimatingOut) && (
            <div
              className={`fixed inset-0 bg-gray-900 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showOverlay && !isOverlayAnimatingOut
                  ? "translate-x-0 opacity-70"
                  : "-translate-x-full opacity-0"
              }`}
              onClick={handleCloseMobileMenu}
            />
          )}

          {/* Sidebar */}
          {(showSidebar || isSidebarClosing) && (
            <div
              className={`fixed top-0 left-0 h-full w-90 bg-white shadow-xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-auto ${
                showSidebar && !isSidebarClosing
                  ? "translate-x-0"
                  : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 py-10">
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Senzo Logo"
                  className="h-20 w-auto"
                />
                <button
                  onClick={handleCloseMobileMenu}
                  className="p-2 text-gray-700 hover:text-red-600"
                >
                  <FiX className="text-3xl" />
                </button>
              </div>

              <nav className="p-4 space-y-8">
                <MobileProductsDropdown
                  title="Products"
                  categories={productCategories}
                  onLinkClick={handleCloseMobileMenu}
                />

                <MobileDropdown
                  title="Discover Solution"
                  prefix="discover-solution" 
                  items={discoverSolutions}
                  onLinkClick={handleCloseMobileMenu}
                />

                <MobileDropdown
                  title="Tools"
                  prefix="tools"
                  items={tools}
                  onLinkClick={handleCloseMobileMenu}
                />
                <Link
                  to="/about"
                  className="block py-2 text-black text-lg font-bold hover:[#3944bc] "
                  onClick={handleCloseMobileMenu}
                >
                  About Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const MobileDropdown = ({ title,prefix, items, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (item) => {
    setIsOpen(false);
    if (onLinkClick) onLinkClick();
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-black text-lg font-bold "
      >
        <span>{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {isOpen && (
        <div className="pl-4 mt-2 space-y-4">
          {items.map((item, index) => (
            <Link
              key={index}
              to={`/${prefix}/${item.slug}`}
              className="block py-1 text-sm text-black hover:text-[#3944bc] "
              onClick={() => handleClick(item)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileProductsDropdown = ({ title, categories, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (categoryKey) => {
    if (openCategory === categoryKey) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryKey);
    }
  };

  const handleProductClick = () => {
    setIsOpen(false);
    setOpenCategory(null);
    if (onLinkClick) onLinkClick();
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-black text-lg font-bold"
      >
        <span>{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {isOpen && (
        <div className="pl-4 mt-2 space-y-4">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key}>
              <button
                onClick={() => handleCategoryClick(key)}
                className="flex items-center justify-between w-full py-4 text-lg text-black hover:text-[#3944bc] "
              >
                <span>{category.name}</span>
                {openCategory === key ? (
                  <FiChevronUp size={14} />
                ) : (
                  <FiChevronDown size={14} />
                )}
              </button>

              {openCategory === key && (
                <div className="pl-4 mt-1 space-y-5">
                  {category.products.map((product, index) => (
                    <Link
                      key={index}
                      to={`/products/${product.slug}`}
                      className="block py-1 text-sm text-black hover:text-[#3944bc] "
                      onClick={handleProductClick}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
