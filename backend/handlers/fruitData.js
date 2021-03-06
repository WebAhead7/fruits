// const data = require("../data/fruits.json");
const api = require("../apiRequest");

function fruitData(request, response) {
  const search = new URLSearchParams(request.url.split("?")[1]);
  const searchedItem = search.get("name");

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchedItem}&limit=5&offset=0&rating=g&lang=en`;

  api(url)
    .then((res) => {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(res.body.data[0].images.original.url));
    })
    .catch((err) => {
      console.log(err);
      // response.writeHead(404, { "content-type": "test/plain" });
      response.end(err.message);
      // response.end("not found");
    });
}

module.exports = fruitData;
