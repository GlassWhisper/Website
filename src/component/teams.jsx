import React from "react";
import img from "../assets/team1.png"
import img2 from "../assets/team2.png"
import img3 from "../assets/team3.png"
import goat1 from "../assets/goat.jpeg"
import goat2 from "../assets/goat2.jpeg"
import goat3 from "../assets/goat3.jpeg"
import goat4 from "../assets/goat4.jpeg"

const Teams = () => {
     return (
          <section className="bg-colorAbout min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm uppercase font-bold tracking-wider text-black mb-4">
                T E A M S
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Projects are handled by professional certified teams
              </h1>
              <p className="text-gray-600 mb-8 font-bold">
                Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.
              </p>
            </div>
            <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
              LEARN TEAMS
            </button>
          </div>

          {/* Right Content - Team Grid */}
          <div className="grid grid-cols-2 gap-6 ">
            {/* Team Member 1 */}
            <div className="">
              <img 
                src={img}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Team Member 2 */}
            <div className="">
              <img 
                src={img2}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Team Member 3 */}
            <div className="">
              <img 
                src={img2}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Team Member 4 */}
            <div className="">
              <img 
                src={img3}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
     );
};

export default Teams;
