"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = exports.getInstance = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let sequelize;
function getInstance() {
    if (!sequelize) {
        sequelize = new sequelize_typescript_1.Sequelize({
            url: process.env.DATABASE_URL,
            logging: false,
            dialect: "postgres",
            modelPaths: [
                __dirname + "/../modules/seeds/models/",
                __dirname + "/../modules/Users/models/",
            ],
            pool: {
                min: 1,
                max: 20,
                idle: 10000,
            },
        });
    }
    return Promise.resolve(sequelize);
}
exports.getInstance = getInstance;
function initialize() {
    return getInstance();
}
exports.initialize = initialize;
//# sourceMappingURL=base.js.map