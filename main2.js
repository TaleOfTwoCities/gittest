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

//writeFileSync

fs.writeFileSync("syncfile.txt", "Gojo in 8 hours");
console.log("Write contents to a file successfully");
console.log("Please check syncfile.txt");

var data = fs.readFileSync("syncfile.txt");
console.log("contents of syncFile.txt");
console.log(data.toString());

//writeFile

fs.writeFile("asyncfile.txt", "R in 8 hours", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("write to a file successfully");
  console.log("please check asyncfile.txt");
});

fs.readFile("asyncfile.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("The contents of asyncfile.txt");
  console.log(data.toString());
});

var buf = new Buffer.alloc(1024);

fs.open("myfile.txt", "w+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("The file has opened successfully");

  fs.close(fd, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("The file has closed successfully");
  });
});

//Delete files
console.log("This is a sample for deleting files");
fs.unlink("aaa.txt", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("The file has been deleted successfully");
});

//HOUR 7
