const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
var router = express.Router()
var cookieParser = require("cookie-parser");

// app.use(function () {}) //added to all paths or globally
// app.get('/someroute', function() {}) //added to a specific path

// connect the views folder
app.set('views', path.join(__dirname, 'views'));

//view engine
app.set("view engine", "ejs");

//connect public folder - Built-in middleware
app.use(express.static("public"));

// load the Third Party middleware
app.use(cookieParser())

//Middle ware
var myLogger = function (req, res, next) {
    req.requestTime = Date.now();
    console.log("Request Time:", req.requestTime, "Request Type:", req.method);
    next();
};

//Configurable Middlewares
function BodyParser(options) {
    if (options.type === "JSON") {
        return (req, res, next) => {
            console.log("BodyParser: JSON");
            next();
        };
    } else if (options.type === "URL_ENCODED") {
        return (req, res, next) => {
            console.log("BodyParser: URL_ENCODED");
            next();
        };
    }
}
app.use(BodyParser({ type: "JSON" }));

function isMorning(){
    return true
}

// Application-level middleware
app.get("/", function (req, res) {
    var responseText = "Hello World!<br>";
    responseText += "<small>Requested at: " + req.requestTime + "</small>";
    res.send(responseText);
});

// next is a function that allows you to chain multiple functions
app.get("/hello",
  // middleware #1
  (req, res, next) => {
    if (isMorning()) {
      res.send("morning");
    } else {
      next();
    }
  },
  // middleware #2: called when isMorning() === false
  (req, res, next) => {
    res.send("afternoon");
  }
);

// Require for all routes defined after this line.
app.use(myLogger);

// Middleware can also be declared in an array for reusability
app.get("/user/:name", myLogger, (req, res, next) => {
    res.send("Hello " + req.params.name + " !!" );
});

// Router-level middleware
router.get("/notfound", (req, res, next) => {
    let err = new Error("I couldn't find it.");
    err.httpStatusCode = 404;
    next(err);
});

// mount the router on the app
app.use('/', router)

// Error-handling middleware
app.use((err, req, res, next) => {    
    if (err.httpStatusCode === 404) {   // handles not found errors
        // res.status(400).render("NotFound");
        res.status(400).send(err.message)
    } else if (err.httpStatusCode === 304) {    // handles unauthorized errors
        res.status(304).render("Unauthorized");
    } else if (!res.headersSent) {          // catch all error
        res.status(err.httpStatusCode || 500).render("UnknownError");
    }
    next(err);
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
