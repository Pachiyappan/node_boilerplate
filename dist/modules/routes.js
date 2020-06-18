"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./seeds/route");
const route_2 = require("./Users/route");
function default_1(app) {
    app.get("/", (req, res) => res.status(200).send({ message: "EnglishMan app has been initiated" }));
    route_1.default(app);
    route_2.default(app);
}
exports.default = default_1;
//# sourceMappingURL=routes.js.map