const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
