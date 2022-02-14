const fs = require("fs");
// const fileContents = fs.readFileSync("./log.js", "utf8");
// console.log(fileContents);

// SYNCHRONOUS IO
fs.writeFileSync("message", "bla bla blab labla");
console.log("i happen after synchronous file creation");
const myNewFile = fs.readFileSync("./message", "utf8");
console.log(myNewFile);

// ASYNCHRONOUSLY IO

fs.writeFile("message2", "blablablabla2", (err) => {
  if (err) throw err;
  fs.readFile("./message2", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
console.log("i happen before async io has finished");
