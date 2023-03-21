/**
 * a simple module which
 * just prints out a message to stdout
 */

function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;
