import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  // to calc maxValue we need to go through all the months and find the maximum value
  // we can use Math.max() to find a max value, but it needs numbers(comma separated) as arguments, but what we have is array of objects (i.e chartDataPoints)
  // we are interested in just one property of that object
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // we MAP the dataPoints from objects to numbers(array of 12 dataPoint.values for the 12 months stored in const dataPointValues) as above

  // array to numbers, by pulling them out using spread operator
  const totalMaximum = Math.max(...dataPointValues);
  // so this Math.max receives 12 arguments which are the 12 values for the months

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
