import { Express } from "express";
import { handle } from "../common/request-handler";
import { routesPath } from "../../constants/routes";
import * as controller from "./controller";

export default function (app: Express) {
  app.post(routesPath.SIGN_UP, handle(controller.signUpUser));
}
