import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';



const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const items = props.expenses.map((expense, index) => (
        <Card className="expense-items">
        <ExpenseItem
         
                key={index}

                title = {expense.title}

                amount = {expense.amount}

                date = {expense.date}

        />
        </Card>

    ))

       



    return (

        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {items}

        </div>

    )
}

export default Expenses