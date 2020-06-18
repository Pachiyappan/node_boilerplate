"use strict";
import * as repo from "./repo";
import * as _ from "lodash";

export const signUpUser = async (data: any) => {
  try {
    return await repo.signUpUser(data);
  } catch (err) {
    throw err;
  }
};
