import * as express from "express";

class HomeController {
    public path = "/";
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
      }
    
      public intializeRoutes() {
        this.router.get(this.path, this.defaultHome);
      }

      defaultHome = (request: express.Request, response: express.Response) => {
        console.log("inside defaultHome");
        response.send("Default Home GET handler")
      };
}
export default HomeController;
