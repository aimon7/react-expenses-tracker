import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    const initialState = {
        year: '2021'
    };
    const [state, setState] = useState(initialState);

    function onYearChangeHandler(year){
        setState((prevState) => {
            return {
                ...prevState,
                year: year,
            };
        });
    }

    const expensesByYear = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === state.year;
    });

    const expenseItems = expensesByYear.map((item) => {
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
    });

    return (
        <Card className="expenses">
            <ExpensesFilter defaultValue={state.year} onChangeYear={onYearChangeHandler}/>
            {expenseItems}
        </Card>
    )
}

export default Expenses;
