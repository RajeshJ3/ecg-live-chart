import React, { useEffect, useState } from "react";
import "./App.css";
import Chart from "./Component/Chart";

const App = (props) => {
  const [data1, setData1] = useState([]);
  const [X, setX] = useState(0);

  // Example that simulates fetching remote data, and rendering it using a custom Chart component.
  useEffect(() => {
    const interval1 = setInterval(() => {
      const tempX = X + Math.random() * 10;
      setX(tempX);

      setData1([
        ...data1,
        {
          x: tempX,
          y: Math.random() * 100,
        },
      ]);
    }, 1);

    return () => {
      clearInterval(interval1);
    };
  });

  return (
    <div className="fill">
      <Chart id="chart" data={data1} />
    </div>
  );
};

export default App;
