function TopSalesComp(props) {
 
    return (
      <div className="top-sales">
        <p className="header-title">Top Salesperson:</p>
        <h2 className="name-title">
          {props.topSales.firstName} {props.topSales.lastName}
        </h2>
        <p className="sales-nums">Sales: {props.topSales.salesInEuro}</p>
        <p className="sales-nums">Bonus: {props.topSales.bonusInEuro}</p>
      </div>
    );
  }


export default TopSalesComp;
