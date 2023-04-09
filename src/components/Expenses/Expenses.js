import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  function filterAddHandler(newFilter) {
    setSelectedFilter(newFilter);
    // console.log(newFilter);
  }

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedFilter;
    // converting to string because state exists as string
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultFilter={selectedFilter}
        onAddFilter={filterAddHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredItems={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
