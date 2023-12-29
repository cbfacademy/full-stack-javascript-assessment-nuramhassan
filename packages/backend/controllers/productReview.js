const ProductReview = require("../models/productReview");
const Axios = require("axios");
const imageHostKey = "2bb4b2b0a17d775c59325c51477b1606";

exports.ProductReviewUpload = async (req, res, next) => {
  const {
    userName,
    userEmail,
    reviewStar,
    reviewText,
    reviewTitle,
    productImage,
    profileImage,
  } = req.body;
  const imageUrls = [];
  //profile images
  
  const bodyData = new FormData();
  let profileimageUrls = "";
  if (profileImage.length > 0) {
    const imageData1 = profileImage.split(",")[1].trim();

    bodyData.append("image", imageData1);
    const response = await Axios.post(
      `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
      bodyData
    );

    profileimageUrls = response.data.data.url;
  }
  //product image
  for (let index = 0; index < productImage.length; index++) {
    const element = productImage[index];
    const imageData = element.split(",")[1].trim();
    bodyData.append("image", imageData);

    try {
      const response = await Axios({
        method: "post",
        url: `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: bodyData,
      });

      imageUrls.push(response.data.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
      return res.status(500).json({ error: "Error uploading image" });
    }
  }

  try {
    // Create and save the news data

    // Save the data using async/await
    const newPostData = new ProductReview({
      userName,
      userEmail,
      reviewStar,
      reviewText,
      reviewTitle,
      productImage: imageUrls,
      profileImage: profileimageUrls,
    });

    const savedData = await newPostData.save();

    res.json({
      data: savedData._id,
      message: "posted success!",
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(400)
      .json({ error: error.message || "An error occurred" });
  }
};

//show user list  5/total*100
exports.reviewListData = async (req, res) => {
  try {
    const test = await ProductReview.find({});

    // Calculate averages for each star rating
    const starRatings = [1, 2, 3, 4, 5];
    const averageRatings = {};
    const totalRating = test.length;
    starRatings.forEach((rating) => {
      const filteredReviews = test.filter(
        (review) => review.reviewStar === rating
      );
      const totalFiveStarReviews = filteredReviews.length;

      if (totalFiveStarReviews > 0) {
        averageRatings[rating] = (totalFiveStarReviews / totalRating) * 100; // Multiply by 100 to get percentage
      } else {
        averageRatings[rating] = 0; // Default to 0 if no reviews for that rating
      }
    });

    const data = {
      statusCode: 200,
      success: true,
      message: "Success retrieve response",
      data: {
        reviews: test,
        averageRatings: averageRatings,
      },
    };

    return res.json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
