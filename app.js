const express = require("express");
const sequelize = require("./utils/db");

const app = express();

const PORT = 3000;

require("dotenv").config();
app.use(express.json());

//Routes
const UserRoute = require("./routes/user");

app.use("/api/user", UserRoute);

sequelize
  .sync({ force: false })
  .then((result) => {
    app.listen(PORT, function () {
      console.log("Started application on port %d", PORT);
    });
  })
  .catch((errr) => console.log(errr));
