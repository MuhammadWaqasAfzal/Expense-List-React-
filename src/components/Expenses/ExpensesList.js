import ExpenseItems from "./ExpenseItems";
import './ExpensesList.css'
function ExpensesList(props) {

  if(props.expenses.length === 0 ) {
  return <h2 className="expenses-list__fallback">No Data Found</h2>;
  }

 
  return (
    <ul className="expenses-list">
      {/* //alternative syntax */}
      {/* 1. */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        filteredExpenses.map((e) => <ExpenseItems expense={e} key={e.id} />)
      )} */}
      {/* 2. */}
      {/* {filteredExpenses.length === 0 && <p>No Data Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((e) => <ExpenseItems expense={e} key={e.id} />)} */}
      {
         props.expenses.map((e) => (
          <ExpenseItems expense={e} key={e.id} />
        ))
      }
    </ul>
  );
}

export default ExpensesList;
