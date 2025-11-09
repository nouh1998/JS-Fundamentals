// 5-to_integer.js

const args = process.argv.slice(2); // get arguments
const num = parseInt(args[0]);

if (!isNaN(num)) {
    console.log("My number: " + num);
} else {
    console.log("Not a number");
}
