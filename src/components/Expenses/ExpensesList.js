import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

function ExpensesList(props) {
    let expensesContent = <li><h2 className="expenses-list__fallback">No expenses found for this year</h2></li>;
    if (props.expenses.length > 0)
        expensesContent = props.expenses.map((item) => {
            return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
        });

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
}

export default ExpensesList;
