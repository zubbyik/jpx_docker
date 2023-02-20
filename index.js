const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h2>Hello whats up, Nnenna, dear?</h2>");
});

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
