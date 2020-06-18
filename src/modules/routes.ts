import { Express } from "express";
import { default as seedRoutes } from "./seeds/route";
import { default as userRoutes } from "./Users/route";

export default function (app: Express) {
  app.get("/", (req, res) =>
    res.status(200).send({ message: "EnglishMan app has been initiated" })
  );
  seedRoutes(app);
  userRoutes(app);
}
