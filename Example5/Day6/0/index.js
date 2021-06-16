const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/routes.js');
const mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/contactsapp",
  (err) => {
    console.log("db connected!")
})

app.use("/", indexRoutes);

app.listen(port, ()=> {
    console.log(`Server started at ${port}`);
});