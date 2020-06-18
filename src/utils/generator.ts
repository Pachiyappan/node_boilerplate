const otpGenerator = require("otp-generator");

export const generateToken = () =>
  otpGenerator.generate(3, {
    digits: false,
    alphabets: true,
    upperCase: true,
    specialChars: false,
  });
export const generateOTP = () =>
  otpGenerator.generate(4, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });
