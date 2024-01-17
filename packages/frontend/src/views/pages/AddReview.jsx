import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaPlus, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// State for preview image, review star, profile image, and product data
const AddReview = () => {
  //preview image
  const [previewSrcs, setPreviewSrcs] = useState([]);
  const [reviewStar, setReviewStar] = useState(0);
  const notify = () => toast("Uploaded Successfully!");// Function to display notification
  const handleStarClick = (starCount) => {
    setReviewStar(starCount); // Update review star count
  };

   // Access navigation functionalities
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState([]); // State for profile image
  const [productData, setProductData] = useState([]); // State for product data

  // Function to handle profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // You can use the reader.result as the data URL for displaying an image preview
        console.log("File Content as Data URL:", reader.result);
        setProfileImage(reader.result); // Set profile image data URL
      };

      reader.readAsDataURL(file);
    }
  };

  // Function to handle onBlur event for input fields
  const handleOnBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newData = { ...productData };
    newData[field] = value;
    setProductData(newData);// Update product data
  };

    // Function to handle image change for product images
  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const reader = await new FileReader();
      reader.onload = (event) => {
        urls.push(event.target.result);
        setPreviewSrcs((prev) => [...prev, event.target.result]);
      };
      reader.readAsDataURL(files[i]);
    }
  };

  // Function to submit form data
  const submitData = (e) => {
    e.preventDefault();
    const postData = {
      ...productData,
      reviewStar: reviewStar,
      productImage: previewSrcs,
      profileImage: profileImage,
    };
    const backend_api = process.env.REACT_APP_API;

    // eslint-disable-next-line no-undef
    fetch(`${backend_api}/api/product-review-upload`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          e.target.reset();
          setReviewStar(0);
          notify(); // Display success notification
          navigate("/", {
            replace: true,
          });
        }
      });
  };

  return (
    <div className="bg-[#FAFAFA] mx-auto my-8  lg:my-8 lg:w-[658px]">
      <ToastContainer />
      <form className="px-4 py-4" onSubmit={submitData}>
        <div className="flex justify-between mb-3">
          <button className="text-lg font-normal">Cancel</button>
          <button className="text-lg font-normal bg-white px-4 py-2 ">
            Post
          </button>
        </div>
        {/*  main form */}
        <div className="">
          <div>
            <h3 className="text-base font-light text-gray-500 mb-3">Score:</h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-3xl font-medium text-gray-500 cursor-pointer ${
                    star <= reviewStar ? "text-yellow-500" : ""
                  }`}
                  onClick={() => handleStarClick(star)}
                >
                  {star <= reviewStar ? <FaStar /> : <CiStar />}
                </span>
              ))}
            </div>
          </div>
          <div className=" mt-4 ">
            <input
              type="text"
              name="reviewTitle"
              onChange={handleOnBlur}
              className="border border-gray-300 pl-4   w-full py-8"
              placeholder="Title"
            />
          </div>
          <div className=" mt-4">
            <textarea
              name="reviewText"
              onChange={handleOnBlur}
              rows="4"
              cols="50"
              className="border border-gray-300 pl-4 py-4 h-32 w-full"
              placeholder="Review"
            ></textarea>
          </div>
          Profile Image:
          <div className="relative mt-4 py-6 border border-gray-300 flex justify-center text-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer w-full h-full flex flex-col items-center justify-center"
            >
              <span className="text-lg font-normal absolute">
                <FaPlus />
              </span>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="w-full h-full opacity-0 overflow-hidden absolute"
                multiple
                onChange={handleProfileImageChange}
              />
            </label>
          </div>
          Product Images:
          <div className="relative mt-4 py-6 border border-gray-300 flex justify-center text-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer w-full h-full flex flex-col items-center justify-center"
            >
              <span className="text-lg font-normal absolute">
                <FaPlus />
              </span>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="w-full h-full opacity-0 overflow-hidden absolute"
                multiple
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="relative mt-4 py-6 border border-gray-300 flex justify-center text-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer w-full h-full flex flex-col items-center justify-center"
            >
              <span className="text-lg font-normal absolute">
                <FaPlus />
              </span>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="w-full h-full opacity-0 overflow-hidden absolute"
                multiple
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="relative mt-4 py-6 border border-gray-300 flex justify-center text-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer w-full h-full flex flex-col items-center justify-center"
            >
              <span className="text-lg font-normal absolute">
                <FaPlus />
              </span>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="w-full h-full opacity-0 overflow-hidden absolute"
                multiple
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="relative mt-4 py-6 border border-gray-300 flex justify-center text-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer w-full h-full flex flex-col items-center justify-center"
            >
              <span className="text-lg font-normal absolute">
                <FaPlus />
              </span>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="w-full h-full opacity-0 overflow-hidden absolute"
                multiple
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className=" mt-4 ">
            <input
              type="text"
              name="userName"
              onChange={handleOnBlur}
              className="border border-gray-300 pl-4  w-full py-8"
              placeholder="User Name"
            />
          </div>
          <div className=" my-6">
            <input
              type="email"
              name="userEmail"
              onChange={handleOnBlur}
              className="border border-gray-300 pl-4   w-full py-8"
              placeholder="Email"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
