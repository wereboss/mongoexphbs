import App from './app';
import * as mongoose from 'mongoose';
import 'dotenv/config';
import HomeController from "./home/home.controller"
import StateController from "./state/state.controller";
import SensorController from './sensor/sensor.controller';

const app = new App(
    [
        new HomeController(),
        new StateController(),
        new SensorController()
    ],
  );
   
  app.listen();