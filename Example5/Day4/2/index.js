const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/routes.js');

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", indexRoutes);

app.use("*", (req, res)=>{
    res.render("notfound");
});

app.listen(port, ()=> {
    console.log(`Server started at ${port}`);
});