const fs = require("fs");
const path = require("path");
const ls = (directoryName, fileExtension, callback) => {
  try {
    fs.readdir(directoryName, (err, files) => {
      if (err) return callback(err);
      const res = files.filter(
        (file) => path.extname(file) === "." + fileExtension
      );
      callback(null, res);
    });
  } catch (err) {
    callback(err);
  }
};
module.exports = ls;
