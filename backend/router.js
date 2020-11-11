const missingHandler = require("./handlers/missing");
const dataHandler = require("./handlers/getdata");
const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const fruitData = require("./handlers/fruitData");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("/public")) {
    publicHandler(request, response);
  } else if (url.includes("/getdata")) {
    dataHandler(request, response);
  } else if (url.includes("/fruitdata")) {
    fruitData(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
