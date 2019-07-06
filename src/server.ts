import App from './app';
import * as mongoose from 'mongoose';
import 'dotenv/config';
import HomeController from "./home/home.controller"

const app = new App(
    [
        new HomeController()
    ],
  );
   
  app.listen();