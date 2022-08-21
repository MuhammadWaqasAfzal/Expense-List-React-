import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setdate] = useState("");
  const [amount, setAmount] = useState("");

  const addNewExpenseHandler = (event) => {
    event.preventDefault();

    if (title !== "" && amount !=="" && date !== "") {

      const expenseData = {
        title: title,
        price: amount,
        date: new Date(date),
      };
      // alert(expenseData.amount)
      props.onNewExpense(expenseData);
      setAmount("");
      setTitle("");
      setdate("");
    }
  };
  return (
    <form onSubmit={addNewExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={date}
            onChange={(event) => setdate(event.target.value)}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>

      <div className="new-expense__actions"></div>
    </form>
  );
};

export default ExpenseForm;
