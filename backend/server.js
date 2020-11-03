const http = require("http");
const router = require("./router");
const PORT = 3000;
const server = http.createServer(router);

server.listen(PORT, () => console.log(`we're online at http://localhost:3000`));
