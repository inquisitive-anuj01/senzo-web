import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
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
    <footer className=" relative z-50 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 pt-16 pb-8 px-6 sm:px-12 rounded-t-[48px] overflow-hidden mt-[-80px] ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-12"
      >
        {/* Left Section - Brand */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20"
          >
            <span className="text-white text-lg font-bold">S</span>
          </motion.div>
          <motion.p
            whileHover={{ x: 5 }}
            className="text-white font-bold text-xl mb-6 text-start"
          >
            Senzo - strength beyond limits.
          </motion.p>

          {/* Social Icons */}
          <div className="flex space-x-5">
            {/* Facebook */}
            <motion.a
              href="#"
              aria-label="Facebook"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-[#4267B2] transition-colors duration-300 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.016 3.655 9.184 8.441 9.923V14.86h-2.54v-2.91h2.54V9.873c0-2.522 1.54-3.91 3.79-3.91 1.07 0 1.99.08 2.26.115v2.417h-1.42c-1.248 0-1.49.593-1.49 1.46v1.948h2.91l-.47 2.91h-2.44v7.063C18.345 21.184 22 17.016 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="#"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.653 1.594 4.865 4.865.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.594 4.653-4.865 4.865-.19.058-.57.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.653-1.594-4.865-4.865-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.594-4.653 4.865-4.865 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.266 0-3.67.013-4.947.072-4.358.21-6.78 2.632-6.99 6.99-.059 1.277-.072 1.681-.072 4.947s.013 3.67.072 4.947c.21 4.358 2.632 6.78 6.99 6.99 1.277.059 1.681.072 4.947.072s3.67-.013 4.947-.072c4.358-.21 6.78-2.632 6.99-6.99.059-1.277.072-1.681.072-4.947s-.013-3.67-.072-4.947c-.21-4.358-2.632-6.78-6.99-6.99-1.277-.059-1.681-.072-4.947-.072zM12 5.836a6.164 6.164 0 100 12.328 6.164 6.164 0 000-12.328zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-1.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="#"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.766s.784-1.764 1.75-1.764c.967 0 1.75 1.344 1.75 1.764s-.783 1.766-1.75 1.766zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Middle Section - Products */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.h4
            whileHover={{ x: 5 }}
            className="text-xl text-white font-bold mb-6 relative inline-block"
          >
            Products
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
          </motion.h4>
          <ul className="space-y-4">
            {["Tile & Stone Adhesive", "Grouts", "Tools", "Cleaner"].map(
              (product, index) => (
                <motion.li
                  key={index}
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="relative transition-all duration-300 hover:text-amber-400 flex items-center"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {product}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-amber-500 w-0 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Right Section - Contact */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start text-center md:text-left"
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
                {" "}
                Inquisitive Digital, Noida, Uttar Pradesh, UP-201030, India
              </p>
            </motion.div>

            {/* Phone Numbers */}
            {["+91 9810470965", "+91 8810655337"].map((phone, index) => (
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
                href="mailto:homeprideadhesive1@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                homeprideadhesive1@gmail.com
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
            Designed & Developed by - {" "}
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
            {["About us", "Privacy policy", "Terms and condition"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.05, color: "#f59e0b" }}
                  className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
