"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = exports.generateToken = void 0;
const otpGenerator = require("otp-generator");
exports.generateToken = () => otpGenerator.generate(3, {
    digits: false,
    alphabets: true,
    upperCase: true,
    specialChars: false,
});
exports.generateOTP = () => otpGenerator.generate(4, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false,
});
//# sourceMappingURL=generator.js.map