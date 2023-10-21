import "./ExpenseItem.css";
import ExpenceDate from "./ExpenseDate";

function ExpenseItem(props) {
  const productTitle = props.title;
  const productPrice = props.price;
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{productTitle}</h2>
        <div className="expense-item__prise">${productPrice}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
