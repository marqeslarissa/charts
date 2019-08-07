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
  title: "Gráfico de Barra",
  hAxis: {
    format: "currency",
    gridlines: { color: "transparent" }
  },
  legend: "none"
};
export default class BarChart extends PureComponent {
  render() {
    return (
      <div>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}
