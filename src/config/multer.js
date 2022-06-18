import multer from "multer";
import path from "path";

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (request, file, callback) => {
    const alowedTypes = ["image/jpeg", "image/png"];
    console.log(file.mimetype);

    if (!alowedTypes.includes(file.mimetype)) {
      return callback(new multer.MulterError("file is not a image"));
    }

    return callback(null, true);
  },

  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "uploads", "images"));
    },

    filename: (request, file, callback) => {
      callback(null, `${Date.now()}_${random()}${path.extname(file.originalname)}`);
    },
  }),
};
