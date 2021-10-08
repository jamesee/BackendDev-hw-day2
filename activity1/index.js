const http = require("http");
const fs = require("fs");

const homepage = fs.readFileSync("./activity1/public/index.html");
const page404 = fs.readFileSync("./activity1/public/404.html");

const server = http.createServer((req, res) => {

  console.log(`${req.method} ${req.url}`)
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (req.url === "/plain" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Welcome to my homepage ...");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(page404)
    res.end();
  }


});

server.listen(5000);
