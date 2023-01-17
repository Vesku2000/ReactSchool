import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';



const Expense = (props) => {

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

            {items}

        </div>

    )
}

export default Expense