// Import 'File System' common core module using CommonJS imports, i.e. use 'require'
const fs = require("fs");
const path = require("path");

//Asynchronously reads the entire contents of a file.
// Hardcoding files names may cause some issues between different OS, like slashes etc, so its much safer to use the 'path' module to get the file path.
fs.readFile(
    path.join(__dirname, "files", "starter.txt"),
    "utf8",
    (err, data) => {
        if (err) throw err;
        console.log("\n" + data + "\n"); // If no encoding is specified then raw buffer is returned. Can also see the string by logging data.toString() instead of specifying the 'utf8' encoding.
    }
);

//Asynchronously writes data to a file, replacing the file if it already exists.
fs.writeFile(
    path.join(__dirname, "files", "reply.txt"),
    "Nice to meet you!",
    (err) => {
        if (err) throw err;
        console.log("\n-----Write complete-----\n");

        //Asynchronously append data to a file, creating the file if it does not exist.
        fs.appendFile(
            path.join(__dirname, "files", "reply.txt"),
            "\n\n Yes, it is.",
            (err) => {
                if (err) throw err;
                console.log("\n-----Append complete-----\n");

                fs.rename(
                    path.join(__dirname, "files", "reply.txt"),
                    path.join(__dirname, "files", "newReply.txt"),
                    (err) => {
                        if (err) throw err;
                        console.log("\n-----Rename complete-----\n");
                    }
                );
            }
        );
    }

    //As 'append' is within callback funct of 'write', 'write' will complete first and then 'append'. Similarly, if order mattters, then place the next task in the sequence within callback funct of 'append'.
    //But this leads to a CALLBACK HELL.
    //Therefore, like in Vanilla JS, we use promises to prevent callback hell. See next commit - "DG-NodeJS-Tut02 - Files - 2.2 File System Promises"
);

console.log(
    "\nNode is asynchronous. While it is reading the file, it will carry on executing the next set of tasks in the program. When it completes reading the file, it will execute the pending set of tasks which specify what to do with the fetched resource, in this case, it will log the contents of the file.\n"
);

//We need to listen for uncaught errors. (Following code is from Documentation)
// Exit on uncaught errors
process.on("uncaughtException", (err) => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});
