class HomeController {
  async index(request, response) {
    return response.json("home working");
  }
}

export default new HomeController();
