const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadStorage = multer({
  storage: storage,
  dest: "uploads/",
  limits: { fileSize: maxSize },
});

module.exports = uploadStorage;
