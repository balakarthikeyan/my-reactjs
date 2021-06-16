const express = require("express");
const app = express();
const path = require('path');
const nodeMailer = require('nodemailer');

// connect the views folder
app.set('views', path.join(__dirname, 'views'));

//view engine
app.set("view engine", "ejs");

//connect public folder
app.use(express.static("public"));

app.post('/mail', function (req, res) {
	let transporter = nodeMailer.createTransport({
		// host: 'mail.google.com',
		// port: 465,
        // secure: false,
        service: 'gmail',
		auth: {
			user: 'balakarthikeya@gmail.com',
			pass: 'jagathaa'
        },
        debug: true, // show debug output
        logger: true // log information in console
	});
	let mailOptions = {
		from: '"Balakarthikeyan" <balakarthikeya@gmail.com>',
		to: "balakarthikeyan07@gmail.com", //req.body.to,
		subject: "Testing mail from Node mailer", //req.body.subject,
		html: "<h1>Hello Bala !!</h1>" //req.body.message,
	};

  	transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.render("home", {info});
    });
});

app.listen(3000, () => {
    console.log(`Server started`);
});
