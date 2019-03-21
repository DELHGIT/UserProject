import {Router, Request, Response, NextFunction} from 'express';
import * as express from 'express';

let Users = require('../models/User');
//const Users = require('../data');
//let User = require('./models/User');

export class UserRouter {
  public router = express.Router();

  constructor() {
    console.log("UserRouter");
  }

  /**
   * GET one User by id
   */
  public getOne(req: Request, res: Response, _next: NextFunction) {
    let query = parseInt(req.params.id);
    let user = Users.find((user: any) => user.id === query); 
 ///*[30]->*/let user = Users.find(user => user.id === query);
    if (user) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          user
        });
    }
    else {
      res.status(404)
        .send({
          message: 'No User found with the given id.',
          status: res.status
        });
    }
  }
}

const userRouter = new UserRouter().router;
export default userRouter;


