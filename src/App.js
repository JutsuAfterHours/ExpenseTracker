import { useState } from 'react';
import Expense from './components/Expenses/Expense'
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {title:'Monthly Rent',
   amount:620.00,
   date:new Date(2023,0,3)
  },
  {
   title:'Phone Bill',
   amount:30.00,
   date:new Date(2023,0,3)
  },
  {
   title:'Internet Bill',
   amount:57.00,
   date:new Date(2023,0,3)
  }
]

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  // Stateful List
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense item={expenses}/>
    </div>
  );
}

export default App;
