import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense =(props) =>{

    const [flag,setFlag] = useState('false')

    
    const onNewExpenseHanlder=(newExpenseData)=>{
        const newData = {
            ...newExpenseData,
            id : Math.random().toString()
        }
        props.onNewExpense(newData)
        setFlag("false")
    }
    
    const onAddNewHandler = () =>{
        setFlag("true")
    }

    const onCancelHandler = () =>{
        setFlag("false")
    }


    let content =  <ExpenseForm onNewExpense= {onNewExpenseHanlder} onCancel= {onCancelHandler}/>
    if(flag==='false')
        content =  <button onClick={onAddNewHandler} >Add New Expense</button>
        
    return (<div className='new-expense '>
       {content}
    </div> )
}

export default NewExpense