import React, { PureComponent } from "react";
import { Chart } from "react-google-charts";
import { Grommet, Box } from "grommet";
import Typography from "@material-ui/core/Typography";

const data = [
  ["Repartição", "Valor"],
  ["Education", 2000],
  ["Transport", 500],
  ["Recreation", 230],
  ["Healthy", 50],
  ["Credit card", 900],
  ["Food", 260]
];
const options = {
  colors: ["#8884d8", "#82ca9d"],
  hAxis: {
    format: "currency",
    gridlines: { color: "transparent" }
  },
  legend: "none"
};
export default class BarChart extends PureComponent {
  render() {
    return (
      <Grommet>
        <Box pad="small" elevation="medium">
          <Typography variant="h6">Bar Chart</Typography>
          <Chart
            chartType="BarChart"
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
