import * as mongoose from "mongoose";
import State from "./state.interface";

const stateSchema = new mongoose.Schema({
  timestamp: String,
  actions: [
    {
      action: String,
      nextState: [
        {
          sensor: {
            ref: "Sensor",
            type: mongoose.Schema.Types.ObjectId
          },
          state: String,
          value: Number
        }
      ]
    }
  ],
  sensors: [
      {
        sensor: {
          ref: "Sensor",
          type: mongoose.Schema.Types.ObjectId
        },
        state: String,
        value: Number
      }
    ]
});

const stateModel = mongoose.model<State>("State", stateSchema);

export default stateModel;
