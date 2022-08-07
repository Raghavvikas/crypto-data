import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Graph from "./GraphApi";
import * as _ from "lodash";
import Chart from "chart.js/auto";

let arr1 = [];
let arr2 = [];

Graph.forEach((elem) => {
  arr1.push(parseInt(elem.datetime) % 100);
  // console.log("arr1: " + arr1);
  arr2.push(elem.price.toFixed());
  // console.log("arr2: " + arr2);
});

const MultiLineGraph = ({ id, name }) => {
  const [data, setData] = useState();
  const[newName, setNewName]= useState(name);
  Chart.register(CategoryScale);

  useEffect(() => {
    setInterval(() => {
      setData({
        labels: Graph.map((ele) => ele.price.toFixed(0)),
        datasets: [
          {
            label: "Crypto Line Graph",
            // y-axis data plotting values
            data: Graph.map((ele) => parseInt(ele.datetime) % 100),
            fill: true,
            showLine: true,
            borderWidth: 4,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "green",
            responsive: true,
          },
        ],
      });
    }, 1000);
  }, [data]);

  return (
    <>
      <div key={id}>{newName}</div>
      <div>{!_.isEmpty(data) && <Line data={data} />}</div>
    </>
  );
};

export default MultiLineGraph;
