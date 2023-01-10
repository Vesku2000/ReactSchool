import React from 'react';
import ExpenseItem from './ExpenseItem';

import './Expense.css'

const Expense = (props) => {

    const items = props.expenses.map((expense, index) => (

        <ExpenseItem

                key={index}

                title = {expense.title}

                amount = {expense.amount}

                date = {expense.date}

        />

    ))

       



    return (

        <div className="expenses">

            {items}

        </div>

    )
}

export default Expense