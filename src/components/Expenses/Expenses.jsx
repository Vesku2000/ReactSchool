import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css'

const Expense = (props) => {

    const items = props.expenses.map((expense, index) => (
        <Card>
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

            {items}

        </div>

    )
}

export default Expense