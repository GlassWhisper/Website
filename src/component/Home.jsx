import React from "react";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-hero-pattern min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="relative flex justify-center text-center items-center mb-2 mt-6 text-white w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-archivo animate-text max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
          We recommend a wide range of your favorite eyeglass frames
        </h1>
      </div>
      
      <p className="text-lg sm:text-xl md:text-2xl py-3 md:py-5 text-center text-white pt-8 md:pt-16 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
        Cultivate a sense of fashion style with eyeglass frames
      </p>
      
      <div className="text-center mt-8 md:mt-14">
        <a
          href="https://github.com/GlassWhisper"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="font-mono hover:border-[#231003] py-2 px-6 sm:px-8 md:px-10 rounded-3xl bg-button text-black hover:text-white transition-colors duration-300 text-sm sm:text-base">
            Get Started App...
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;