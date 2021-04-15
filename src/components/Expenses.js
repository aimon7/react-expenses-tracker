import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props){
    const expenseItems = props.expenses.map((item, index) => {
        return <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date}/>
    })

    return (
        <div className="expenses">
            {expenseItems}
        </div>
    )
}

export default Expenses;
