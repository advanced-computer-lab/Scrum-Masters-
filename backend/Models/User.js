const mongoose = require("mongoose");

function isUser(type) {
  return type != "admin";
}

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: isUser(this.type),
    },

    lastName: {
      type: String,
      required: isUser(this.type),
    },
    homeAddress: {
      // type: String,
      // required: isUser(this.type),
      type: mongoose.Schema({
        address: { type: String, required: isUser(this.type) },
        city: { type: String, required: isUser(this.type) },
        zipCode: { type: Number, required: isUser(this.type) },
      }),
      required: isUser(this.type),
    },
    email: {
      //UNIQUE
      type: String,
      required: isUser(this.type), //should be true in all cases
    },
    countryCode: {
      //2 letter code
      type: String,
      required: isUser(this.type),
    },
    phoneNumber: {
      // type: Array,
      type: Number, //maybe string
      required: isUser(this.type),
    },
    passportNumber: {
      type: String,
      required: isUser(this.type),
      //should be unique
    },
    gender: {
      type: String,
      enum: ["female", "male"],
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
//validate email