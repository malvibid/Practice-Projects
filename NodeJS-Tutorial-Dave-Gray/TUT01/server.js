// ---------- HOW NodejS differs from Vanilla JS ----------

//1) Node runs on a server instead of a browser. (Backend not frontend)

//2) The terminal window is the console.
console.log("Hello, Malvi!");

//3) Has a global object instead of window object. Global object is much smaller than the window object.
console.log(global);

//4) Has Common Core modules.
//5) Uses CommonJS modules instead of ES6 modules. Soom may use similar syntax.

const os = require("os"); //CommonJS uses 'require' instead of 'import'.
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename)); //Same as line 21.
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); //Most useful.

//6) Besides the common core modules, can also pull in modules created by other developers or can create own modules.
const math = require("./math");
console.log(math.add(2, 4));

const { divide, subtract } = require("./math"); //Instead of object dot notation, can destructure and fetch specific or all functions.
console.log(subtract(8, 6));
console.log(divide(8, 6));

//7) Node is missing some JS APIs like fetch but we can pull in packages into Node, there is a large amount of packages available though NPM for Node.
