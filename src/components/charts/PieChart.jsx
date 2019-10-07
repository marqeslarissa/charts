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
  is3D: true
};

export default class PieChart extends PureComponent {
  render() {
    return (
      <Grommet>
        <Box pad="small" elevation="medium">
          <Typography variant="h6">Pie Chart</Typography>
          <Chart
            chartType="PieChart"
            width="auto"
            height="600px"
            data={data}
            options={options}
          />
        </Box>
      </Grommet>
    );
  }
}
