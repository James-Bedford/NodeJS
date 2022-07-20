const path = require("path");
const fs = require("fs");
const request = require("request-promise");

let dataPath = path.join(__dirname, "popular-articles.json");
let redditArray = [];

request("https://reddit.com/r/popular.json").then((pullData) => {
  console.log(pullData);
  let stream = JSON.parse(pullData);
  stream.data.children.forEach((pizza) => {
    redditArray.push({
      Subreddit: pizza.data.subreddit,
      Id: pizza.data.id,
      Title: pizza.data.title,
      URL: pizza.data.url,
      Author: pizza.data.author,
    });

    fs.writeFile(dataPath, JSON.stringify(redditArray), (err) => {
      console.log(err);
    });
  });
});
