const http = require("http");
const router = require("./router");
require("dotenv").config();

const PORT = process.env.port || 3000;
const server = http.createServer(router);

server.listen(PORT, () => console.log(`we're online at http://localhost:3000`));
