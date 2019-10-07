import React, { PureComponent } from "react";
import { Chart } from "react-google-charts";
import { Grommet, Box } from "grommet";
import Typography from "@material-ui/core/Typography";

const data = [
  ["Mês", "Cash Input", "Cash Out"],
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
  colors: ["#8884d8", "#82ca9d"],
  vAxis: {
    format: "currency",
    gridlines: { color: "transparent" }
  }
};
export default class ColumnChart extends PureComponent {
  render() {
    return (
      <Grommet>
        <Box pad="small" elevation="medium">
          <Typography variant="h6">Column Chart</Typography>
          <Chart
            chartType="ColumnChart"
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
