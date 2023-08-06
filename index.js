const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const server = http.createServer((req, res) => {
  const fileLink = req.url; // anything after 8080...what the user searches for
  const fileLinkExt = path.extname(fileLink); // ex. .html  .js  .css
  const reqFile = path.join(__dirname, fileLink); // full link + what user requested

  if (fileLink === "/" || fileLink === "/index.html") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf-8");
    });
  } else if (fileLink === "/about.html" || fileLink === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf-8");
    });
  } else if (fileLink === "/contact-me" || fileLink === "/contact-me.html") {
    fs.readFile(path.join(__dirname, "contact-me.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf-8");
    });
  } else {
    fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf-8");
    });
  }
});

server.listen(8080, () => {
  console.log("server running...");
});
