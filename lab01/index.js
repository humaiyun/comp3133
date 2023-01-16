const csv = require('csv-parser')
const fs = require('fs')

// a.	Delete canada.txt and usa.txt if already exist using fs module 
if (fs.existsSync("./lab01/canada.txt")) {
    fs.unlink("./lab01/canada.txt", (err) => {
        if (err) throw err;
        console.log('canada.txt deleted...');
    });
}
if (fs.existsSync("./lab01/usa.txt")) {
    fs.unlink("./lab01/usa.txt", (err) => {
        if (err) throw err;
        console.log('usa.txt deleted...');
    });
}



let res = [];

fs.createReadStream('./lab01/input_countries.csv')
  .pipe(csv())
  .on('data', (row) => res.push(row))
  .on('end', () => { 
    // b.	Filter data of Canada and write data to canada.txt
    const canada = res.filter(row => { return row.country === "Canada" });
    console.log('Canada results filtered...');
    let writeStream = fs.createWriteStream("./lab01/canada.txt")
                        .on("error", (err) => console.log(err))
    canada.forEach(value => writeStream.write(`${JSON.stringify(value)}\n`));

    // c.	Filter data of United States and write data to usa.txt
    const usa = res.filter(row => { return row.country === "United States" });
    console.log('USA results filtered...');
    writeStream = fs.createWriteStream("./lab01/usa.txt")
                    .on("error", (err) => console.log(err))
    usa.forEach(value => writeStream.write(`${JSON.stringify(value)}\n`));
    writeStream.end();
});



