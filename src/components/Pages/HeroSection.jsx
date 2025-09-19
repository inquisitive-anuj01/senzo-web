import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const  one =  "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1758264293/Your_paragraph_text_2_r5lu7s.png";
const two = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1758264294/Your_paragraph_text_z2gaib.png";
const three = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1758264294/Your_paragraph_text_1_kcglrt.png";

const sections = [
  {
    id: 0,
    title: "TILES ADHESIVE",
    image: one,
    color: "#2b1010",
    slug: "tile-adhesive",
  },
  {
    id: 1,
    title: "EPOXY GROUT",
    image: two,
    color: "#10162b",
    slug: "epoxy-grout",
  },
  {
    id: 2,
    title: "OTHER PRODUCTS",
    image: three,
    color: "#28102b",
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
      className={`flex w-full h-[88vh] font-inter overflow-hidden relative 
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
            className="absolute text-white font-bold "
            style={{ zIndex: 30 }} 
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
              top: expanded === index ? (isMobile ? "15%" : "9%") : "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              rotate: isMobile ? 0 : expanded === index ? 0 : -90,
              fontSize:
                expanded === index ? (isMobile ? "2rem" : "4rem") : "2rem",
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
                  top: isMobile ? "25%" : "20%",
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
              left: "5%",
              x: "-50%",
              opacity: 0,
              width: "100%",
              scale: 0.7,
            }}
            animate={{
              bottom:
                expanded === index
                  ? isMobile
                    ? "3%"
                    : "0.8%"
                  : isMobile
                  ? "8%"
                  : "2%",
              left: "50%",
              x: "-50%",
               opacity: expanded === index ? 1 : isMobile ? 0 : 0.8,
              width: expanded === index ? (isMobile ? "95%" : "99%") : "90%",
              scale: expanded === index ? (isMobile ? 1.1 : 1) : 1.06,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
