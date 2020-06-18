"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = void 0;
const Sequelize = require("../../models/base");
const Users_1 = require("./models/Users");
const generator_1 = require("../../utils/generator");
exports.signUpUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const otp = yield generator_1.generateOTP();
        const sequelize = yield Sequelize.getInstance();
        return sequelize.transaction((transaction) => __awaiter(void 0, void 0, void 0, function* () {
            const existingUser = yield Users_1.default.findOne({
                where: { mobileNumber: data.mobileNumber },
            });
        }));
    }
    catch (err) {
        throw err;
    }
});
//# sourceMappingURL=repo.js.map