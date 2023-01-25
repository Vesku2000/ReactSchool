import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [show, setShow] = useState(false);
    const toggleForm = () => {
        setShow(hidden => !hidden)
        console.log(show)
    }

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            {show ? <button onClick={toggleForm} >add new Expense</button>
             : 
             <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} 
            ToggleForm={toggleForm}/> }
            
            
        </div>
    );
};

export default NewExpense;