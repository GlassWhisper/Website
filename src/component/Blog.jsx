import React, { useState } from "react";
import mockupImage from "../assets/mockup.png";

const Blog = () => {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("medium");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      name: username,
      review: review,
      rating: rating,
    };

    try {
      const response = await fetch("https://2hn6tjlz-5000.asse.devtunnels.ms/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      const result = await response.json();
      if (response.ok) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setUsername("");
        setReview("");
        setRating("3");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div id="blog" className="bg-colorService text-white min-h-screen flex flex-col items-center p-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-8">Feedback User</h1>

      {showPopup && (
        <div className="fixed justify-center top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          Feedback submitted successfully!
        </div>
      )}

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

        {/* Form Features */}
        <form className="flex-1 grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="bg-navColor p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Username</h2>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Review Input */}
          <div className="bg-navColor p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Review</h2>
            <textarea
              rows="4"
              placeholder="Write your review here"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="mt-2 w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-navColor hover:-translate-y-1 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;