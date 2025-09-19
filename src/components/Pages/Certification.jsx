import React from "react"

const bgImge = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1758268758/senzo_background_ua7v6a.png";

const one = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756989947/4_bktwyq.png"
const two = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756989947/6_jgqyrg.png"
const three = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756989947/3_i9xdvh.png"
const four = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756989947/8_bay1vy.png"
const five = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1756989948/5_xxj4fg.png"
const six = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757050942/7_fwjmnd.png"
const seven = "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757050942/9_fobagi.png"

function Certification() {
  const logos = [one, two, three, four, five, six, seven]
  
  const duplicateLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];


  return (
    <div className=" w-full py-25   " style={{ backgroundImage: `url(${bgImge})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="flex justify-center items-center">
        <div className="overflow-hidden w-full ">
          <div className="flex animate-scroll">
            {duplicateLogos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src={logo || "/placeholder.svg"}
                  alt={`Certification logo ${index + 1}`}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {duplicateLogos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src={logo || "/placeholder.svg"}
                  alt={`Certification logo ${index + 1}`}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}

export default Certification
