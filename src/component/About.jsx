import React from "react";
import img from "../assets/about.png";

const Home = () => {
     return (
          <div id="about" className="bg-colorAbout px-8 py-12">
               <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-10 py-10">
                         <h2 className="text-3xl text-right font-bold uppercase mb-6">About</h2>
                         <p className="text-gray-700 text-xl leading-loose text-right pl-[200px]">
                              GlassWhisper is an innovative app designed to help users find the perfect eyewear for their unique face shape with ease and confidence. Key features include personalized frame recommendations, a face shape catalog, and
                              styling tips tailored to your preferences. Users can upload a photo to analyze their face shape, receive expert suggestions for suitable frames, and explore the latest eyewear trends. GlassWhisper ensures you not only
                              look great but also feel confident with frames that truly fit you.{" "}
                         </p>
                    </div>
                    {/* Image Section */}
                    {/* <div className="lg:w-1/2 flex justify-center border-black border"> */}
                    <div className="-mt-96 mb-[252px]">
                         <div className="md:w-1/2 md:mt-0 px-10 flex absolute right-0">
                              <img src={img} alt="About" className="w-[750px] object-cover" />
                         </div>
                    </div>

                    {/* </div> */}
               </div>
          </div>
     );
};

export default Home;
