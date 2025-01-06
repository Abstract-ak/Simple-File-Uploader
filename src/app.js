// ? Application Initialization

const express = require("express");

const app = express();

//Middleware Define
app.use(express.json()); //  Parse JSON requests

module.exports = app;
