import React, { useState } from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

const Services = () => {      
  const services = [
    {
      image: service1,
      title: "Fashion Style Glasses",
      description:
        "Step up your style with unique, fashion-forward eyewear frames, ranging from round to cat-eye and oversized designs. Crafted with premium materials and available in a variety of vibrant colors, these glasses not only make a bold statement but also offer UV protection lenses, making them the perfect accessory for both everyday chic and special occasions.",
    },
    {
      image: service2,
      title: "Gen Z Glasses",
      description:
        "Gen Z has embraced eyewear as a key accessory to express their unique style. From bold oversized frames to sleek minimalist metal designs, this trend blends modern aesthetics with practicality, making glasses not just a necessity but a statement of individuality.",
    },
    {
      image: service3,
      title: "Elegant Glasses",
      description:
        "Create an air of sophistication with elegant eyewear frames. Featuring minimalist designs with exquisite premium details, neutral tones like black or gold, and high-quality materials, these glasses are the perfect choice for both formal and casual looks, adding a touch of refinement to any outfit.",
    },
  ];

  return (
    <div id="services" className="bg-colorService">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-16 tracking-widest">
          S E R V I C E S
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="group relative">
      {/* Image Container with Arch Shape */}
      <div className="relative mb-8 m-10">
        <div className="aspect-square rounded-t-full bg-gray-100 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Content */}
        <div className="text-center px-4 py-6 bg-colorAbout shadow-md h-full flex flex-col">
          <h3 className="text-sm font-semibold mb-4 tracking-widest">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            {readMore ? (
              service.description
            ) : (
              <>
                {service.description.substring(0, 100)}...
              </>
            )}
          </p>
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-blue-500 underline mt-2"
          >
            {readMore ? "Close" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
