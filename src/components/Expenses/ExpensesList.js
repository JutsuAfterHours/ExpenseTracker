import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpensesList = props => {

    if(props.item.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
    
    if(props.item.length === 0 ){return(
        <ul className="expenses-list"></ul>
    )
    }

    return (
    <ul className="expenses-list">
        {props.item.length === 0 ? (
        <p>No Expenses Found</p>) : (
            props.item.map((expense) => (
        <ExpenseItem 
            key={expense.id} // To uniquely identify the items
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />)
        ))}
    </ul>)
}

export default ExpensesList;