// 2-arguments.js

// Get all arguments after the script name
const args = process.argv.slice(2);

// Check how many arguments were passed
if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
