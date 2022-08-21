import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'
import {useState} from 'react'

function App() {

         
  const INITIAL_EXPENSE = [
    {id : "e1" , title : "Car Insurance" , price : 13 , date : new Date(2022,1,12)},
    {id : "e2" , title : "Toilet Paper" , price : 2 , date : new Date(2020,5,22)},
    {id : "e3" , title : "Electricity Bill" , price : 22 , date : new Date(2021,9,26)},
    {id : "e4" , title : "Biscuits" , price : 18 , date : new Date(2020,11,12)}
  ]

  const [expense,setExpense] = useState(INITIAL_EXPENSE)

  const onNewExpenseHanlder=(newExpenseData)=>{
    setExpense(previosExpense => {
      return [newExpenseData,...previosExpense]
    })

    
}
  return (
    <div>
      <NewExpense onNewExpense= {onNewExpenseHanlder}/>
      <Expenses expenses = {expense}/>
     </div>
   
   
  );
}

export default App;
