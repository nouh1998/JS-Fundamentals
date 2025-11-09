// 7-multi_c.js

const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (!x || x <= 0) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
