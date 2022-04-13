import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filter : 새로운 list 반환
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  /* 
  // lean JSX 스니펫
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  */
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

// 조건부 내용 출력
// 1. 삼항연산자 { 조건 ? 참 : 거짓 }
// 2. End operator { 조건 && 참}
// {filteredExpenses.length === 0 && <p>No expenses found.</p>}
//         {filteredExpenses.length >0 &&  (
//           filteredExpenses.map((expense, index) => (
//             <ExpenseItem
//               key={expense.id}
//               title={expense.title}
//               amount={expense.amount}
//               date={expense.date}
//             />
//           ))
//         )}
// 3. lean JSX 스니펫 
//      return전 r간단하고 역동적인 수식 추가