import React, { PureComponent } from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Repartição", "Valor A", "Valor B"],
  ["Educação", 1000, 20],
  ["Transporte", 500, 120],
  ["Lazer", 230, 300],
  ["Saúde", 50, 100],
  ["Cartão de crédito", 100, 300],
  ["Alimentação", 100, 600]
];

const options = {
  title: "Gráfico de Linha",
  width: 750,
  height: 300,
  vAxis: {
    format: "currency",
    gridlines: { color: "transparent" }
  },
  curveType: "function"
};

export default class LineChart extends PureComponent {
  render() {
    return (
      <div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}
