import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const  one =  "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757152171/1_wl10m2.png";
const two = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757152036/2_e5ltbb.png";
const three = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757152043/3_wdfmda.png";

const sections = [
  {
    id: 0,
    title: "TILES ADHESIVE",
    image: one,
    color: "#6b4843",
    slug: "tile-adhesive",
  },
  {
    id: 1,
    title: "EPOXY GROUT",
    image: two,
    color: "#694440",
    slug: "epoxy-grout",
  },
  {
    id: 2,
    title: "OTHER PRODUCTS",
    image: three,
    color: "#613e3a",
    slug: "other-products",
  },
];

const HeroSection = () => {
  const [expanded, setExpanded] = useState(0);
  const [isManualControl, setIsManualControl] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isManualControl) {
      const interval = setInterval(() => {
        setExpanded((prev) => (prev + 1) % sections.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isManualControl]);

  const handleClick = (index) => {
    clearTimeout(window.manualControlTimeout);
    setIsManualControl(true);
    setExpanded(index);
    window.manualControlTimeout = setTimeout(() => {
      setIsManualControl(false);
    }, 500);
  };

  return (
    <div
      className={`flex w-full h-[90vh] font-inter overflow-hidden relative 
        ${isMobile ? "flex-col" : "flex-row"}`}
    >
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className="relative flex-1  overflow-hidden flex flex-col items-center justify-center p-8"
          style={{ backgroundColor: section.color }}
          initial={isMobile ? { flexBasis: "20%" } : { flexGrow: 1 }}
          animate={
            isMobile
              ? { flexBasis: expanded === index ? "70%" : "20%" }
              : { flexGrow: expanded === index ? 5 : 1 }
          }
          transition={{ duration: 1.2, ease: "easeInOut" }}
          onClick={() => handleClick(index)}
        >
          {/* Title */}
          <motion.h2
            className="absolute text-white font-bold"
            style={{ zIndex: 3 }}
            initial={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              rotate: isMobile ? 0 : -90,
              fontSize: "1.2rem",
              whiteSpace: "nowrap",
            }}
            animate={{
              top: expanded === index ? (isMobile ? "15%" : "20%") : "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              rotate: isMobile ? 0 : expanded === index ? 0 : -90,
              fontSize:
                expanded === index ? (isMobile ? "2rem" : "3rem") : "1.2rem",
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {section.title}
          </motion.h2>

          <AnimatePresence>
            {expanded === index && (
              <motion.div
                key="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute flex justify-center w-full"
                style={{
                  top: isMobile ? "25%" : "30%",
                  zIndex: 20, 
                  pointerEvents: "auto"
                }}
              >
                <Link
                  to={`/category/${section.slug}`}
                  className="px-6 py-2 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
                  style={{ zIndex: 25, pointerEvents: "auto" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Products
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image */}
          <motion.img
            src={section.image}
            alt={section.title}
            className="absolute object-contain "
            style={{ zIndex: 5, pointerEvents: "none" }} 
            initial={{
              bottom: isMobile ? "8%" : "2%",
              left: "50%",
              x: "-50%",
              opacity: 0,
              width: "90%",
              scale: 0.7,
            }}
            animate={{
              bottom:
                expanded === index
                  ? isMobile
                    ? "3%"
                    : "3%"
                  : isMobile
                  ? "8%"
                  : "10%",
              left: "50%",
              x: "-50%",
               opacity: expanded === index ? 1 : isMobile ? 0 : 0.8,
              width: expanded === index ? (isMobile ? "95%" : "70%") : "90%",
              scale: expanded === index ? (isMobile ? 1.1 : 1) : 0.7,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
