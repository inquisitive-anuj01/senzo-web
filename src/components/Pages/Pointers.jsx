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
    description: "Used by top contractors architects, and builders.",
  },
];

function Pointers() {
  // Split data into two columns
  const column1Data = pointers.slice(0, 3); // Items 1-3
  const column2Data = pointers.slice(3, 6); // Items 4-6

  // Create duplicated arrays for infinite scroll
  const column1Items = [...column1Data, ...column1Data, ...column1Data];
  const column2Items = [...column2Data, ...column2Data, ...column2Data];

  return (
    <div className="relative py-20 bg-[#F0EAD8] rounded-t-[48px] mt-[-50px] pt-[50px] z-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-xl md:text-5xl font-semibold text-center text-gray-800 mb-10">
          What Sets Us Apart
        </h2>

        {/* Scrolling Columns Container */}
        <div className="flex gap-8 justify-center overflow-hidden h-[600px] relative">
          {/* Column 1 - Scrolls Up */}
          <div className="flex flex-col w-80">
            <div className="animate-scroll-up flex flex-col gap-6">
              {column1Items.map((pointer, index) => (
                <div
                  key={`col1-${pointer.id}-${index}`}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 min-h-[180px] flex flex-col justify-center"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {pointer.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pointer.description}
                  </p>
                  <div className="w-12 h-1 bg-[#d97706] rounded-full mt-4"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Scrolls Down */}
          <div className="flex flex-col w-80">
            <div className="animate-scroll-down flex flex-col gap-6">
              {column2Items.map((pointer, index) => (
                <div
                  key={`col2-${pointer.id}-${index}`}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 min-h-[180px] flex flex-col justify-center"
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {pointer.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pointer.description}
                  </p>
                   <div className="w-12 h-1 bg-[#ec4899] rounded-full mt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-33.333%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 15s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Pointers;
