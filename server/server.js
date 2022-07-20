const path = require("path");
const fs = require("fs");
//const request = require("request");
//const { error } = require("console");

let dataPath = path.join(__dirname, "../chirps.json");

fs.readFile(dataPath, { encoding: "UTF-8" }, (err, data) => {
  console.log("here");
  let chirp = JSON.parse(data);
  console.log(chirp);
});
