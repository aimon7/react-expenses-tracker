import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const initialState = {
        year: '2021'
    };
    const [state, setState] = useState(initialState);

    function onYearChangeHandler(year) {
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

    return (
        <Card className="expenses">
            <ExpensesFilter defaultValue={state.year} onChangeYear={onYearChangeHandler}/>
            <ExpensesChart expenses={expensesByYear} />
            <ExpensesList expenses={expensesByYear} />
        </Card>
    )
}

export default Expenses;
