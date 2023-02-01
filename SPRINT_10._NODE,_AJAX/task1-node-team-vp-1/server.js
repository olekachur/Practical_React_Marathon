require("dotenv").config();
const express = require("express");

const args = process.argv.slice(2);

const app = express();

app.get("/", (req, res) => {
  const formatDate = (moment) =>
    `${
      moment.getUTCDate().toString().length === 1
        ? "0" + moment.getUTCDate()
        : moment.getUTCDate()
    }.${
      moment.getUTCMonth().toString().length === 1
        ? "0" + moment.getUTCMonth()
        : moment.getUTCMonth()
    }.${moment.getUTCFullYear()}, ${
      moment.getUTCHours().toString().length === 1
        ? "0" + moment.getUTCHours()
        : moment.getUTCHours()
    }:${
      moment.getUTCMinutes().toString().length === 1
        ? "0" + moment.getUTCMinutes()
        : moment.getUTCMinutes()
    }:${
      moment.getUTCSeconds().toString().length === 1
        ? "0" + moment.getUTCSeconds()
        : moment.getUTCSeconds()
    }`;

  const timer = setInterval(
    () => {
      console.log(formatDate(new Date()));
    },
    args.length === 4 ? args[1] : process.env.INT
  );

  setTimeout(
    () => {
      clearInterval(timer);
      res.send(formatDate(new Date()));
    },
    args.length === 4 ? args[3] : process.env.TIMEOUT
  );
});

app.listen(3000);
