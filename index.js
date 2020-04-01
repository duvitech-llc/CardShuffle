const express = require("express");
const app = express();
const http = require('http').createServer(app)
const crypto = require('crypto');
const path = require("path");
const jwt = require("jsonwebtoken");
const rp = require("request-promise");
const cookieParser = require('cookie-parser');
const io = require('socket.io')(http);

// Initialize the web app instance,
app.use(cookieParser());
// Indicate which directory static resources
// (e.g. stylesheets) should be served from.
app.use(express.static(path.join(__dirname, "html")));

const port = process.env.PORT || 80;
app.listen(port, function() {
    console.log("Express server listening on port " + port);
});
