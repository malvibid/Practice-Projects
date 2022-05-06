// Video Tutorial with Timestamps https://youtu.be/yQBw8skBdZU

// Import 'File System' common core module using CommonJS imports, i.e. use 'require'
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(
            path.join(__dirname, "files", "starter.txt"),
            "utf8" // Don't need callback because of 'await'.
        );
        console.log(data);

        // await fsPromises.unlink(path.join(__dirname, "files", "starter.txt")); //deletes 'starter.txt'

        await fsPromises.writeFile(
            path.join(__dirname, "files", "promiseWrite.txt"),
            data
        );

        await fsPromises.appendFile(
            path.join(__dirname, "files", "promiseWrite.txt"),
            "\n\nNice to meet you!"
        );

        await fsPromises.rename(
            path.join(__dirname, "files", "promiseWrite.txt"),
            path.join(__dirname, "files", "promiseComplete.txt")
        );

        const newData = await fsPromises.readFile(
            path.join(__dirname, "files", "promiseComplete.txt"),
            "utf8" // Don't need callback because of 'await'.
        );
        console.log(newData);
    } catch (err) {
        console.error(`There was an error: ${err}`);
    }
};

fileOps();
