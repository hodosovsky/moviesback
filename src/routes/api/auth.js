const express = require("express");

const {
  registrationController,
  registrationVerifyController,
  loginController,
  logoutController,
  currentUserController,
  changeSubscriptionController,
  changeAvatarController,
  reSendVerifyRegisterController,
  forgotPasswordController,
} = require("../../controllers/authController");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  userAuthValidation,
  changeSubscriptionValidation,
  reSendVerifyRegisterValidation,
} = require("../../middlewares/middlewares");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { uploadMiddleware } = require("../../helpers/multerConfig");
const router = express.Router();

router.post(
  "/register",
  userAuthValidation,
  asyncWrapper(registrationController)
);
router.get(
  "/verify/:verificationToken",
  asyncWrapper(registrationVerifyController)
);
router.post(
  "/verify",
  reSendVerifyRegisterValidation,
  asyncWrapper(reSendVerifyRegisterController)
);
router.post(
  "/forgot_password",

  asyncWrapper(forgotPasswordController)
);
router.post("/login", userAuthValidation, asyncWrapper(loginController));
router.post("/logout", authMiddleware, asyncWrapper(logoutController));
router.get("/current", authMiddleware, asyncWrapper(currentUserController));
router.patch(
  "/",
  authMiddleware,
  changeSubscriptionValidation,
  asyncWrapper(changeSubscriptionController)
);
router.patch(
  "/avatars",
  authMiddleware,
  uploadMiddleware.single("avatar"),

  asyncWrapper(changeAvatarController)
);

module.exports = router;
