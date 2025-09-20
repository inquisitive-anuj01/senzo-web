// AboutUs.jsx
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20 relative z-40 mb-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          About <span className="text-[#3944bc]">Senzo</span>
          <div className="w-16 h-0.5 bg-[#fa5b3d] mx-auto rounded-full mt-4"></div>
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <p>
            Senzo, from the house of innovation, is one of the leading tile
            adhesive and construction solutions companies in India. We are
            committed to providing our customers with cutting-edge tile and
            stone fixing solutions. Senzo products are technologically advanced,
            blending global expertise with local intelligence.
          </p>

          <p>
            Our commitment lies in continual innovation, consistency, and
            excellence. With state-of-the-art infrastructure across multiple
            plants, we ensure superior quality, reliability, and prompt service
            - making Senzo a trusted industry leader. All our products strictly
            adhere to both Indian and European technical standards.
          </p>

          <p>
            With over <span className="text-[#3944bc] font-semibold">10+ manufacturing plants</span> 
            and <span className="text-[#3944bc] font-semibold">300+ trained experts</span>, 
            we are fully equipped to provide on-site technical assistance,
            product recommendations, sample testing, and problem resolution -
            empowering contractors, architects, and builders to achieve
            world-class results.
          </p>

          <p>
            At Senzo, we believe in creating long-lasting solutions. We
            collaborate with architects and applicators to spread awareness about
            best global practices. Through our training programs, we ensure
            applicators and contractors across the country achieve perfection in
            every project.
          </p>

          <p className="italic text-[#3944bc]">
            “Our vision is not just to build stronger bonds but to build
            stronger relationships that last a lifetime.”
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 "
        >
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition ">
            <h3 className="text-xl font-bold text-[#3944bc] mb-3">Our Vision</h3>
            <p>
              To be the most trusted and innovative brand for tile adhesive and
              construction solutions in India and beyond.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[#3944bc] mb-3">Our Mission</h3>
            <p>
              Deliver sustainable, innovative, and world-class products that
              enhance quality of life while empowering builders and customers.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-[#3944bc] mb-3">Our Values</h3>
            <p>
              Integrity, innovation, customer-first approach, and a commitment
              to excellence in everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
