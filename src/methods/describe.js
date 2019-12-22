const chalk = require('chalk');
const { log } = console;

async function describe(title, callback) {
  try {
    log(chalk.green(title));
    await callback();
  } catch (err) {
    log(chalk.red(title));
    log(err);
  }
}

module.exports = describe;
