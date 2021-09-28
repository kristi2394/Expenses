import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    expenseDate: new Date(2021, 2, 28),
    expenseTitle: "Car Insurance",
    expenseAmount: 294.67,
  },
  {
    expenseDate: new Date(2021, 1, 30),
    expenseTitle: "Reantal car",
    expenseAmount: 294.65,
  },
  {
    expenseDate: new Date(1994, 1, 15),
    expenseTitle: "Birthday",
    expenseAmount: 27,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpensesData={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
