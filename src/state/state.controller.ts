import * as express from "express";
import State from "./state.interface";
import stateModel from "./state.model";

class StateController {
  public path = "/state";
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllStates);
    //this.router.get(`${this.path}/joins`, this.getAllPostswithComments);
    //this.router.patch(`${this.path}/:id`, this.modifyState);
    this.router.post(this.path, this.addState);
    //this.router.get(`${this.path}/:id`, this.getStateById);
    //this.router.delete(`${this.path}/:id`, this.deleteState);
  }

  getAllStates = (request: express.Request, response: express.Response) => {
    console.log("inside getAllStates");
    let states = stateModel.find((err: any, states: any) => {
        if (err) {
          response.send("Error!");
        } else {
          //response.send(states);
          response.render("statesView",{layout: 'stateList',stateData:states});
        }
      });
  };
  addState = (request: express.Request, response: express.Response) => {
    var state = new stateModel(request.body);
    let ts = new Date(Date.now())
    state.timestamp = ts.toJSON();
    state.save((err: any) => {
      if (err) {
        response.send(err);
      } else {
        response.send(state);
      }
    });
  };
}

export default StateController;
