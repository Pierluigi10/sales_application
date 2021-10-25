import fetch from "node-fetch";
import fs from "fs";

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
// const API_URL =
//   "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json";

// const res = await fetch(API_URL); // Fetch to API
// const data = await res.json(); // parse JSON in js object
// console.log(data);

const getRandomNumInRange = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

// get API data and convert to the format we want
const getApiDataAndSaveFormatted = async () => {
  const API_URL =
    "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json";

  const res = await fetch(API_URL); // Fetch to API
  const data = await res.json(); // parse JSON in js object
  console.log(data);

  // data.forEach() // to want to loop through entries and make something for every entry
  // data.map() to make all entries in a NEW format

  // convert all sales people tho the format we want
  const arrSalesPeople = data.map((person) => {
    const personFormatNew = {
      id: person.employeeID,
      firstName: person.firstName,
      lastName: person.lastName,
      salesInEuro: getRandomNumInRange(100, 900),
    };
    return personFormatNew;
  });

  //   console.log(arrSalesPeople);

  // write all sales people to FILE
  // we write binary or string data to file

  //   console.log("arrRes" + arrSalesPeople);
  const jsonResult = JSON.stringify(arrSalesPeople);
  //   console.log("jsonRes" + jsonResult);
  //   const resFileWrite = fs.writeFileSync("./data/salespeople.json", jsonResult);
  //   console.log(resFileWrite); //undefined

  try {
    fs.writeFileSync("./data/salespeople.json", jsonResult);
  } catch (err) {
    console.log(err);
  }
};

getApiDataAndSaveFormatted();

/* INPUT
      "employeeID": 2,
      "lastName": "Fuller",
      "firstName": "Andrew",
  */

// Expected OUTPUT in file
// [{
//   "id": 8,
//   "lastName": "Callahan",
//   "firstName": "Laura",
//   "salesInEuro": 365 => [100-900]
// }]
