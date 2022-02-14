const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public")); // serve static files from the /public folder

app.route("/download").get((req, res) => {
  console.log(
    "date: " + new Date().toDateString() + " route: /download method: get "
  );
  const file = `${__dirname}/public/index.html`;

  res.download(file);
});

app
  .route("/")
  //   .get((req, res) => {
  //     console.log(
  //       "date: " + new Date().toDateString() + " route: / method: get "
  //     );
  //     res.send("We retrieve a resource ");
  //   })
  .post((req, res) => {
    console.log(
      "date: " + new Date().toDateString() + " route: / method: post "
    );
    res.send("We create a resource ");
  })
  .put((req, res) => {
    console.log(
      "date: " + new Date().toDateString() + " route: / method: put "
    );
    res.send("We update a resource ");
  })
  .delete((req, res) => {
    console.log(
      "date: " + new Date().toDateString() + " route: / method: delete "
    );
    res.send("We delete a resource ");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
