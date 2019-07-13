import * as mongoose from "mongoose";
import Sensor from "./sensor.interface";

const sensorSchema = new mongoose.Schema({
  name: String,
  stype: String,
  state: String,
  value: Number
});

const sensorModel = mongoose.model<Sensor>("Sensor", sensorSchema);

export default sensorModel;
