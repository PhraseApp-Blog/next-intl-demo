const express = require("express");
const fs = require("fs");
const path = require("path");
const port = 4000;

const app = express();

function fakeDelay(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, 1000);
  });
}

app.get("/", (_req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data.json"), "utf8"),
  );

  return fakeDelay(() => res.json(data));
});

app.get("/:id", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data.json"), "utf8"),
  );

  if (data.featured.id === req.params.id) {
    return fakeDelay(() => res.json(data.featured));
  }

  const filteredData = data.feed.filter((item) => item.id === req.params.id);

  return fakeDelay(() => res.json(filteredData[0]));
});

app.listen(port, () => {
  console.log(`Mock API listening at http://localhost:${port}`);
});
