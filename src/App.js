import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';


const dummmy_expenses = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 17.99,
    date: new Date("2019-01-01"),
  },
  {
    id: 'e2',
    title: 'TV',
    amount: 399.99,
    date: new Date("2021-01-04"),
  },
  {
    id: 'e3',
    title: 'Laptop',
    amount: 1097.99,
    date: new Date("2022-02-01"),
  },
  {
    id: 'e4',
    title: 'Car',
    amount: 17000.99,
    date: new Date("2021-01-01"),
  },
  {
    id: 'e5',
    title: 'Playstation 5',
    amount: 499.99,
    date: new Date("2022-01-01"),
  },
  {
    id: 'e6',
    title: 'Xbox 5',
    amount: 299.99,
    date: new Date("2020-01-01"),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(dummmy_expenses);

  const addExpenseHandler = expense => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    })
  };

  return(
    
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      <h2 className='name'>Valtteri VAMK</h2>
      <h3 className='name'>e2101778</h3>
    </div>
  )
}

export default App;
