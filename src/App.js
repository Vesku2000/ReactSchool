
import Expense from './components/Expenses/Expenses';
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
      <Expense expenses={expenses}/>
      <h2 className='name'>Valtteri VAMK</h2>
      <h3 className='name'>e2101778</h3>
    </div>
  )
}

export default App;
