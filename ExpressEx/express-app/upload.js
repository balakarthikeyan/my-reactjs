const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
var fs = require("fs");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now());
    },
});
var upload = multer({ storage: storage });
// var upload = multer({ dest: "uploads/" });

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/" + "upload.html");
});

app.post("/file_upload", upload.single("avatar"), function (req, res, next) {
    console.log(req.file);
    // Normal Method
    // const file = req.file
    // if (!file) {
    //   const error = new Error('Please upload a file')
    //   error.httpStatusCode = 400
    //   return next(error)
    // }
    // res.send(file);

    var file = __dirname + "/uploads/" + req.file.filename + path.extname(req.file.originalname);
    fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                fs.unlink(req.file.path, function () {
                    console.log("Delete operation complete.");
                });
                response = {
                    message: "File uploaded successfully",
                    filename: file,
                };
            }

            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

// Saving of images to the database
// app.post("/uploadphoto", upload.single("picture"), (req, res) => {
//     var img = fs.readFileSync(req.file.path);
//     var encode_image = img.toString("base64");
//     var finalImg = {
//         contentType: req.file.mimetype,
//         image: new Buffer(encode_image, "base64"),
//     };
//     db.collection("quotes").insertOne(finalImg, (err, result) => {
//         console.log(result);
//         if (err) return console.log(err);
//         console.log("saved to database");
//         res.redirect("/");
//     });
// });

// Retrieving Stored Images
// app.get("/photo/:id", (req, res) => {
//     var filename = req.params.id;

//     db.collection("mycollection").findOne(
//         { _id: ObjectId(filename) },
//         (err, result) => {
//             if (err) return console.log(err);

//             res.contentType("image/jpeg");
//             res.send(result.image.buffer);
//         }
//     );
// });

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
