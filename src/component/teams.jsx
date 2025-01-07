import React from "react";
import img from "../assets/team1.jpg"
import img2 from "../assets/team2.png"
import img3 from "../assets/team3.png"
import img4 from "../assets/team4.png"
const Teams = () => {
     return (
         <section id="teams" className="bg-colorAbout min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl uppercase font-bold tracking-wider text-black mb-4">
                T E A M S
              </h2>
              <h1 className="pb-[200px] text-4xl md:text-5xl font-bold leading-tight mb-6">
                Glasswhisper app engineer development team
              </h1>
              <p className="text-gray-600 mt-[90px] font-mono">
                Yasir Rizqi - muhammad zulfan sururi - muhammad hanif isnain - muhammad reikhan efendi
              </p>
            </div>

            {/*<button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">*/}
            {/*  LEARN TEAMS*/}
            {/*</button>*/}
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
                src={img3}
                alt="Team member"
                className="w-full h-full object-cover p-14"
              />
            </div>

            {/* Team Member 4 */}
            <div className="">
              <img 
                src={img4}
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
