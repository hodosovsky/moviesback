const jsonwebtoken = require("jsonwebtoken");
const { User } = require("../db/userModel");
const { CustomError } = require("./errors");
const sgMail = require("@sendgrid/mail");

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.response.status).json({ message: err.message });
  }
  res
    .status(err.response.status)
    .json({ message: err.response.data.status_message });
  console.log(err);
};

const createToken = async (user) => {
  const token = jsonwebtoken.sign(
    {
      _id: user._id,
      createdAt: user.createdAt,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  await User.findByIdAndUpdate(user?._id, { token });

  return token;
};

const sendConfirmregisterMail = async (email, verificationToken) => {
  const msg = {
    to: email,
    from: "noreply_node@meta.ua",
    subject: "Thank you for registration",
    text: `<h1>Please click to activate you account http://localhost:3000/api/users/verify/${verificationToken}</h1>`,
    html: `<h1>Please  <a href="http://localhost:3000/api/users/verify/${verificationToken}">click</a> to activate your account </h1>`,
  };

  await sgMail.send(msg);
};

module.exports = {
  asyncWrapper,
  errorHandler,
  createToken,
  sendConfirmregisterMail,
};
