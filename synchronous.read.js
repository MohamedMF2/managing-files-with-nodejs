const { convertCsv } = require('./csv.parse');
const { readFileSync } = require('fs');

try {
    const data = readFileSync("./data/pulitzer-circulation-data.cs", "utf-8");

    console.table(convertCsv(data));
} catch (error) {
    console.log(`something wrong with the file ${error}`)
}