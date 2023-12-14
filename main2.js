var fs = require("fs");

// var readstream = fs.createReadStream("infile.txt");

// var writestream = fs.createWriteStream("outfile.txt");

// readstream.pipe(writestream);

// console.log("An example of a pipe stream");
console.log("a sample for opening a file");

fs.open("myfile.txt", "r+", function (err) {
  if (err) {
    return console.error(err);
  } else console.log("The file has opened successfully");
});

//File status
fs.stat("myfile.txt", function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log("The file information was retrieved successfully!");
  console.log("This item is a file? " + stats.isFile());
  console.log("This item is a directory ? " + stats.isDirectory());
});
