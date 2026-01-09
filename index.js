const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("I am online 24/7!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
