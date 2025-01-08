import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const Services = () => {      
  const services = [
    {
      image: service1,
      title: "Kacamata Fashion Style",
      description:
        "Tampil stylish dengan frame kacamata fashion berdesain unik seperti bulat, cat-eye, hingga oversize. Material premium, warna variatif, dan lensa UV protection menjadikannya aksesori sempurna untuk gaya sehari-hari maupun momen spesial.",
    },
    {
      image: service2,
      title: "Kacamata Gen Z",
      description:
        "Gen Z menjadikan kacamata sebagai aksesori penting untuk mengekspresikan gaya unik mereka. Dari frame oversize yang bold hingga bingkai logam minimalis yang elegan, tren ini memadukan estetika modern dengan fungsi.",
    },
    {
      image: service3,
      title: "Kacamata Elegan",
      description:
        "Ciptakan kesan berkelas dengan frame kacamata elegan. Desain minimalis dengan sentuhan detail premium, warna netral seperti hitam atau emas, serta material berkualitas tinggi menjadikannya pilihan sempurna untuk tampilan formal maupun santai.",
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
