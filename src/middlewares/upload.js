"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR API
------------------------------------------------------- */
// Middleware: upload
// npm i multer

// Multer: UploadFile:
// https://expressjs.com/en/resources/middleware/multer.html
const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({
    destination: "./upload/",
    filename: function (req, file, returnCallback) {
      returnCallback(null, file.originalname);
    },
  }),
});
