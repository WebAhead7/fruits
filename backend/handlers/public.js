const fs = require("fs");
const path = require("path");

function publicHandler(request, response) {
  const url = request.url;
  const types = {
    css: "text/css",
    js: "application/json",
    jpg: "image/jpg",
  };
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension];

  let newPath = `${urlArray[0]}.${urlArray[1]}`;

  const filePath = path.join(__dirname, "..", newPath);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }
  });
}

module.exports = publicHandler;
