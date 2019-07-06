import * as mongoose from "mongoose";
import State from "./state.interface";

const stateSchema = new mongoose.Schema({
  timestamp: String,
  actions: [
    {
      action: String,
      nextState: [
        {
          name: String,
          stype: String,
          state: String,
          value: Number
        }
      ]
    }
  ],
  sensors: [{ name: String, stype: String, state: String, value: Number }]
});

const stateModel = mongoose.model<State>(
  "State",
  stateSchema
);

export default stateModel;
