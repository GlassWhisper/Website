import React from "react";
import home from "../assets/home.png";

const Home = () => {
 return (
   <div 
     id="home" 
     className="bg-hero-pattern min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
   >
     <div className="relative flex justify-center text-center items-center mb-2 mt-6 text-white">
         <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-archivo relative  animate-text">
             We recommend a wide range of your favorite eyeglass frames
         </h1>
     </div>
     <p className="text-xs sm:text-sm lg:text-2xl py-5 text-center text-white pt-16">
         Cultivate a sense of fashion style with eyeglass frames
     </p>
     <div className="text-center">
       <a
         href="https://github.com/GlassWhisper"
         target="_blank"
         rel="noopener noreferrer"
       >
         <button className="font-mono hover:border-[#231003] py-2 px-10 mt-14 rounded-3xl bg-button text-black hover:text-white transition-colors duration-300">
           Get Started App...
         </button>
       </a>
     </div>
   </div>
 );
};

export default Home;