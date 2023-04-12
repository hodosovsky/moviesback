const axios = require("axios");

const getReviewController = async (req, res, next) => {
  const { review_id } = req.params;

  const review = await axios.get(
    `review/${review_id}?api_key=${process.env.API_KEY}`
  );
  console.log("review:", review);

  res.json(review.data);
};

module.exports = { getReviewController };
