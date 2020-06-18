import { Express } from "express";
import { handle } from "../common/request-handler";
import { routesPath } from "../../constants/routes";
import * as controller from "./controller";

export default function (app: Express) {
  // Seed GET API
  app.get(routesPath.GET_LANGUAGES, handle(controller.Languages));
}
