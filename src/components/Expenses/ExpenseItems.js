import React,{ useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";
function ExpenseItems(props) {

  useState()
  const [title,setTitle] = useState(props.expense.title)
 

  const eventHandler = () => {};
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
