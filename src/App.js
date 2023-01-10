import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App(){

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet paper',
      amount: 17.99,
      date: new Date("2023-01-01"),
    },
    {
      id: 'e2',
      title: 'TV',
      amount: 399.99,
      date: new Date("2023-01-04"),
    },
    {
      id: 'e3',
      title: 'Laptop',
      amount: 1097.99,
      date: new Date("2023-02-01"),
    },
    {
      id: 'e4',
      title: 'Car',
      amount: 17000.99,
      date: new Date("2023-01-01"),
    },
  ]

  return(
    
    <div>
      <ExpenseItem 
      title = {expenses[0].title}
      amount = {expenses[0].amount}
      date = {expenses[0].date}
      />
      <ExpenseItem 
      title = {expenses[1].title}
      amount = {expenses[1].amount}
      date = {expenses[1].date}
      />
      <ExpenseItem 
      title = {expenses[2].title}
      amount = {expenses[2].amount}
      date = {expenses[2].date}
      />
      <ExpenseItem 
      title = {expenses[3].title}
      amount = {expenses[3].amount}
      date = {expenses[3].date}
      />
      <h2 className='name'>Valtteri VAMK</h2>
    </div>
  )
}

export default App;
