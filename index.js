require("dotenv").config();

const { PORT, HOST } = require("./config");

const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: `http://${HOST}:${PORT}`,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to CRUD-API Example",
  });
});

const db = require("./models");
db.sequelize.sync();

require("./routes/tutorial.routes")(app);

app.listen(PORT, () =>
  console.log(`Server started on https://${HOST}:${PORT}`)
);