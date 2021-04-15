import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props){
    const expenseItems = props.expenses.map((item, index) => {
        return <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date}/>
    })

    return (
        <Card className="expenses">
            {expenseItems}
        </Card>
    )
}

export default Expenses;
