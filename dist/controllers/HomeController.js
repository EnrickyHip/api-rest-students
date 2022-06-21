"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(request, response) {
    return response.json("home working");
  }
}

exports. default = new HomeController();
