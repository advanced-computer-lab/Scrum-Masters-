const express = require("express");
const mongoose = require("mongoose");
//require("dotenv/config");
const app = express();
app.use(express.json());
<<<<<<< HEAD
const PORT = process.env.PORT || 8081;
=======
const port = process.env.PORT || 8081;
const dotenv=require('dotenv').config();
>>>>>>> maram

//DB CONNECTION

mongoose
  .connect(process.env.DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

//admin/ ROUTES

app.use("/admin", require("./routes/admin/adminController"));


app.listen(PORT, () => {
  console.log("App is listening at port: ", PORT);
});
