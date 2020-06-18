"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
function load() {
    const env = (process.env.NODE_ENV || "dev").toLowerCase();
    console.log(__dirname);
    return Object.assign({ env }, require(`./${env}.json`));
}
exports.load = load;
//# sourceMappingURL=index.js.map