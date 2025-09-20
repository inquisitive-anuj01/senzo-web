import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20 relative mb-10">
      <div className="max-w-6xl mx-auto">
        {/* Title with animation */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Terms & <span className="text-[#3944bc]">Conditions</span>
          <div className="w-16 h-0.5 bg-[#fa5b3d] mx-auto rounded-full mt-4"></div>
        </motion.h1>

        {/* Content with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <p>
            Welcome to the Senzo website. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">1. Use of Website</h2>
          <p>
            The content on this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
          </p>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">2. Intellectual Property</h2>
          <p>
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">3. Links to Other Websites</h2>
          <p>
            Our website may contain links to third-party websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
          </p>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">4. Disclaimer</h2>
          <p>
            The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">5. Governing Law</h2>
          <p>
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
