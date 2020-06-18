"use strict";
import * as repo from "./repo";

export const Languages = async () => {
  try {
    return await repo.getLanguages();
  } catch (err) {
    throw err;
  }
};
