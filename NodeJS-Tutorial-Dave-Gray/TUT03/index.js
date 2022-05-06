// NPM is provides thousands of packages to use in our application.
// Difference between a Node Common Core module and a NPM packages is that NPM packages are Node modules created by third parties.
// Other developers create reusable modules and share them through NPM, so we can avoid reinventing the wheel.

// Run 'npm init' to create 'package.json' file
// Run 'npm install' to download dependencies specified 'package.json'. Usually have to do this when we've clonned a repo from Github or using someone's 'package.json'
// Run 'npm i package-name' to install production dependencies. Use -g flag to instal globally.
// Run 'npm i package-name -D' to install dev dependencies. Can use --save-dev instead of -D
// Run scripts using "npm run script-name". Don't need 'run' keyword for the 'start' script.
// Run 'npm update' to update any packages to specified latest versions.
// Run 'npm rm package-name' to remove package. Specify -D for removing dev dependencies and -g for removing global version.
// If you unistall a package npm does not remove it from scripts in 'package.json'.

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(uuid());
