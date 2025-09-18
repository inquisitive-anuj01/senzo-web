import React from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useNavigate } from "react-router-dom";

const logo =
  "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757323270/senzo_white_png_am9mkk.png";

const productsLink = [
  {
    name: "Tile & Stone Adhesive",
    slug: "/category/tile-adhesive",
  },
  {
    name: "Grouts",
    slug: "/category/epoxy-grout",
  },
  {
    name: "Cleaner",
    slug: "/products/tile-cleaner",
  },
];

const toolsLinks = [
  {
    name: "Adhesive Coverage",
    slug: "/tools/adhesive-coverage",
  },
  {
    name: "Joint Filler Coverage",
    slug: "/tools/joint-filler-coverage",
  },
  {
    name: "Tile Adhesive Recommender",
    slug: "/tools/tile-adhesive-recommender",
  },
  {
    name: "Tile Joint Filler Visualizer",
    slug: "/tools/tile-joint-filler-visualizer",
  },
];

const footerLinks = [
  {
    name: "About Us",
    slug: "/about",
  },
  {
    name: "Privacy Policy",
    slug: "/privacy-policy",
  },
  {
    name: "Terms and Conditions",
    slug: "/terms-and-conditions",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className=" relative z-40 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 pt-16 pb-8 px-6 sm:px-12 rounded-t-[48px] overflow-hidden mt-[-80px] ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start text-left space-y-6 "
        >
          <img
            src={logo}
            alt="Senzo Logo"
            className="h-25 w-auto cursor-pointer"
          />
        </motion.div>

        {/* Middle Section - Products */}
        {/* Products Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start md:items-start text-left md:text-left"
        >
          <motion.h4
            whileHover={{ x: 5 }}
            className="text-xl text-white font-bold mb-6 relative inline-block"
          >
            Products
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
          </motion.h4>
          <ul className="space-y-4 pl-0">
            {productsLink.map((product, index) => (
              <motion.li
                key={index}
                className="group flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span> */}
                <Link
                  to={product.slug}
                  className="relative transition-all duration-300 hover:text-amber-400"
                >
                  {product.name}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-amber-500 w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start md:items-start text-left md:text-left"
        >
          <motion.h4
            whileHover={{ x: 5 }}
            className="text-xl text-white font-bold mb-6 relative inline-block"
          >
            Tools
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
          </motion.h4>
          <ul className="space-y-4 pl-0">
            {toolsLinks.map((tool, index) => (
              <motion.li
                key={index}
                className="group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={tool.slug}
                  className="relative transition-all duration-300 hover:text-amber-400 flex items-center"
                >
                  {/* <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span> */}
                  {tool.name}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-amber-500 w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section - Contact */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start md:items-start text-left md:text-left"
        >
          <motion.h4
            whileHover={{ x: 5 }}
            className="text-xl text-white font-bold mb-6 relative inline-block"
          >
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
          </motion.h4>
          <div className="space-y-5">
            {/* Address */}
            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-1 mr-3 text-amber-500 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="max-w-xs text-left">
                  Plot D-15, Gopalpur Industrial Area, Sikandrabad - 203205
                  Distt. Bulandshahr (UP) India
                </p>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-1 mr-3 text-amber-500 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="max-w-xs text-left">
                  8A National Highway, OPP.132 Kva Sub-Station, At Lalpar,
                  Morbi-363642, Gujarat, India.
                </p>
              </motion.div>
            </div>

            {/* Phone Numbers */}
            {["8700630602"].map((phone, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mr-3 text-amber-500"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.98 5.51a2 2 0 0 1-1.28 2.18l-1.92.73a1.94 1.94 0 0 0-.82 2.11 15.68 15.68 0 0 0 6 6 1.94 1.94 0 0 0 2.11-.82l.73-1.92a2 2 0 0 1 2.18-1.28l5.51.98a2 2 0 0 1 1.72 2z"></path>
                </svg>
                <a
                  href={`tel:${phone}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {phone}
                </a>
              </motion.div>
            ))}

            {/* Email */}
            <motion.div whileHover={{ x: 5 }} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mr-3 text-amber-500"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a
                href="mailto:senzoadhesives@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                info@senzoadhesives.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left space-y-4 sm:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Senzo. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm ">
            Designed & Developed by -{" "}
            <a
              href="https://inquisitivedigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors duration-300"
            >
              <span className="font-bold">Inquisitive Digital</span>
            </a>
          </p>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            {footerLinks.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm"
              >
                <Link to={item.slug}>{item.name}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
