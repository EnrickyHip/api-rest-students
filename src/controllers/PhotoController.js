class PhotoController {
  async create(request, response) {
    response.json(request.file);
  }
}

export default new PhotoController();
