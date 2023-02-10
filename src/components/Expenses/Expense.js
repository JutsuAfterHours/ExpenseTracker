import { useState } from 'react'
import './Expense.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpense = props.item.filter(fexpense => {
        return fexpense.date.getFullYear().toString() === filteredYear
    })

    return(
        <Card className="expenses">
            <ExpensesFilter 
                selected = {filteredYear}  
                onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpense}/>
            <ExpensesList item={filteredExpense}/>
        </Card>
    )
}

export default Expense;