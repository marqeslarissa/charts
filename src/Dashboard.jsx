import React from "react";
import LineChart from "./components/charts/LineChart";
import DonutChart from "./components/charts/DonutChart";
import PieChart from "./components/charts/PieChart";
import GeoChart from "./components/charts/GeoChart";
import ColumnChart from "./components/charts/ColumnChart";
import BarChart from "./components/charts/BarChart";

export default function Dashboard() {
  return (
    <div className="App">
      <LineChart />
      <DonutChart />
      <PieChart />
      <GeoChart />
      <ColumnChart />
      <BarChart />
    </div>
  );
}
