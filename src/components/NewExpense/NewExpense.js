import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
    const [state, setState] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setState(false);
    }

    function showForm() {
        setState(true);
    }

    function showButton() {
        setState(false);
    }

    const newExpenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={showButton} />;

    const showNewExpenseForm = state === false ? <button onClick={showForm}>Add New Expense</button> : newExpenseForm

    return (
        <div className="new-expense">
            {showNewExpenseForm}
        </div>
    )
}

export default NewExpense;
