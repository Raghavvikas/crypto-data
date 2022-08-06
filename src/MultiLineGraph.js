import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Graph from "./GraphApi";

const MultiLineGraph = () => {
  const [data, setData] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
//   var arr = [];
//   useEffect(() => {
//     const arr = [];
//     // eslint-disable-next-line array-callback-return
//     Graph.map((current, index) => {
//       arr.push(current.price);
//       arr.push(current.datetime);
//     });
//   }, []);

  setData({
    labels: [],
    datasets: [
      {
        label: "Crypto Line Graph",
        // y-axis data plotting values
        data: Graph,
        fill: true,
        showLine: true,
        borderWidth: 4,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "green",
        responsive: true,
      },
    ],
  });

  return (
    <div>
      {/* <div key={id}>{name}</div> */}
      return (
      <Line data={{ data }} />
      );
    </div>
  );
};

export default MultiLineGraph;
