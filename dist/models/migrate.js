"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("./base");
const migration_1 = require("./migration");
const seed_1 = require("./seed");
module.exports = Sequelize.initialize()
    .then((sequelize) => migration_1.migrate(sequelize)).then(() => seed_1.runSeedFiles())
    .catch((err) => {
    console.log(err);
    console.log("Postgres connection error. Please make sure Postgres is running.");
})
    .then(function () {
    process.exit();
});
//# sourceMappingURL=migrate.js.map