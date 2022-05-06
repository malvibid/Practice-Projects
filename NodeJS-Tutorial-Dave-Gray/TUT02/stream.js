const path = require("path");
const fs = require("fs");

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
    encoding: "utf8",
});

const ws = fs.createWriteStream(path.join(__dirname, "files", "new-lorem.txt"));

/* //listening for data that is coming in and (continuously) writing it to 'new-lorem.txt' as it comes.
rs.on("data", (dataChunk) => {
    console.log("Got data chunk"); // Will print each data chunk as it is received.
    ws.write(
        "\n\n\n-----------------------------NEW DATA CHUNK -----------------------------\n\n" +
            dataChunk
    );
}); */

//More efficient than the listener above, is to use pipe
rs.pipe(ws);
