import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { discoverSolutions } from "../ProductsInfo/product.js";

const splitPoints = (text) => {
  if (!text || typeof text !== "string") return [];
  const hasDash = text.includes(" - ");
  const parts = (hasDash ? text.split(" - ") : text.split(/[,;\n•]+/))
    .map((s) => s.replace(/^\-+/, "").trim())
    .filter(Boolean);
  return [...new Set(parts)];
};

const BulletList = ({ title, items }) => {
  if (!items?.length) return null;
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="flex items-start bg-gray-50 border border-gray-200 rounded-lg p-2 shadow-sm hover:shadow-md transition"
          >
            <span className="mr-2 text-gray-900">•</span>
            <span className="text-gray-700">{it}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default function DiscoverSolutionsDetail() {
  const { slug } = useParams();
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const found = discoverSolutions.find((s) => String(s.slug) === String(slug));
    setSolution(found || null);
    window.scrollTo(0, 0);
  }, [slug]);

  const problems = useMemo(
    () => splitPoints(solution?.pointers),
    [solution]
  );
  const benefits = useMemo(
    () => splitPoints(solution?.benefits || solution?.benefits1),
    [solution]
  );

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Solution not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 mb-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT: Problem Section */}
        <div>
          <motion.div
            initial={{ opacity: 0.7, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-gray-100 rounded-2xl flex items-center justify-center p-6 shadow-md h-[420px]"
          >
            <img
              src={solution.image}
              alt={solution.name}
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="mt-6 text-2xl font-bold text-gray-900"
          >
            {solution.name}
          </motion.h1>

          {solution.question && (
            <p className="mt-3 text-gray-700 text-base leading-relaxed">
              {solution.question}
            </p>
          )}

          <BulletList title="Key Problems" items={problems} />
          <BulletList title="Key Benefits" items={benefits} />
        </div>

        {/* RIGHT: Recommended Solution Section */}
        <div>
          {solution.recommendedSol && (
            <div className="bg-green-50 border border-green-200 p-5 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Recommended Solution
              </h2>
              <p className="text-gray-700 text-base">{solution.recommendedSol}</p>
            </div>
          )}

          {(solution.recommendedImg1 || solution.recommendedImg2) && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-6">
              {solution.recommendedImg1 && (
                <div className="flex flex-col items-center">
                  <img
                    src={solution.recommendedImg1}
                    alt="recommended-1"
                    className="h-70 object-contain"
                  />
                </div>
              )}
              {solution.recommendedImg2 && (
                <div className="flex flex-col items-center">
                  <img
                    src={solution.recommendedImg2}
                    alt="recommended-2"
                    className="h-70 object-contain"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
