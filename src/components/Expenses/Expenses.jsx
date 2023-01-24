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

    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter= {filterChangeHandler} />
            {results.map((expense) =>  (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />

            ))}
        </Card>

    )
}

export default Expenses