import React from "react";
import home from "../assets/home.png";

const Home = () => {
     return (
          <div id="Home" className="bg-hero-pattern relative bg-cover bg-center p-96 bg-no-repeat w-screen">
               <div className="text-center justify-center text-white">
                    <h1 className="text-5xl font-medium font-sans leading-normal">
                         We recommend a wide range of your favorite eyeglass frames
                         <p className="text-xl py-5">Cultivate a sense of fashion style with eyeglass frames</p>
                    </h1>
               </div>
               <div className="text-center">
                    <button className="font-mono  hover:border-[#231003] py-2 px-10 mt-14 rounded-3xl bg-button text-black hover:text-white transition-colors duration-300">Get Started App...</button>
               </div>
          </div>
     );
};

export default Home;
