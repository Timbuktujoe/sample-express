const fs = require("fs");

// fs.mkdir("!£!££\\\\###~~~~¬!", (someError, anyData) => {
//   console.log(someError, anyData);
// });

function gimmeFive(input, callback) {
  if (input !== 5) return callback(new Error("input is not 5!!"));
  callback(null, { input: "was 5 :)" });
}

gimmeFive(5, function (err, data) {
  console.log(err, data);
});
