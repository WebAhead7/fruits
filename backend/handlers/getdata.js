const data = require("../data/fruits.json");

const notFound = require("../data/notfound.json");

function dataHandler(request, response) {
  const search = new URLSearchParams(request.url.split("?")[1]);
  const searchedItem = search.get("name");

  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(autoComplete(searchedItem.toLowerCase())));
}

function autoComplete(search) {
  let newArr = data.fruits.filter((item) => {
    return item.toLowerCase().includes(search);
  });

  if (newArr.length == 0) return notFound;

  return newArr.slice(0, 10);
}

module.exports = dataHandler;
