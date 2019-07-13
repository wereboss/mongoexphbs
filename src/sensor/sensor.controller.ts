import * as express from "express";
import Sensor from "./sensor.interface";
import sensorModel from "./sensor.model";

class SensorController {
  public path = "/sensor";
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllSensors);
    //this.router.get(`${this.path}/joins`, this.getAllPostswithComments);
    //this.router.patch(`${this.path}/:id`, this.modifyState);
    this.router.post(this.path, this.addSensor);
    //this.router.get(`${this.path}/:id`, this.getStateById);
    //this.router.delete(`${this.path}/:id`, this.deleteState);
  }

  getAllSensors = (request: express.Request, response: express.Response) => {
    //console.log("inside getAllStates");
    let sensors = sensorModel.find((err: any, sensors: any) => {
        if (err) {
          response.send("Error!");
        } else {
          response.send(sensors);
          //response.render("statesView",{layout: 'stateList',stateData:states});
        }
      });
  };
  addSensor = (request: express.Request, response: express.Response) => {
    var sensor = new sensorModel(request.body);
    //let ts = new Date(Date.now())
    //state.timestamp = ts.toJSON();
    sensor.save((err: any) => {
      if (err) {
        response.send(err);
      } else {
        response.send(sensor);
      }
    });
  };
}

export default SensorController;
