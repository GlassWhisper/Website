import mockupImage from "../assets/mockup.png";

const Blog = () => {
  return (
    <div id="blog" className="bg-colorService text-white min-h-screen flex flex-col items-center p-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-8">Feedback User</h1>

      {/* Content Section */}
      <div className="flex items-center w-full max-w-6xl">
        {/* Left Side - Mockup Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={mockupImage}
            alt="App Mockup"
            className="w-full lg:w-3/4 xl:w-2/3 object-contain"
          />
        </div>

        {/*Form Features */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          {/* Username Input */}
          <div className="bg-navColor p-6 rounded-lg shadow-lg">
            <h2 className=" text-xl font-semibold">Username</h2>
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-2 w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Review Input */}
          <div className="bg-navColor p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Review</h2>
            <textarea
              rows="4"
              placeholder="Write your review here"
              className="mt-2 w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Rating Input */}
          <div className="bg-navColor p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Rating</h2>
            <select
              className="mt-2 w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
