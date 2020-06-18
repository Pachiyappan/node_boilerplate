"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
/**
 * GET /
 * Home page.
 */
const page = {
    title: "Welcome to E-Communication",
};
exports.index = (req, res) => {
    return res.render("pgredirect.ejs", {
        page,
    });
};
//# sourceMappingURL=home.js.map