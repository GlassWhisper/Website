import img from "../assets/about.png";

const Home = () => {
  return (
    <div id="about" className="bg-colorAbout px-8 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:px-10 py-0 lg:py-14 lg:mr-[800px]">
          <h2 className="text-3xl lg:text-5xl text-left lg:text-right font-bold uppercase mb-7">
            About
          </h2>
          <p className="text-gray-700 text-lg lg:text-2xl leading-loose text-justify lg:text-right lg:pl-[20px]">
            GlassWhisper is an innovative app designed to help users find the perfect eyewear for their unique face shape with ease and confidence. Key features include personalized frame recommendations, a face shape catalog, and
            styling tips tailored to your preferences. Users can upload a photo to analyze their face shape, receive expert suggestions for suitable frames, and explore the latest eyewear trends. GlassWhisper ensures you not only
            look great but also feel confident with frames that truly fit you.{" "}
          </p>
        </div>
        {/* Image Section */}
        {/* <div className="lg:w-1/2 flex justify-center border-black border"> */}
        <div className=" lg:-mt-96 mb-[332px]">
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
