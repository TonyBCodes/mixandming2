// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var path = require("path");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
//require("./routes/html-routes.js")(app);
require("./routes/cust-auth")(app);
require("./routes/user-auth")(app);
require("./routes/cocktaildb-api-routes")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    //use this in development
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
    //change to this in production
    //res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
