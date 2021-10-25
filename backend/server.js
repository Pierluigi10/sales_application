import express from "express";
import fs from "fs";
import cors from "cors";

const app = express(); // create an API instance

app.use(cors()); 


app.get("/", (req, res) => {
  res.send({ message: "Hello from Sales API, D01" }); // sends DATA back to BROWSER
});

// ROUTE salespeople
app.get("/salespeople", (req, res) => {
  const strFileContent = fs.readFileSync("./data/salespeople.json", "utf-8");

  const arrSalesPeople = JSON.parse(strFileContent); // convert str to array of object

  //res.send stringfies all JS data to JSON string for us => sent JSON an BROWSER
  res.send({
    // send a response to browser ( => res.write + res.end )
    message: "Hello, here you will have salespeople sooon",
    data: arrSalesPeople,
  });
});

app.get("/topsalesperson", (req, res) => {
  const strFileContent = fs.readFileSync("./data/topsalesperson.json", "utf-8");
  const objTopSalesPerson = JSON.parse(strFileContent);

  res.send({
    message: "Hello, you get top person here soon, just wait, buddy",
    data: objTopSalesPerson,
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API started on http://localhost:${PORT}`);
  console.log(`API started on http://localhost:${PORT}/salespeople`);
  console.log(`API started on http://localhost:${PORT}/topsalesperson`);
});

//API
// 2 routes

// Route 1: / salesperson => read file sales.json
// Route 2: / topsalesperson => read file topsales.json
