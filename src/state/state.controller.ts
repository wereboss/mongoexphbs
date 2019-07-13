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
    this.router.get(`${this.path}/raw`, this.getAllStatesRaw);
    //this.router.get(`${this.path}/joins`, this.getAllPostswithComments);
    this.router.patch(`${this.path}/:id`, this.modifyState);
    this.router.post(this.path, this.addState);
    //this.router.get(`${this.path}/:id`, this.getStateById);
    this.router.delete(`${this.path}/:id`, this.deleteState);
    //this.router.delete(`${this.path}/all`, this.deleteAllStates);
  }

  getAllStates = (request: express.Request, response: express.Response) => {
    //console.log("inside getAllStates");
    let states = stateModel.find()
    .populate("sensors.sensor")
    .populate("actions.nextState.sensor")
    .then((states: State[]) => {
        //response.send(states);
        response.render("statesView",{layout: 'stateList',stateData:states});
      }
    );
  };
  getAllStatesRaw = (request: express.Request, response: express.Response) => {
    //console.log("inside getAllStates");
    let states = stateModel.find()
    .populate("sensors.sensor")
    .populate("actions.nextState.sensor")
    .then((states: State[]) => {
        response.send(states);
        //response.render("statesView",{layout: 'stateList',stateData:states});
      }
    );
  };
  modifyState = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const id = request.params.id;
    const stateData: State = request.body;
    stateModel.findByIdAndUpdate(id, stateData, { new: true }).then(state => {
      if (state) {
        response.send(state);
      } else {
        next();
      }
    });
  };
  addState = (request: express.Request, response: express.Response) => {
    var state = new stateModel(request.body);
    let ts = new Date(Date.now());
    state.timestamp = ts.toJSON();
    state.save((err: any) => {
      if (err) {
        response.send(err);
      } else {
        response.send(state);
      }
    });
  };
  deleteState = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const id = request.params.id;
    stateModel.findByIdAndDelete(id).then(successResponse => {
      if (successResponse) {
        response.send(200);
      } else {
        next();
      }
    });
  };
}

export default StateController;
