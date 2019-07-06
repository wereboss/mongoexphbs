import Sensor from "./sensor.interface";

interface Action{
    action:string;
    nextState:Sensor[];
  }

  export default Action;