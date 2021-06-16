const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", indexRoutes);

app.use("*", (req, res)=>{
    res.render("notfound");
});

app.listen(port, ()=> {
    console.log(`Server started at ${port}`);
});
//git config --global http.proxy http://webproxy.uaeexchange.com:8080 
//git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
// show dbs
// show collections
// use database_name
// db.table_name.create({"name":"bala"})
// db.student.insert({"name":"vivek"})
// db.student.find()
// db.student.find().pretty()
// db.student.find({"name":"bala"})
// db.student.update({"name":"vivek"}, {$set : {"name":"satis"}})
// db.student.remove({"name":"bala"})
// db.student.drop()