import React from "react";
import img from "../assets/about.png";

const Home = () => {
     return (
          <div id="Services" className="bg-[#f9f1eb] px-8">
               <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-10">
                         <h2 className="text-3xl text-right font-bold uppercase mb-6">About</h2>
                         <p className="text-gray-700 text-xl leading-loose text-right pl-[200px]">
                              GreenVision is an innovative app designed to help farmers maintain crop health with practical solutions and quick access to information. Key features include farming guides, a rice disease catalog, and solutions based on
                              disease detection. Farmers can upload plant photos for quick diagnosis, receive treatment recommendations, and connect with sellers through the agricultural marketplace.
                         </p>
                    </div>

                    {/* Image Section */}
                    {/* <div className="lg:w-1/2 flex justify-center border-black border"> */}
                    <div className="md:w-1/2 mt-10 md:mt-0 px-10 flex w-60">
                         <img src={img} alt="About" className="w-full h-full object-cover" />
                    </div>
                    {/* </div> */}
               </div>
          </div>
     );
};

export default Home;
