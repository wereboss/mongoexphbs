import Sensor from "./sensor.interface";
import Action from "./action.interface";
import * as mongoose from "mongoose";

interface State extends mongoose.Document{
    timestamp: string;
    actions:Action[];
    sensors: Sensor[];
  }
   

  export default State;