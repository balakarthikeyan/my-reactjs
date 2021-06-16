const express = require("express");
const app = express();
const port = 4000;
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require("body-parser");

//const connectionString = 'mongodb+srv://root:M0ng0Pass@cluster0-9ydi1.mongodb.net/workout?retryWrites=true&w=majority';
const connectionString = "mongodb://localhost:27017/workout"
MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('workout')
        const quotesCollection = db.collection('contacts');

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cors());
        app.use(bodyParser.json());
        app.use(express.static("public"));

        app.set("view engine", "ejs");

        app.get('/', (req, res) => {
            db.collection('contacts').find().toArray()
                .then(results => {
                    res.render('index.ejs', { dbcontacts: results })
                })
                .catch(error => console.error(error))
        })

        app.get("/form", (req, res) => {
            const data = { name: "", email: "", phone: "", comments: "" }
            var form = {}
            form.method = "/add";
            res.render("form", { data, form });
        })

        app.post('/add', (req, res) => {
            quotesCollection.insertOne(req.body)
            .then(() => {
                console.log("Inserted Successfully");
                res.redirect('/');
            })
            .catch(error => console.error(error))
        })

        app.get("/fetch/:id", (req, res) => {
            var query = { name: "bala" };
            quotesCollection.findOne(query)
            .then((data) => {
                console.log(data)
                var form = {}
                form.method = "/update/" + req.params.id;
                res.render("form", { data, form });
            })
            .catch(error => console.error(error))
        })

        app.post('/update/:id', (req, res) => {
            quotesCollection.findOneAndUpdate(
                { name: "bala" },
                {
                    $set: {
                        name: req.body.name,
                        email: req.body.email,
                        mobile: req.body.mobile
                    }
                },
                {
                    upsert: false
                }
            )
            .then(() => {
                console.log("Updated Successfully");
                res.redirect('/');
            })
            .catch(error => console.error(error))
        })

        app.get('/delete/:id', (req, res) => {
            quotesCollection.deleteOne({ name: "bala" })
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.json('Not Deleted')
                }
                console.log('Deleted Successfully')
                res.redirect('/');
            })
            .catch(error => console.error(error))
        })
    })
    .catch(error => console.error(error));

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});