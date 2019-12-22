const chalk = require('chalk');
const { log } = console;

async function test(title, callback) {
  try {
    await callback();
    log(chalk.green(`✓ `) + title);
  } catch (err) {
    log(chalk.red(`✕ ` + title));
    log(err);
  }
}

module.exports = test;
