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

    function onYearChange(year){
        setState((prevState) => {
            return {
                ...prevState,
                year: year,
            };
        });
    };

    const expenseItems = props.expenses.map((item, index) => {
        return <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date}/>
    });

    return (
        <Card className="expenses">
            <ExpensesFilter defaultValue={state.year} onChangeYear={onYearChange}/>
            {expenseItems}
        </Card>
    )
}

export default Expenses;
