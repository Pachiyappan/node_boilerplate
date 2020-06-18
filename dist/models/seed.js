"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSeedFiles = void 0;
const Sequelize = require("./base");
function runSeedFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const seedFiles = [{ model: "Languages", file: "languages.json" }];
            for (const seedFile of seedFiles) {
                console.log(`Running Seed File ${seedFile.file}`);
                const datas = require(`./migration_seeds/${seedFile.file}`);
                const sequelize = yield Sequelize.getInstance();
                const seedModel = yield sequelize.model(seedFile.model);
                for (const data of datas) {
                    yield seedModel.upsert(data);
                }
            }
        }
        catch (error) {
            throw error;
        }
    });
}
exports.runSeedFiles = runSeedFiles;
//# sourceMappingURL=seed.js.map