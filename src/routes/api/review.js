const express = require("express");

const { getReviewController } = require("../../controllers/reviewController");

const { authMiddleware } = require("../../middlewares/authMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();
// router.use(authMiddleware);
router.get("/:review_id", asyncWrapper(getReviewController));

module.exports = router;
