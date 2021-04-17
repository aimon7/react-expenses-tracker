import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [state, setState] = useState({
        title: props.title,
        date: props.date,
        amount: props.amount
    });

    function clickHandler() {
        setState({
            ...state,
            title: `Updated!`
        })
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={state.date}/>
            <div className="expense-item__description">
                <h2>{state.title}</h2>
                <div className="expense-item__price">{state.amount} €</div>
            </div>
            <button onClick={clickHandler}>Click</button>
        </Card>
    )
}

export default ExpenseItem
