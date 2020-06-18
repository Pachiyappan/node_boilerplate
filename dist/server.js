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
/**
 * Module dependencies.
 */
const express = require("express");
const compression = require("compression"); // compresses requests
const bodyParser = require("body-parser");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const lusca = require("lusca");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const http = require("http").Server(app);
const cors = require("cors");
const expressValidator = require("express-validator");
const events_1 = require("events");
const Sequelize = require("./models/base");
const routes_1 = require("./modules/routes");
const fileUpload = require("express-fileupload");
dotenv.config();
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.set("emitter", new events_1.EventEmitter());
app.set("emitter", new events_1.EventEmitter());
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());
app.get("emitter").on("appStarted", function () {
    console.log("App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("Press CTRL-C to stop\n");
});
initializeApplication().catch((error) => {
    console.log("Error occurred when initializing app.");
    console.log(error);
    process.exit();
});
module.exports = app;
function initializeApplication() {
    return __awaiter(this, void 0, void 0, function* () {
        routes_1.default(app);
        const sequelize = yield Sequelize.initialize();
        yield sequelize.authenticate();
        http.listen(app.get("port"), () => {
            app.get("emitter").emit("appStarted");
        });
        return;
    });
}
//# sourceMappingURL=server.js.map