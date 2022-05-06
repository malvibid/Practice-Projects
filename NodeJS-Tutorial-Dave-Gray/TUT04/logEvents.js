//NPM modules
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

//Common core modules
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${message} \n`;
    console.log(logItem);

    try {
        if (!fs.existsSync(path.join(__dirname, "logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "logs"));
        }
        await fsPromises.appendFile(
            //appendFile will create file if it doesn't exist but it won't create a directory if it doesn't exist, so need to check for it first.
            path.join(__dirname, "logs", "eventLog.txt"),
            logItem
        );
    } catch (error) {
        console.error(error);
    }
};

module.exports = logEvents;
