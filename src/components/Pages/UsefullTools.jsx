import React from "react";
import { useNavigate } from "react-router-dom";
import { Layers, Square, SquareMousePointer  } from "lucide-react"; 

const tools = [
  {
    id: "adhesive-coverage",
    title: "Adhesive Coverage Calculator",
    description: "Estimate the right quantity of adhesive required for your project.",
    icon: Layers,
    link: "/tools/adhesive-coverage",
  },
  {
    id: "joint-filler-coverage",
    title: "Joint Filler Coverage Calculator",
    description: "Calculate how much filler you need for perfect joints.",
    icon: Square,
    link: "/tools/joint-filler-coverage",
  },
  {
    id: "tile-adhesive-recommender",
    title: "Tile Adhesive Recommender",
    description: "Get the right adhesive recommendation for your tiles.",
    icon: SquareMousePointer ,
    link: "/tools/tile-adhesive-recommender",
  },
];

const UsefulTools = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#B6B6B6] z-30 min-h-screen text-black py-20 px-6 sm:px-12 rounded-t-[48px] relative mt-[-40px] pt-[40px] ">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold">Useful Tools</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Friendly tools to help you select the right product, match shades to your tiles, 
          and estimate the right quantity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.id}
              onClick={() => navigate(tool.link)}
              className="group bg-[#F0EAD6] p-8 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-lime-600 hover:shadow-xl flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-700 group-hover:bg-white mb-6 transition-all">
                <Icon className="w-10 h-10 text-lime-400 group-hover:text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-black text-sm group-hover:text-white">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UsefulTools;
