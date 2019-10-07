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
        <Col xs={12} sm={12} md={3} lg={3}>
          <GeoChart />
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <DonutChart />
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <ColumnChart />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
          <PieChart />
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <LineChart />
        </Col>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <BarChart />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
