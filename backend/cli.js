import fetch from "node-fetch";

// CLI: API Data fetcher and  updater

// fetch the data from the Northwind
// from this data, create the following two files: salespersons.json and topSalesperson.json

// Top Sales receive  Bonus
// bonus: 10-25 (random)

// const API_URL =
//   "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json";

// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log("Error", err));

//Alternative with await
const API_URL =
  "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json";

const res = await fetch(API_URL); // Fetch to API
const data = await res.json(); // parse JSON in js object
console.log(data);
