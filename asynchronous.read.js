const { convertCsv } = require('./csv.parse');
const {readFile} = require('fs');


readFile("./data/pulitzer-circulation-data.csv","utf-8",(err,data)=>{
    const values = convertCsv(data);
    console.table(values);
});