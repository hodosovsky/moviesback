const express = require("express");

const {
  getTrandingMoviesController,
  getMovieController,
  getMovieReviewsController,
  getActorsController,
  getTrailersController,
} = require("../../controllers/moviesController");

const { authMiddleware } = require("../../middlewares/authMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();
// router.use(authMiddleware);

router.get("/", asyncWrapper(getTrandingMoviesController));
router.get("/:movie_id", asyncWrapper(getMovieController));
router.get("/:movie_id/reviews", asyncWrapper(getMovieReviewsController));
router.get("/:movie_id/credits", asyncWrapper(getActorsController));
router.get("/:movie_id/videos", asyncWrapper(getTrailersController));

module.exports = router;
