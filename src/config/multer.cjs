const multer = require("multer");
const path = require("path");

const random = () => Math.floor(Math.random() * 10000 + 10000);

module.exports = {
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "uploads"));
    },

    filename: (request, file, callback) => {
      callback(null, `${Date.now()}_${random()}${path.extname(file.originalname)}`);
    },
  }),
};
