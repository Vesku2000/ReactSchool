import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';



const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    
    const results = props.items.filter((items) => {
         return items.date.getFullYear().toString() === filteredYear;
    });
    console.log(props.items)
    console.log(results);
    console.log(filteredYear);

    let expensesContent = <p>No expenses found.</p>;

    if(results.length > 0){
        expensesContent = results.map((expense) => (
            <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
        ))
    }

    return (

        <Card className="expenses">
            <ExpensesFilter
             selected={filteredYear} 
             onChangeFilter= {filterChangeHandler} />
             {expensesContent}
             {/* 
                {results.length === 0 && <p>no expenses found.</p>}
                {results.length > 0 && 
                results.map((expense) => (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                ))}
            


             {results.length === 0 ? (
                 <p>No expenses found.</p>
             ) :(
                results.map((expense) =>  (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                ))
             )}

             */}  
             
            
        </Card>

    )
}

export default Expenses