import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
  }
// we can use if statements like this, if the total thing that will be returned is to be changed based on a condition

  return (
    <div className="expenses-list">
      {props.filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
      ))}
    </div>
  );
}

export default ExpensesList;
