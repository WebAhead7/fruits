const missingHandler = require("./handlers/missing");
const dataHandler = require("./handlers/getdata");

function router(request, response) {
  const url = request.url;
  if (url.includes("/getdata")) {
    dataHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
