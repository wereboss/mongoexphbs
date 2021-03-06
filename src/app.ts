import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as expressHbs from "express-handlebars";
import * as mongoose from "mongoose";
import Controller from "./interfaces/controller.interface";
import errorMiddleware from "./middleware/error.middleware";

class App {
  public app: express.Application;
    
  constructor(controllers: Controller[]) {
    this.app = express();

    this.app.set('views', path.join(__dirname,"views"));
    this.app.engine('.hbs', expressHbs({defaultLayout: 'main', extname: '.hbs'}));
    this.app.set('view engine', '.hbs');

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(
        `${process.env.APPNAME} App listening on the port ${process.env.PORT}`
      );
    });
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
  private initializeControllers(controllers: Controller[]) {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  }

  private connectToTheDatabase() {
    const { MONGO_PATH } = process.env;
    mongoose.connect(`mongodb://${MONGO_PATH}`);
  }
}

export default App;
