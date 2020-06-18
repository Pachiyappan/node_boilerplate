"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollback = exports.migrate = void 0;
const Umzug = require("umzug");
function getMigrateInstance(sequelize) {
    return new Umzug({
        storage: "sequelize",
        storageOptions: {
            sequelize: sequelize
        },
        // see: https://github.com/sequelize/umzug/issues/17
        migrations: {
            params: [
                sequelize.getQueryInterface(),
                sequelize.constructor,
                function () {
                    throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
                }
            ],
            path: __dirname + "/migrations"
        },
        logging: function () {
            console.log.apply(undefined, arguments);
        }
    });
}
function migrate(sequelize) {
    return getMigrateInstance(sequelize).up();
}
exports.migrate = migrate;
function rollback(sequelize) {
    return getMigrateInstance(sequelize).down();
}
exports.rollback = rollback;
//# sourceMappingURL=migration.js.map