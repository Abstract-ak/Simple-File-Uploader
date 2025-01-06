// ? Application Initialization

const express = require("express");
const uploadRoutes = require("./routes/upload");

const app = express();

//Middleware Define
app.use(express.json()); //  Parse JSON requests
app.use("/uploads", express.static("uploads")); //  Serve uploaded files

//  Routes
app.use("/upload", uploadRoutes);
module.exports = app;
