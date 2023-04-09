import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // go through filteredExpenses of a selected year, then sum up all expenses for a month and then assign that value to respective dataPoint(month)
  // using for of loop
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //viz 0 to 11 => January => 0
    // we can use this month(as an index as chartDataPoints[expenseMonth]) to pick the right data point coz Jan has index 0, in the above array of datapoints too

    chartDataPoints[expenseMonth].value += expense.amount;
    // here we update the value of a dataPoint through its index by adding the expense.amount to it
  }
  // therefore, after this for loop, the value of each data point won't be 0 anymore, but the sum of expenses for that month

  return (
    // now we pass the updated chartDataPoints to our Chart
    <Chart dataPoints={chartDataPoints} />
  );
}

export default ExpensesChart;
