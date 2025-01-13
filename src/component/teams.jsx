import React from "react";
import img from "../assets/team1.png";
import img2 from "../assets/team2.png";
import img3 from "../assets/team3.png";
import img4 from "../assets/team4.png";

const Teams = () => {
  return (
    <section id="teams" className="bg-colorAbout min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-xl sm:text-2xl uppercase font-bold tracking-wider text-black mb-4 font-rubik">
                T E A M S
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-rubik">
                Glasswhisper App Engineer Development Team
              </h1>
              {/* 3D Text Effect */}
              <p className="relative font-rubik text-xl sm:text-2xl
                [text-shadow:_2px_2px_0_rgb(203_213_225),
                             4px_4px_0_rgb(148_163_184),
                             6px_6px_0_rgb(100_116_139)]">
                <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 
                  inline-block bg-clip-text">
                  Yasir Rizqi - Muhammad Zulfan Sururi - Muhammad Hanif Isnain - Muhamad Reikhan Efendi
                </span>
              </p>
            </div>
          </div>

          {/* Right Content - Team Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            {[
              { img: img, name: "Team member 1" },
              { img: img2, name: "Team member 2" },
              { img: img3, name: "Team member 3" },
              { img: img4, name: "Team member 4" }
            ].map((member, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;