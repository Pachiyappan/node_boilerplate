/**
 * Module dependencies.
 */
import * as express from "express";
import * as compression from "compression"; // compresses requests
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as lusca from "lusca";
import * as dotenv from "dotenv";
const app = express();
const path = require("path");
const http = require("http").Server(app);
import * as cors from "cors";
import expressValidator = require("express-validator");
import { EventEmitter } from "events";
import * as Sequelize from "./models/base";
import { default as routes } from "./modules/routes";
const fileUpload = require("express-fileupload");
dotenv.config();

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.set("emitter", new EventEmitter());
app.set("emitter", new EventEmitter());
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

app.get("emitter").on("appStarted", function () {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("Press CTRL-C to stop\n");
});

initializeApplication().catch((error) => {
  console.log("Error occurred when initializing app.");
  console.log(error);
  process.exit();
});
module.exports = app;

async function initializeApplication() {
  routes(app);
  const sequelize = await Sequelize.initialize();
  await sequelize.authenticate();
  http.listen(app.get("port"), () => {
    app.get("emitter").emit("appStarted");
  });
  return;
}
