const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require('method-override')
const morgan = require("morgan");
const accessLogStream = fs.createWriteStream(__dirname + "/access.log", {
    flags: "a",
});
var router = express.Router()
var cookieParser = require("cookie-parser");
var server = app.listen(3000, () => {
    console.log(`Server started`);
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('A new user connected!');
    socket.emit('info', { msg: 'The world is round, there is no up or down.' });
});

//Custom token
morgan.token("host", function (req, res) {
    return req.hostname;
});

app.set("port", process.env.PORT || 3000);

// connect the views folder
app.set("views", path.join(__dirname, "views"));

//view engine
app.set("view engine", "ejs");

app.set("view options", { pretty: true, layout: false });

// Morgon allows us to easily log requests, errors
app.use(morgan(":method :host :url :status :res[content-length] - :response-time ms")); //Custom format
app.use(morgan("combined", { stream: accessLogStream })); // Pre-defined format

// app.use(express.cookieSession({ secret: 'secret'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// when we send a POST request with the X-HTTP-Method-Override header set to PUT
// app.use(methodOverride('X-HTTP-Method-Override'));

// load the Cookie
app.use(cookieParser())

// app.use(express.session({ secret: "password" }));

//connect public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    console.log("Cookies: ", req.cookies);
    res.render("home");
});

app.put('/', (req, res) => {
    res.send('PUT request called');
});

// Router-level middleware
router.get("/notfound", (req, res) => {
    res.send("I couldn't find it.");
});

// mount the router on the app
app.use('/', router)
