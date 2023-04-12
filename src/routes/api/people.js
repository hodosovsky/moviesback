const express = require("express");

const {
  getPeopleController,
  getPopularPeopleController,
} = require("../../controllers/peopleController");

const { authMiddleware } = require("../../middlewares/authMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();
// router.use(authMiddleware);
router.get("/popular", asyncWrapper(getPopularPeopleController));
router.get("/:person_id", asyncWrapper(getPeopleController));

module.exports = router;
