const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`app listening on localhost://${PORT}`);
});
