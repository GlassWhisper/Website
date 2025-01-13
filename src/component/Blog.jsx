import React, { useState } from "react";
import mockupImage from "../assets/mockup.png";

const Blog = () => {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("medium");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState(""); // "success" or "error"
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

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
        setPopupMessage("Selamat! Anda telah berhasil mengirim feedback kepada kami.");
        setPopupType("success");
        setShowPopup(true);
        setUsername("");
        setReview("");
        setRating("3");
      } else {
        setPopupMessage("Maaf! Anda gagal mengirim feedback kepada kami.");
        setPopupType("error");
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setPopupMessage("Maaf! Anda gagal mengirim feedback kepada kami.");
      setPopupType("error");
      setShowPopup(true);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close popup when clicking OK
  };

  return (
    <div id="blog" className="bg-colorService text-white  flex flex-col items-center pt-20 pb-20">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-8 text-button">Feedback User</h1>

      {/* Popup Alert */}
      {showPopup && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50">
          <div
            className={`p-6 rounded-lg shadow-lg backdrop-blur-md ${
              popupType === "success" ? "bg-black bg-opacity-80 text-white" : "bg-black bg-opacity-80 text-white"
            } flex flex-col items-center`}
          >
            <span className="font-semibold mb-4">{popupMessage}</span>
            <button
              onClick={handleClosePopup}
              className="bg-button text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-80"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="flex items-center w-full max-w-6xl pt-16 flex-col sm:flex-row">
        {/* Left Side - Mockup Image */}
        <div className="flex-1 flex justify-center pb-12 md:w-1/2">
          <img
            src={mockupImage}
            alt="App Mockup"
            className="w-96 md:w-full object-contain md:mr-3 lg:mr-10 sm:mr-2 mt-4"
          />
        </div>

        {/* Form Features */}
        <form className="flex-1 grid grid-cols-1 gap-6 md:mr-6 md:w-1/2" onSubmit={handleSubmit}>
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
            disabled={isLoading}
            className={`${
              isLoading ? "bg-button cursor-not-allowed" : "bg-navColor hover:-translate-y-1"
            } text-white font-bold py-2 px-4 rounded-md mt-4 flex items-center justify-center`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Submit Feedback"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
