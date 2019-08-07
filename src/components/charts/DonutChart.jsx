import React, { PureComponent } from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Repartição", "Valor"],
  ["Educação", 2000],
  ["Transporte", 500],
  ["Lazer", 230],
  ["Saúde", 50],
  ["Cartão de crédito", 900],
  ["Alimentação", 260]
];
const options = {
  title: "Gráfico Donut",
  pieHole: 0.4,
  slices: {
    0: { color: "#8884d8" },
    1: { color: "#82ca9d" },
    2: { color: "#8884d8" },
    3: { color: "#82ca9d" },
    4: { color: "#8884d8" },
    5: { color: "#82ca9d" },
    6: { color: "#8884d8" }
  }
};
export default class DonutChart extends PureComponent {
  render() {
    return (
      <div>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}
