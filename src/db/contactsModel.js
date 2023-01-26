const { string } = require("joi");
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
  // owner: {
  //   type: SchemaTypes.ObjectId,
  //   ref: "user",
  // },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = { Contact };
