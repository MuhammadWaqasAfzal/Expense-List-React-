import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("All");
  const filterChangeHandler = (selectedFilter) => {
    setFilterYear(selectedFilter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (filterYear === "All") 
      return expense;
    return expense.date.getFullYear().toString() === filterYear;
  });

 
  return (
    <li>


    <Card className="expenses">

      <ExpenseChart expenses = {filteredExpenses}/>
      <ExpensesFilter
        selectedYear={filterYear}
        onFilterChange={filterChangeHandler}
      />
    
      <ExpensesList expenses = {filteredExpenses} />
    </Card>
    </li>
  );
}

export default Expenses;
