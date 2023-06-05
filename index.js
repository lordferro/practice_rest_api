const readLine = require("readline");
const fs = require("fs/promises");
const { program } = require("commander");
require("colors");

// create readLine instance and config it to interect with user via command line
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

program.option(
  "-f, --file [type]",
  "file for saving results",
  "game_results.txt"
);

// use comand line arguments
program.parse(process.argv);

// path to the log file
const logFile = program.opts().file;

/**
 * Simple input data validator
 * @param {number} val value to validate
 * @returns {boolean}
 */
const isValid = (val) => {
  if (!Number.isNaN(val) && val > 0 && val <= 10) return true;

  if (Number.isNaN(val)) {
    console.log("please enter a number");
  }
  if (val < 1 || val > 10) {
    console.log("number should be between 1 and 10");
  }

  return false;
};

/**
 * Loge game resutsto the text file
 * @param {string} msg message to log
 * @returns {Promise<void>}  it means return promise with no data
 */
const logger = async (msg) => {
  try {
    await fs.appendFile(logFile, `${msg}\n`);
    console.log(`succesfully saved game results to the file ${logFile}`.yellow);
  } catch (error) {
    console.log(error.message);
  }
};

// readline usage example
// rl.on("line", (txt) => {
//   console.log("you:" + txt.bgBlue);
//   process.exit();
// });

// Game logic:
// attemps
let counter = 0;

const mind = Math.ceil(Math.random() * 10);

const game = () => {
  rl.question("Please enter any number between 1-10\n".green, (val) => {
    const number = +val;

    //   validating
    if (!isValid(number)) return game();

    counter += 1;
    if (number !== mind) {
      console.log("Wrong".red);
      return game();
    }
    console.log(`Yeah, it take ${counter} attemps`.magenta);

    logger(
      `${new Date().toLocaleString(
        "uk-UK"
      )}: Congrats, it take ${counter} attemps`
    );

    rl.close();
  });
};
game();
