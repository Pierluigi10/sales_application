# Build backend/frontend sales application with CLI data updater

![grafik](https://user-images.githubusercontent.com/446574/138274315-778d7fef-3f14-4450-9d55-627cb32c1a92.png)

## Scenario

You work for a company that has several salespersons who make sales throughout the day. Your task is to make an internal website for the sales manager which allows them to see the amount sales made each day by each salesperson. 

## Technical overview

Create an application that has three parts: 

1. **Backend CLI**: a JavaScript file that can be executed on the command line which fetches data from another API and creates customized JSON files for the Backend API to serve 
	- this script could theoretically be automated with a CRON Job or Node script that runs this commands once a day to update the information
	- for this exercise, you will execute it with `npm run update` which will fetch new information via API and update the JSON files
2. **Backend API**: a Node/Express API to serve data to frontend on two routes: `/salespersons` and `/topsalesperson`
3. **Frontend Website**: a create-react-app frontend that fetches information from the two routes provided from backend API and displays it on website

## 1. Backend CLI

- build a CLI which allows you to type `npm run update` which updates two JSON files
- fetch the data from [the Northwind employees.json file](https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json)
- from this data, create the following two files:

**salespersons.json**: *items are in ascending order of salesInEuro* - *for this exercise, salesInEuro is a random number between 100 and 900*
```
[
	{
		"id": 7,
		"lastName": "King",
		"firstName": "Robert",
		"salesInEuro": 728
	},
	{
		"id": 6,
		"lastName": "Suyama",
		"firstName": "Michael",
		"salesInEuro": 628
	},
	{
		"id": 4,
		"lastName": "Peacock",
		"firstName": "Margaret",
		"salesInEuro": 584
	},
	{
		"id": 2,
		"lastName": "Fuller",
		"firstName": "Andrew",
		"salesInEuro": 451
	},
	{
		"id": 1,
		"lastName": "Davolio",
		"firstName": "Nancy",
		"salesInEuro": 393
	},
	{
		"id": 8,
		"lastName": "Callahan",
		"firstName": "Laura",
		"salesInEuro": 365
	},
	{
		"id": 5,
		"lastName": "Buchanan",
		"firstName": "Steven",
		"salesInEuro": 277
	},
	{
		"id": 3,
		"lastName": "Leverling",
		"firstName": "Janet",
		"salesInEuro": 199
	},
	{
		"id": 9,
		"lastName": "Dodsworth",
		"firstName": "Anne",
		"salesInEuro": 136
	}
]
```

**topSalesperson.json**: *for this exercise, bonusInEuro is a random number between 10 and 30*
```
{
	"id": 7,
	"lastName": "King",
	"firstName": "Robert",
	"salesInEuro": 728
	"bonusInEuro": 25
}
```

- for ways to fetch data from the backend, see [these code examples in the Course repository](https://github.com/FbW-D01/FbW-D01-Course/tree/main/_CODE/05.01_BE_SER/fetchDataFromBackend)

## 2. Backend API

- create a Node/Express app which listens to port `3020` and serves the following to the front end:
    - `/salespersons`: the content of the `salespersons.json` file created by the updater CLI
    - `/topsalesperson`: the content of the `topsalesperson.json` file created by the updater CLI

## 3. Frontend

- create a `create-react-app`
- fetch the data from `/salespersons` and `/topsalesperson` and display it on the page
    
# sales_application
