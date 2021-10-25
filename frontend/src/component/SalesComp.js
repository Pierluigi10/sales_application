function SalesComp(props) {
  console.log("Sales: ", props.sales);

  return (
    <div className="sales">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {props.sales.data.map((elem, index) => {
          return (
            <tr key={`${index}${elem.id}`}>
              <td>{elem.firstName}</td>
              <td>{elem.lastName}</td>
              <td>{elem.salesInEuro}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default SalesComp;
