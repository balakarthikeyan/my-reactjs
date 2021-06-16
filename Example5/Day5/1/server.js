const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mongoose = require("mongoose")

const indexRoutes = require("./routes/indexRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/contactsapp",
  (err) => {
    console.log("db connected!")
})

app.set("view engine", "ejs");

app.use("/", indexRoutes);

app.listen(port, () => {
    console.log("application started!")
})

