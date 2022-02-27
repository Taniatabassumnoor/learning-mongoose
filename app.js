const express = require("express");
const app = express();
const cors = require("cors");

const blogroute = require("./routes/blogroute");
app.use(express.json());
app.use(cors());
app.use(blogroute);

module.exports = app;
