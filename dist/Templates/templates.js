"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTemplate = void 0;
const _ = require("lodash");
exports.dataTemplate = (templateStr, insertData) => {
    const compiled = _.template(templateStr);
    return compiled(insertData);
};
//# sourceMappingURL=templates.js.map