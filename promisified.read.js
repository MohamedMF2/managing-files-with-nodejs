const fs = require('fs')
const { convertCsv } = require('./csv.parse')
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const read = async () => {

    try {
        const data = await readFile("./data/pulitzer-circulation-data.csv", "utf-8");
        console.table(convertCsv(data));        
    } catch (error) {
        console.log(`something wrong with reading the file ${error}`);
    }
    
}

read();
