const express = require("express");
const fs = require("fs");
const path = require("path");
const port = 4000;

const app = express();

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data.json"), "utf8"),
);

app.get("/", (_req, res) => {
  // Fake a server wait time
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.json(data));
    }, 1000);
  });
});

app.listen(port, () => {
  console.log(`Mock API listening at http://localhost:${port}`);
});
