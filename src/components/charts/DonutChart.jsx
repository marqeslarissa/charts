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
      <Grommet>
        <Box pad="small" elevation="medium">
          <Typography variant="h6">Donut Chart</Typography>
          <Chart
            chartType="PieChart"
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
