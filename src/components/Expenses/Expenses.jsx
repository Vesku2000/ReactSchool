import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';



const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    
    const results = props.items.filter((items) => {
         return items.date.getFullYear().toString() === filteredYear;
    });


    

    return (

        <Card className="expenses">
            <ExpensesFilter
             selected={filteredYear} 
             onChangeFilter= {filterChangeHandler} />
             <ExpensesChart expenses={results} />

             <ExpenseList items={results} />
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