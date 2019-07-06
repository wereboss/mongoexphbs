import App from './app';
import * as mongoose from 'mongoose';
import 'dotenv/config';
import HomeController from "./home/home.controller"
import StateController from "./state/state.controller";

const app = new App(
    [
        new HomeController(),
        new StateController()
    ],
  );
   
  app.listen();