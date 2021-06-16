const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose")
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/workout", {useNewUrlParser: true, useUnifiedTopology: true},
  (err) => { console.log("db connected!") })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

const apiRoutes = require("./routes/api");
app.use("/", apiRoutes);

app.use("*", (req, res)=>{
  res.render("notfound");
});

app.listen(port, ()=> {
  console.log(`Server started at ${port}`);
});

