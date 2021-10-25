import { useState, useEffect } from "react";
import TopSalesComp from "./component/TopsSalesComp";
import SalesComp from "./component/SalesComp";
import "./App.css";

function App() {
  const [topSales, setTopsales] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    (async () => {
      const responseTop = await fetch("http://localhost:5000/topsalesperson");
      const topSalesTemp = await responseTop.json();
      setTopsales(topSalesTemp);
      const responsePersons = await fetch("http://localhost:5000/salespeople");
      const salesTemp = await responsePersons.json();
      setSales(salesTemp);
    })();
  }, []);

  return (
    <div className="App">
      <h1>504 Frontend</h1>
      {topSales.data ? <TopSalesComp topSales={topSales.data} /> : "Loading..."}

      {sales.length !== 0 ? (
        <SalesComp sales={sales} />
      ) : (
        <p className="loading-message">{sales.message}</p>
      )}
    </div>
  );
}

export default App;
