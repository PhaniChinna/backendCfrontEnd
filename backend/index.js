const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/get", (request, response) => {
  response.send([
    {
      name: "Ph",
      age: 22,
    },
    {
      name: "Pha",
      age: 24,
    },
    {
      name: "Phan",
      age: 25,
    },
    {
      name: "Phani",
      age: 26,
    },
    {
      name: "PhanindharReddy",
      age: 28,
    },
  ]);
});

app.listen(5000, () => {
  console.log("Server is Running at https://localhost:5000");
});
