const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Flight = require("../Models/Flight");
const Reservation = require("../Models/Reservation");
const Ticket = require("../Models/Ticket");
const User = require("../Models/User");
var airports = require("airport-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

router.post("/register", async (req, res) => {
  const user = req.body; // email and password

  const takenEmail = await User.findOne({ email: user.email });

  console.log("The email" + takenEmail);

  if (takenEmail) {
    return res.json({ message: "This email is already taken," });
  } else {
    user.password = await bcrypt.hash(user.password, 10);
    user.email = user.email.toLowerCase();
    // const dbUser = new User({
    //   name: user.name,
    //   email: user.email.toLowerCase(),
    //   password: user.password,
    // });

    // dbUser.save();
    res.json({ ...user, type: "user" }); // returns {email:entered email , password:hashed} to be later added to other info and saved to db
  }
});

router.post("/login", async (req, res) => {
  //const JWT_SECRET= "adhaskaslfjdahfaskjfhafasjlsdjlasjkldasd"

  const userLoggingIn = req.body;

  console.log(userLoggingIn, "body");
  const dbUser = await User.findOne({ email: userLoggingIn.email });

  console.log("found user \n" + dbUser);

  if (!dbUser) {
    return res.json({ message: "Incorrect Email." });
  }
  var isCorrect = await bcrypt.compare(userLoggingIn.password, dbUser.password);
  console.log("is it correct? " + isCorrect);
  if (isCorrect) {
    const payload = {
      id: dbUser._id,
      email: dbUser.email,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 86400 },
      (err, token) => {
        if (err) {
          console.log(err);
          return res.json({ message: "An error occured." });
        }
        return res.json({
          message: "Success",
          token: "Bearer" + token,
        });
      }
    );
  } else {
    return res.json({ message: "Incorrect Password." });
  }
});

router.post("/password", async (req, res) => {
  const changes = req.body;
  User.findById(changes.userId)
    .then((result) => {
      bcrypt.compare(changes.oldPassword, result.password).then((isCorrect) => {
        if (!isCorrect)
          res.json({
            success: false,
            message: "Your old password is incorrect.",
          });
        else
          res.json({
            success: true,
          });
      });
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
