const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const Contacts = require("./models/contact");
const apiRoutes = express.Router();
const dbcontacts = [];

// const connectionString = 'mongodb+srv://root:M0ng0Pass@cluster0-9ydi1.mongodb.net/workout?retryWrites=true&w=majority';
const connectionString = "mongodb://localhost:27017/workout"
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

apiRoutes.route('/').get((req, res) => {
    Contacts.find()
        .then(results => {
            res.render('index', { dbcontacts: results })
        })
        .catch(error => res.status(400).json('Error: ' + error))
});

apiRoutes.get("/form", (req, res) => {
    const data = { name: "", email: "", phone: "", comments: "" }
    var form = {}
    form.method = "/add";
    res.render("form", { data, form });
})

apiRoutes.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;

    const newContact = new Contacts({
        name,
        email,
        mobile
    });

    newContact.save()
        .then(() => {
            console.log("Inserted Successfully");
            res.redirect('/');
        })
        .catch(error => res.status(400).json('Error: ' + error));
});

apiRoutes.get("/fetch/:id", (req, res) => {
    Contacts.findById(req.params.id)
        .then((data) => {
            var form = {}
            form.method = "/update/" + req.params.id;
            res.render("form", { data, form });
        })
        .catch(error => console.error(error))
})

apiRoutes.route('/update/:id').post((req, res) => {
    Contacts.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            console.log("Updated Successfully");
            res.redirect('/');
        })
        .catch(error => res.status(400).json('Error: ' + error));
});

apiRoutes.route('/delete/:id').get((req, res) => {
    Contacts.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log("Deleted Successfully");
            res.redirect('/');
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

app.use('/', apiRoutes);

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});