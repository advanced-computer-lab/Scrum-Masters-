const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//require("dotenv/config");
const app = express();
app.use(express.json());
const dotenv = require('dotenv').config();
app.use(cors());
//DB CONNECTION

mongoose
  .connect(process.env.DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log('DB connected'))
  .catch((err) => {
    console.log(err);
  });

//admin/ ROUTES
app.use(cors({ origin: true, credentials: true }));
app.use("/admin", require("./routes/admin/adminController"));

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log('App is listening at port: ', port);
});

// app.get("/hellopage", (req,res) => {
// res.send("Hola gurl");
// })
