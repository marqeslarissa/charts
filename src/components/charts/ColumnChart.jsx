import React, { PureComponent } from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Mês", "Entrada", "Saída"],
  ["jan", 2500, 1000],
  ["fev", 1000, 500],
  ["mar", 3000, 1300],
  ["abr", 1500, 1700],
  ["mai", 5000, 2250],
  ["jun", 3567, 3000],
  ["jul", 3452, 1468],
  ["ago", 1833, 5250],
  ["set", 1800, 1000],
  ["out", 1800, 1000],
  ["nov", 3569, 1500],
  ["dez", 3000, 1740]
];
const options = {
  title: "Gráfico de Colunas",
  vAxis: {
    format: "currency",
    gridlines: { color: "transparent" }
  }
};
export default class ColumnChart extends PureComponent {
  render() {
    return (
      <div>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}
