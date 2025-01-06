const path = require("path");

//handle file upload
exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: "No file uploaded" });
  }

  const filePath = path.join(__dirname, "../../uploads", req.file.filename);
  res.status(200).send({ message: "File uploaded successfully", filePath });
};
