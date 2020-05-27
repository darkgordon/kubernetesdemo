var express = require("express");
const process = require("process");

var expressapp = express();
expressapp.get("/", function (req, res) {
  res.send('{"message":"Servidor test nodejs}');
});
expressapp.listen(5001, function () {
  console.log("Ready on port 5001!");
  console.log("RIP IN PEPERRONI");
  console.log("UPDATE 3 ");
  console.log("UPDATE 4 ");
});

/* To Handle Ctrl C*/
process.on("SIGINT", function () {
  process.exit();
});
