import * as Sequelize from "./base";

export async function runSeedFiles() {
  try {
    const seedFiles = [{ model: "Languages", file: "languages.json" }];
    for (const seedFile of seedFiles) {
      console.log(`Running Seed File ${seedFile.file}`);
      const datas = require(`./migration_seeds/${seedFile.file}`);
      const sequelize = await Sequelize.getInstance();
      const seedModel = await sequelize.model(seedFile.model);
      for (const data of datas) {
        await seedModel.upsert(data);
      }
    }
  } catch (error) {
    throw error;
  }
}
