"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = void 0;
/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
    res.render("api/index", {
        title: "API Examples"
    });
};
//# sourceMappingURL=api.js.map