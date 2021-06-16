const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/routes.js');

// connect the views folder
app.set('views', path.join(__dirname, 'views'));

//view engine
app.set("view engine", "ejs");

//connect public folder
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//define router constants
app.use("/", indexRoutes);

app.get('/jade', (req, res) => {
	res.render('test.jade');
});

/*
router.get('/', function(req, res){
   res.render('add', { success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});

router.post('/add', function(req, res) {
    let name = req.body.name;
    let email = req.body.email;
 
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
 
    var errors = req.validationErrors();
    if(errors){
       req.session.errors = errors;
       req.session.success = false;
       res.redirect('/user');
    }
    else{
       req.session.success = true;
       res.redirect('/');
    }
 }); 

 */

app.use("*", (req, res)=>{
    res.render("notfound");
});

app.listen(port, ()=> {
    console.log(`Server started at ${port}`);
});
