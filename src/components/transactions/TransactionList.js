import dots from "../../assets/images/dots.svg";

const TransactionList = (props) => {
  const { date, name, amount, type, category } = props.data.transaction;

  const getDate = (date) => {
    return new Date(date).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  if (type === "income") {
    return (
      <tr>
        <td>{category.name}</td>
        <td>{name}</td>
        <td>{getDate(date)}</td>
        <td className="income-amount">
          <span> + </span> ${amount}
        </td>
        <td>
          <img src={dots} alt="dots" onClick={props.data.onClick} />
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{category.name}</td>
        <td>{name}</td>
        <td>{getDate(date)}</td>
        <td className="expense-amount">
          <span> - </span> ${amount}
        </td>
        <td>
          <img src={dots} alt="dots" onClick={props.data.onClick} />
        </td>
      </tr>
    );
  }
};
export default TransactionList;
