"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
module.exports = {
    up: function (queryBuilder) {
        return queryBuilder.createTable("languages", {
            id: {
                type: sequelize_typescript_1.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: sequelize_typescript_1.Sequelize.STRING,
                allowNull: true,
            },
        });
    },
    down: function (queryBuilder) {
        return queryBuilder.dropTable("languages");
    },
};
//# sourceMappingURL=01-languages-table.js.map