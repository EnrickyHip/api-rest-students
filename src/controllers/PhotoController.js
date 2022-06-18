import multer from "multer";
import multerConfig from "../config/multer.js";

import Photo from "../models/Photo.js";

const upload = multer(multerConfig).single("photo");
class PhotoController {
  create(request, response) {
    return upload(request, response, async (error) => {
      if (error) {
        return response.status(400).json({ errors: [error.code] });
      }

      try {
        const { student_id } = request.body;

        const { originalname, filename } = request.file;
        const photo = await Photo.create({ originalname, filename, student_id });

        return response.json(photo);
      } catch (error) {
        return response.json({ errors: ["student does not exists"] });
      }
    });
  }
}

export default new PhotoController();
