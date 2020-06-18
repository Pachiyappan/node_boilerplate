"use strict";
import Languages from "./models/Languages";

export const getLanguages = async () => {
  try {
    const languages = await Languages.findAll();
    return languages;
  } catch (err) {
    throw err;
  }
};
