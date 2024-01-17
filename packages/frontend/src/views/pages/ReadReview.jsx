import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReadReview = () => {
  // State to store the review list retrieved from the API
  const [reviewList, setReviewList] = useState({});
  const backend_api = import.meta.env.VITE_APP_API;

  // Fetch review list data from the API on component mount
  useEffect(() => {
    fetch(`${backend_api}/api/product-review-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setReviewList(data.data));
  }, []);

   // Calculate total review stars
  const totalReviewStars = reviewList?.reviews?.reduce(
    (sum, review) => sum + review.reviewStar,
    0
  );

  // Calculate the average review rating
  const averageReviewRating = totalReviewStars / reviewList?.reviews?.length;

  return (
    // Container for displaying review information
    <div className=" md:w-full mx-auto my-8 lg:w-7/12">
      <div className="text-center py-6">
        <h2 className="text-2xl font-semibold">
          Rating & Review {reviewList?.reviews?.length}
        </h2>
        <h3 className="text-xl font-medium">Summary</h3>
      </div>
      {/* rating percent */}
      <div className="grid md:grid-cols-7 gap-4 px-4">
        <div className="md:col-span-5">
          {/* div for progress rating percentage */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <h2>5</h2>
            <div className="w-full">
              {reviewList?.averageRatings && reviewList?.averageRatings[5] ? (
                <div
                  style={{
                    width: `${Math.round(reviewList?.averageRatings[5])}%`,
                  }}
                  className={`h-3 bg-yellow-500  rounded-md`}
                ></div>
              ) : (
                <div className="h-3 bg-yellow-500 w-[0%] rounded-md"></div>
              )}
            </div>
          </div>
          {/* div for progress rating percentage */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <h2>4</h2>
            <div className="w-full">
              {reviewList?.averageRatings && reviewList?.averageRatings[4] ? (
                <div
                  style={{
                    width: `${Math.round(reviewList?.averageRatings[4])}%`,
                  }}
                  className={`h-3 bg-yellow-500  rounded-md`}
                ></div>
              ) : (
                <div className="h-3 bg-yellow-500 w-[0%] rounded-md"></div>
              )}
            </div>
          </div>
          {/* div for progress rating percentage */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <h2>3</h2>
            <div className="w-full">
              {reviewList?.averageRatings && reviewList?.averageRatings[3] ? (
                <div
                  style={{
                    width: `${Math.round(reviewList?.averageRatings[3])}%`,
                  }}
                  className={`h-3 bg-yellow-500  rounded-md`}
                ></div>
              ) : (
                <div className="h-3 bg-yellow-500 w-[0%] rounded-md"></div>
              )}
            </div>
          </div>
          {/* div for progress rating percentage */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <h2>2</h2>
            <div className="w-full">
              {reviewList?.averageRatings && reviewList?.averageRatings[2] ? (
                <div
                  style={{
                    width: `${Math.round(reviewList?.averageRatings[2])}%`,
                  }}
                  className={`h-3 bg-yellow-500  rounded-md`}
                ></div>
              ) : (
                <div className="h-3 bg-yellow-500 w-[0%] rounded-md"></div>
              )}
            </div>
          </div>
          {/* div for progress rating percentage */}
          <div className="flex gap-2 justify-center items-center mb-2">
            <h2>1</h2>
            <div className="w-full">
              {reviewList?.averageRatings && reviewList?.averageRatings[1] ? (
                <div
                  style={{
                    width: `${Math.round(reviewList?.averageRatings[1])}%`,
                  }}
                  className={`h-3 bg-yellow-500  rounded-md`}
                ></div>
              ) : (
                <div className="h-3 bg-yellow-500 w-[0%] rounded-md"></div>
              )}
            </div>
          </div>
        </div>
        {/*      side text  */}
        <div className="md:col-span-2 text-left md:ml-8 flex flex-row md:flex-col gap-6 md:gap-3 justify-center md:justify-start md:flex-none">
          <div className="">
            <h2 className="text-4xl font-extralight inline-flex gap-3">
              {averageReviewRating.toFixed(2) || 0}{" "}
              <FaStar className="text-primary_colour" />
            </h2>
            <h3 className="text-lg font-normal">
              {reviewList?.reviews?.length} reviews
            </h3>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl font-extralight">
              {reviewList?.averageRatings &&
                Math.round(reviewList?.averageRatings[5])}
              %
            </h2>
            <h3 className="text-lg font-normal">Recomendation</h3>
          </div>
        </div>
      </div>

      {/*   button with text design */}
      <div className="flex flex-col justify-center py-6 md:mx-auto md:w-3/6 mx-2">
        <Link
          to="/"
          className="py-4 text-center text-gray-500 bg-[#FAFAFA] border border-gray-300"
        >
          Write a review
        </Link>
        <p className="text-base font-normal my-4">
          Product reviews are managed by a third party to verify authenticity
          and compliance with our{" "}
          <span className="text-[#42A5F5]">Ratings & Reviews Guidelines</span>
        </p>
      </div>

      {/*   review show for user */}
      <div className="flex flex-col justify-center py-6 md:mx-auto md:w-3/6 ">
        <div className="mx-2 py-6">
          <h2 className="text-2xl font-light text-black text-center">
            Review this product
          </h2>
        </div>
        {reviewList?.reviews?.map((data) => (
          <div key={data._id} className="mt-8 border-t-2 border-gray-200 py-2">
            <div className="mx-2">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold uppercase">
                    {data.userName}
                  </h2>
                  {data.profileImage && (
                    <h3 className="text-lg font-normal text-green-600">
                      verfied buyer
                    </h3>
                  )}
                  <h3 className="text-xl font-light uppercase">
                    {data.reviewTitle}
                  </h3>
                </div>

                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-3xl font-medium text-gray-500 cursor-pointer ${
                        star <= data.reviewStar ? "text-yellow-500" : ""
                      }`}
                    >
                      {star <= data.reviewStar ? <FaStar /> : <CiStar />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-2">
              <p className="text-base font-normal text-left py-4">
                {data.reviewText}
              </p>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {data?.productImage?.map((img, index) => (
                  <img
                    key={index}
                    className="w-full h-full "
                    src={img}
                    alt="productimage"
                  />
                ))}
              </div>
            </div>
            {/*  helfull text */}
            <div className="mx-2 flex justify-between py-4">
              <div className="flex gap-10">
                <h2 className="text-xl font-medium">Helpful ?</h2>
                <div className="flex gap-6">
                  <button className="text-xl font-medium">Yes (2)</button>
                  <div className=" border border-r-2 "></div>
                  <button className="text-xl font-medium">No (4)</button>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-medium">
                  {" "}
                  {new Date(data.createdAt).toLocaleDateString()}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadReview;
