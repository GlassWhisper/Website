import React from "react";
import img from "../assets/contoh.jpeg";
import img2 from "../assets/contoh2.jpeg"

const Services = () => {
  const services = [
    {
      image: img,
      title: "TEAMS",
      description:
        "Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.",
    },
    {
      image: img2,
      title: "TEAMS",
      description:
        "Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.",
    },
    {
      image: img,
      title: "TEAMS",
      description:
        "Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.",
    },
  ];

  return (
    <div className="bg-colorService">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-16 tracking-widest">
          S E R V I C E S
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
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
                <div className="text-center px-4 py-6 bg-colorAbout  shadow-md">
                <h3 className="text-sm font-semibold mb-4 tracking-widest">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
