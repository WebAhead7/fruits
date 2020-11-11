// const data = require("../data/fruits.json");
function fruitData(request, response) {
  const search = new URLSearchParams(request.url.split("?")[1]);
  const searchedItem = search.get("name");
  console.log(searchedItem);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3NWFzXcOOYEZmk9LhDEc3lfCXuVms84g&q=${searchedItem}&limit=25&offset=0&rating=g&lang=en`;

  response.writeHead(200, { "content-type": "application/json" });
  response.end(searchedItem);
}

module.exports = fruitData;
