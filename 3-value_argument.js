// 3-value_argument.js

const args = process.argv.slice(2); // ignore 'node' and script path

if (args[0] === undefined) {
    console.log("No argument");
} else {
    console.log(args[0]);
}
