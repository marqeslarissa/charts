import React, { PureComponent } from "react";
import { Chart } from "react-google-charts";
import { Grommet, Box } from "grommet";
import Typography from "@material-ui/core/Typography";

const data = [
  ["Repartição", "Valor A", "Valor B"],
  ["Education", 1000, 20],
  ["Transport", 500, 120],
  ["Recreation", 230, 300],
  ["Healthy", 50, 100],
  ["Credit card", 100, 300],
  ["Food", 100, 600]
];

const options = {
  colors: ["#8884d8", "#82ca9d"],
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
      <Grommet>
        <Box pad="small" elevation="medium">
          <Typography variant="h6">Line Chart</Typography>
          <Chart
            chartType="LineChart"
            width="auto"
            height="400px"
            data={data}
            options={options}
          />
        </Box>
      </Grommet>
    );
  }
}
