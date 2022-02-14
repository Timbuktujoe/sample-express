// make-it-modular.js
const ls = require("./ls");

ls(process.argv[2], process.argv[3], (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
