import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm() {
    const initialState = {
        title: '',
        amount: '',
        date: '',
    };

    const [state, setState] = useState(initialState);

    // Todo: There should be a way to make all 3 to one function
    function inputChangeHandler(event) {
        setState((prevState) => {
            return {
                ...prevState,
                inputType: event.target.value,
            };
        });
    }

    function titleChangeHandler(event) {
        setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            };
        });
    }

    function amountChangeHandler(event) {
        setState((prevState) => {
            return {
                ...prevState,
                amount: event.target.value,
            };
        });
    }

    function dateChangeHandler(event) {
        setState((prevState) => {
            return {
                ...prevState,
                date: event.target.value,
            };
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        const dataToSubmit = state;
        console.log(dataToSubmit);
        setState(initialState);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={state.title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={state.amount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={state.date}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
