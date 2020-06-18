
const shell = require('shelljs');

shell.mkdir("dist/models/migration_seeds/")
shell.cp('-R', 'src/models/migration_seeds/*.json', 'dist/models/migration_seeds/');
shell.cp('.env', 'dist/.env');
shell.mkdir("dist/views")
shell.cp('-R', 'src/views/*.ejs', 'dist/views/');
console.log("Coping Static Asserts");