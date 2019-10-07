import React, { PureComponent } from "react";
import { Chart } from "react-google-charts";
import { Grommet, Box } from "grommet";
import Typography from "@material-ui/core/Typography";

const data = [
  ["Estado", "PIB (%)"],
  ["São Paulo", 40],
  ["Rio de Janeiro", 15],
  ["Paraná", 5],
  ["Minas Gerais", 10],
  ["Rio Grande do Sul", 8],
  ["Santa Catarina", 10],
  ["Ceará", 10],
  ["Pernambuco", 7],
  ["Distrito Federal", 0.1],
  ["Bahia", 7],
  ["Goiás", 10],
  ["Espírito Santo", 2],
  ["Alagoas", 2],
  ["Maranhão", 2],
  ["Paraíba", 2],
  ["Rio Grande do Norte", 2],
  ["Mato Grosso", 10],
  ["Sergipe", 3],
  ["Amazonas", 4],
  ["Acre", 0.5],
  ["Mato Grosso do Sul", 10],
  ["Pará", 2],
  ["Piauí", 2],
  ["Amapá", 2],
  ["Rondônia", 1],
  ["Roraima", 1],
  ["Tocantins", 1]
];

const options = {
  title: "Gráfico de Mapa",
  region: "BR",
  resolution: "provinces",
  colorAxis: { colors: ["#82ca9d", "black", "#8884d8"] }, //verde, preto, vermelho
  datalessRegionColor: "#fff", //rosa
  defaultColor: "#fff" //cinza
};

export default class GeoChart extends PureComponent {
  render() {
    return (
      <Grommet>
        <Box pad="small" elevation="medium">
          <Typography variant="h6">Geo Chart</Typography>
          <Typography variant="subtitle1">States - Brazil</Typography>
          <Chart
            chartType="GeoChart"
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
