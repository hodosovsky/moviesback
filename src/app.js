const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");
const moviesRouter = require("./routes/api/movies");
const personRouter = require("./routes/api/people");
const reviewRouter = require("./routes/api/review");
const { errorHandler } = require("../src/helpers/apiHelpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/api/contacts", contactsRouter);
app.use("/api/", moviesRouter);
app.use("/api/person", personRouter);
app.use("/api/review", reviewRouter);
app.use("/api/users", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
