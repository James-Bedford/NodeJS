const path = require("path");
const fs = require("fs");
const request = require("request-promise");

let dataPath = path.join(__dirname, "/downloads/popular-articles");
let redditArray = [];

request("https://reddit.com/r/popular.json").then((pullData) => {
  let stream = JSON.parse(pullData);

  stream.data.children.forEach((pizza) => {
    let fileExt = pizza.data.id; //unique file id for each set of data.
    let fileType = pizza.data.url;
    if (
      path.extname(fileType) == ".png" ||
      path.extname(fileType) == ".jpg" ||
      path.extname(fileType) == ".gif"
    ) {
      redditArray.push({
        Subreddit: pizza.data.subreddit,
        Id: pizza.data.id,
        Title: pizza.data.title,
        URL: pizza.data.url,
        Author: pizza.data.author,
        FileType: path.extname(fileType),
      });

      fs.writeFile(
        dataPath + fileExt + ".json",
        JSON.stringify(redditArray),
        (err) => {
          console.log(err);
        }
      );
    } //end if
  });
});
