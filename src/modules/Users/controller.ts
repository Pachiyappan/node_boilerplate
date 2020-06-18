"use strict";
import * as express from "express";
const app = express();
const server = require("http").createServer(app);
import { RequestHandler } from "../common/request-handler";
import * as Service from "./service";

export const signUpUser = async (handler: RequestHandler) => {
  try {
    const data = await handler.getBody();
    const res = await Service.signUpUser(data);
  } catch (err) {
    return handler.sendServerError(err);
  }
};
