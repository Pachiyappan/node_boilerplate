"use strict";
import * as Sequelize from "../../models/base";
import Users from "./models/Users";
import { generateOTP } from "../../utils/generator";
import * as _ from "lodash";
import e = require("express");

export const signUpUser = async (data: any) => {
  try {
    const otp = await generateOTP();
    const sequelize = await Sequelize.getInstance();
    return sequelize.transaction(async (transaction: any) => {
      const existingUser = await Users.findOne({
        where: { mobileNumber: data.mobileNumber },
      });
    });
  } catch (err) {
    throw err;
  }
};
