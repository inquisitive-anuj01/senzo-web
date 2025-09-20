import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          Privacy <span className="text-[#3944bc]">Policy</span>
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
            At Senzo, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, fill out a form, and in connection with other activities, services, features or resources we make available. We may also collect non-personal identification information whenever you interact with our site.
          </p>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">2. How We Use Collected Information</h2>
          <p>
            Senzo may collect and use your personal information for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>To improve customer service.</li>
            <li>To personalize user experience.</li>
            <li>To run a promotion, contest, survey or other site feature.</li>
            <li>To send periodic emails regarding your inquiries or other requests.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">3. How We Protect Your Information</h2>
          <p>
            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.
          </p>

          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">4. Sharing Your Personal Information</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers.
          </p>
          
          <h2 className="text-2xl font-bold text-[#3944bc] mt-8 mb-4">5. Your Acceptance of These Terms</h2>
          <p>
            By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
