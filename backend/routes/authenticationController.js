const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../Models/Flight");
const Reservation = require("../Models/Reservation");
const Ticket = require("../Models/Ticket");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Flight = require("../Models/Flight");
const Reservation = require("../Models/Reservation");
const Ticket = require("../Models/Ticket");
const User = require("../Models/User");
var airports = require("airport-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

  const dbUser = await User.findOne({ email: userLoggingIn.email });

  console.log("found user \n" + dbUser);

  if (!dbUser) {
    return res.json({ message: "Incorrect Email." });
  }

  var isCorrect = await bcrypt.compare(userLoggingIn.password, dbUser.password);
  console.log("is it correct? " + isCorrect);
  if (isCorrect) {
    const payload = {
      _id: dbUser._id,
      email: dbUser.email,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 86400 },
      (err, token) => {
        if (err) return res.json({ message: "An error occured." });
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

module.exports = router;