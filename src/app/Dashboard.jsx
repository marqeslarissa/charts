import React from "react";
import LineChart from "../components/charts/LineChart";
import DonutChart from "../components/charts/DonutChart";
import PieChart from "../components/charts/PieChart";
import GeoChart from "../components/charts/GeoChart";
import ColumnChart from "../components/charts/ColumnChart";
import BarChart from "../components/charts/BarChart";
import { Container, Row, Col } from "reactstrap";
import "grid.css";

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col sm={8} className="chart__main">
          <GeoChart />
        </Col>
        <Col sm={4}>
          <DonutChart />
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <PieChart />
        </Col>
        <Col sm={3}>
          <LineChart />
        </Col>
        <Col sm={3}>
          <ColumnChart />
        </Col>
        <Col sm={3}>
          <BarChart />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <PieChart />
        </Col>
        <Col sm={4}>
          <ColumnChart />
        </Col>
      </Row>
    </Container>
  );
}
