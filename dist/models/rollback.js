"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("./base");
const migration_1 = require("./migration");
Sequelize.initialize()
    .then((sequelize) => migration_1.rollback(sequelize))
    .catch((err) => {
    console.log(err);
    console.log("Postgres connection error. Please make sure Postgres is running.");
    process.exit();
});
//# sourceMappingURL=rollback.js.map