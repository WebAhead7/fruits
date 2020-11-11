// const data = require("../data/fruits.json");
function fruitData(request, response) {
  const search = new URLSearchParams(request.url.split("?")[1]);
  const searchedItem = search.get("name");
  console.log(searchedItem);

  response.writeHead(200, { "content-type": "application/json" });
  response.end(searchedItem);
}

module.exports = fruitData;
