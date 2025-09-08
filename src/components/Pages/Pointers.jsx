import React from "react";

const pointers = [
  {
    id: 1,
    title: "Premium Quality Control",
    description: "Every batch is tested for performance and durability.",
  },
  {
    id: 2,
    title: "Advanced R & D",
    description: "Continuous innovation for evolving construction needs.",
  },
  {
    id: 3,
    title: "Pan-India/Global Reach",
    description: "Available across major cities with reliable distribution.",
  },
  {
    id: 4,
    title: "Eco-Friendly Solutions",
    description: "Formulated with minimal environmental impact.",
  },
  {
    id: 5,
    title: "Wide Product Range",
    description:
      "Tile adhesives for ceramic, vitrified, natural stone and more.",
  },
  {
    id: 6,
    title: "Trusted by Experts",
    description: "Used by top contractors, architects, and builders.",
  },
];

function Pointers() {
  // duplicate data to make scrolling seamless
  const row1Items = [...pointers, ...pointers];
  const row2Items = [...[...pointers].reverse(), ...[...pointers].reverse()];

  return (
    <div className="relative py-16 bg-[#F0EAD8] rounded-t-[32px] mt-[-30px] pt-[40px] z-40 overflow-hidden mb-10">
      <div className="mx-auto px-4">
        {/* Heading */}
        <h2 className="relative text-2xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-10">
          What Sets Us Apart
          <span className="block w-20 md:w-28 h-[3px] bg-[#d97706] mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Rows container */}
        <div className="space-y-5 md:space-y-8">
          {/* Row 1 */}
          <div className="flex overflow-hidden">
            <div className="animate-scroll-left flex gap-4 md:gap-6">
              {row1Items.map((pointer, index) => (
                <div
                  key={`row1-${pointer.id}-${index}`}
                  className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 
                             max-w-[300px] sm:max-w-[310px] md:max-w-[350px] lg:max-w-[370px] 
                             flex-shrink-0"
                >
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-2 md:mb-3">
                    {pointer.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {pointer.description}
                  </p>
                  <div className="w-10 md:w-12 h-1 bg-[#d97706] rounded-full mt-3 md:mt-4"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden">
            <div className="animate-scroll-right flex gap-4 md:gap-6">
              {row2Items.map((pointer, index) => (
                <div
                  key={`row2-${pointer.id}-${index}`}
                  className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 
                             max-w-[300px] sm:max-w-[310px] md:max-w-[350px] lg:max-w-[370px] 
                             flex-shrink-0"
                >
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-2 md:mb-3">
                    {pointer.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {pointer.description}
                  </p>
                  <div className="w-10 md:w-12 h-1 bg-[#ec4899] rounded-full mt-3 md:mt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Pointers;
