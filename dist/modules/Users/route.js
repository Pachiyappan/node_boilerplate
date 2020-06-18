"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_handler_1 = require("../common/request-handler");
const routes_1 = require("../../constants/routes");
const controller = require("./controller");
function default_1(app) {
    app.post(routes_1.routesPath.SIGN_UP, request_handler_1.handle(controller.signUpUser));
}
exports.default = default_1;
//# sourceMappingURL=route.js.map