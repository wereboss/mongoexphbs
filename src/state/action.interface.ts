import Sensor from "../sensor/sensor.interface";
import * as mongoose from "mongoose";

interface Action extends mongoose.Document {
  action: string;
  nextState: [{
    sensor:string,
    state:string,
    value:number
  }
  ];
}

export default Action;
