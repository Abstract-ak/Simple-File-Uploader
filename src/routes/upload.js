const express = require("express");
const upload = require("../middleware/multerConfig");
const { uploadFile } = require("../controllers/uploadController");

const router = express.Router();

//upload endpoint
router.post("/", upload.single("file"), uploadFile);

module.exports = router;
