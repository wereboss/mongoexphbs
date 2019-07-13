import * as mongoose from "mongoose";
interface Sensor extends mongoose.Document{
    name:string;
    stype:string;
    state:string;
    value:number;
  }

  export default Sensor;