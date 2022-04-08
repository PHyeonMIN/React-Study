import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };


    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />        
        </div>
    );
};

export default NewExpense;

// on이름 : 함수이며 컴포넌트 내에서 어떤 일이 일어날 때 결국 값을 촉발하는 함수임을 알려주기 위함!