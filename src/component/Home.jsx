import React from "react";
import home from "../assets/home.png";

const Home = () => {
     return (
          <div id="Home" className="bg-hero-pattern relative bg-cover bg-center p-80 bg-no-repeat w-full">
               <div className="text-center justify-center text-white">
                    <h1 className="text-5xl font-bold font-sans leading-normal">
                         We recommend a wide range of your favorite eyeglass frames
                         <p className="text-xl py-5">Cultivate a sense of fashion style with eyeglass frames</p>
                    </h1>
               </div>
               <div className="text-center">
                    <a href="https://github.com/yasirrzk" target="_blank" rel="noopener noreferrer">
                         <button className="font-mono hover:border-[#231003] py-2 px-10 mt-14 rounded-3xl bg-button text-black hover:text-white transition-colors duration-300">
                              Get Started App...
                         </button>
                    </a>
               </div>
          </div>
     );
};

export default Home;
