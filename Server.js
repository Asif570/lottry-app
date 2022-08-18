require("dotenv").config();
const http = require("http");
const app = require("./app/app");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const Url = process.env.Url || "localhost";
server.listen(PORT, () => {
  console.log("server is running at ---> " + Url + ":" + PORT);
});
