"use strict";
import { RequestHandler } from "../common/request-handler";
import * as Service from "./service";

export const Languages = async (handler: RequestHandler) => {
  try {
    const res: any = await Service.Languages();
    return handler.sendResponse(res);
  } catch (err) {
    return handler.sendServerError(err);
  }
};
