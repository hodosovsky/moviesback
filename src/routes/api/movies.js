const express = require("express");

const {
  getTrandingMoviesController,
  getMovieController,
  getMovieReviewsController,
  getActorsController,
} = require("../../controllers/moviesController");

const { authMiddleware } = require("../../middlewares/authMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();
// router.use(authMiddleware);

router.get("/", asyncWrapper(getTrandingMoviesController));
router.get("/:movie_id", asyncWrapper(getMovieController));
router.get("/:movie_id/reviews", asyncWrapper(getMovieReviewsController));
router.get("/:movie_id/credits", asyncWrapper(getActorsController));

module.exports = router;
