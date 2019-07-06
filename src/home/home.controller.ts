import * as express from "express";

class HomeController {
    public path = "/";
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
      }
    
      public intializeRoutes() {
        this.router.get(this.path, this.defaultHome);
        this.router.get(`${this.path}second`, this.secondHome);
      }

      defaultHome = (request: express.Request, response: express.Response) => {
        console.log("inside defaultHome");
        //response.send("Default Home GET handler");
        //response.render("home");
        //response.render('home', {layout: 'second', sampledata: 'home-template'});
        response.render("home",{title:"new Command Tracker"});
      };
      secondHome = (request: express.Request, response: express.Response) => {
        console.log("inside secondHome");
        //response.send("Default Home GET handler");
        //response.render("home");
        response.render('home', {layout: 'second', sampledata: 'home-template'});
        //response.render("home",{title:"new Command Tracker"});
      };
}
export default HomeController;
