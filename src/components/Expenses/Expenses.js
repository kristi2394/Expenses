import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2020");
  const onFiltering = (FilteredYear) => {
    setYear(FilteredYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter expensesSelect={year} onChangeFilter={onFiltering} />
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.expenseTitle}
          date={expense.expenseDate}
          amount={expense.expenseAmount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
