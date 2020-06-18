"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testUtils = void 0;
const moment = require("moment");
exports.testUtils = (preCount, incomingCount) => {
    if (incomingCount < preCount) {
        return { onreduce: true, value: preCount - incomingCount };
    }
    else {
        const result = incomingCount - preCount;
        return { onreduce: false, value: result };
    }
};
//# sourceMappingURL=logicals.js.map