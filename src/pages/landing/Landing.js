import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
//svg import
import { ReactComponent as LogoText } from "../../assets/svgs/logo_text.svg";
const Landing = () => {
  const variables = [
    "Number of Sales Rep",
    "Number of Demos Per Representative",
    "Close Rate (%)",
    "Sales Cycle (in Months)",
    "Average Annual  Contract Value ($)",
    "Infotelligent Cost ($)",
    "Net Value ($)",
  ];

  const [data, setData] = useState({
    salesRep: 2,
    demos: 12,
    closeRate: 20,
    salesCycle: 3,
    aacv: 25000,
    infoCost: 7200,
  });
  const [net, setNet] = useState(0);
  const [totalROI, setTotalRoi] = useState(0);

  const handleDataChange = (e, value) => {
    setData({
      ...data,
      [e.target.name]: Number(value) || Number(e.target.value),
      net: calculateNet(),
      roi: calculateTotalRoi(),
    });
    console.log(e.target.value);
  };
  const calculateNet = () => {
    const net =
      data.salesRep *
      data.demos *
      data.closeRate *
      (11 - data.salesCycle) *
      data.aacv;
    const res = Number(net);
    return setNet(res);
  };
  const calculateTotalRoi = () => {
    const netValue =
      (data.salesRep *
        data.demos *
        data.closeRate *
        (11 - data.salesCycle) *
        data.aacv) /
      data.infoCost;
    const ans = Number(netValue);

    return setTotalRoi(ans);
  };
  return (
    <>
      <Container style={{ paddingTop: "40px" }}>
        <Row style={{ textAlign: "right", marginBottom: 40 }}>
          <span>
            <LogoText />
          </span>
        </Row>
        {/*-------------First Row------------------ */}
        <Row
          style={{
            // fontFamily: "PlusJakartaSans-Regular",
            backgroundColor: "#F0F5FD",
            padding: "18px 0px 18px 36px",
            borderRadius: 2,
            marginBottom: 40,
          }}
        >
          <Row style={{ marginBottom: 10 }}>
            <h4
              style={{
                color: "#1c3b71",
                fontSize: 20,
              }}
            >
              ROI Calculator
            </h4>
          </Row>
          <Row
            style={{
              // fontFamily: "PlusJakartaSans-Regular",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.1)",
              borderRadius: 2,
              paddingTop: "9px",
              paddingBottom: "9px",
              fontSize: 18,
            }}
          >
            <Col style={{ color: "#616680" }}>Total ROI</Col>
            <Col style={{ textAlign: "right", color: "#1c3b71", fontSize: 20 }}>
              {totalROI}
            </Col>
          </Row>
        </Row>
        {/*-------------First Row End------------------ */}

        <Row
          style={{
            padding: "0 30px 20px 30px",
            fontSize: 18,
            color: "#616680",
          }}
        >
          Please Enter Details here:
        </Row>

        {/* ---------------Grid--------------------------- */}

        {/* {variables.map((variable, id) => {
          return (
            <Row
              
              style={{
                backgroundColor: "#F0F5FD",
                marginBottom: 5,
                borderRadius: 2,
                padding: "9px 18px",
              }}
            >
              <Col style={{ color: "#616680" }}>{variable.name}</Col>
              <Col>
                <input onChange={handleInputChange}name={id} value={state} />
              </Col>
            </Row>
          );
        })} */}
        <Row
          style={{
            backgroundColor: "#F0F5FD",
            marginBottom: 5,
            borderRadius: 4,
            padding: "7px 0px",
          }}
        >
          <Col style={{ color: "#616680", paddingLeft: 30, paddingTop: 3.5 }}>
            {variables[0]}
          </Col>
          <Col>
            <input
              type="number"
              name="salesRep"
              style={{
                textAlign: "right",
                border: "none",
                float: "right",
                fontSize: 20,
                color: "#1c3b71",
              }}
              value={data.salesRep}
              onChange={handleDataChange}
            />
          </Col>
        </Row>

        <Row
          style={{
            backgroundColor: "#F6f9fe",
            marginBottom: 5,
            borderRadius: 4,
            padding: "7px 0px",
          }}
        >
          <Col style={{ color: "#616680", paddingLeft: 30, paddingTop: 3.5 }}>
            {variables[1]}
          </Col>
          <Col>
            <input
              type="number"
              style={{
                textAlign: "right",
                border: "none",
                float: "right",
                fontSize: 20,
                color: "#1c3b71",
              }}
              name="demos"
              value={data.demos}
              onChange={handleDataChange}
            />
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#F0F5FD",
            marginBottom: 5,
            borderRadius: 4,
            padding: "7px 0px",
          }}
        >
          <Col style={{ color: "#616680", paddingLeft: 30, paddingTop: 3.5 }}>
            {variables[2]}
          </Col>
          <Col>
            <input
              type="number"
              style={{
                textAlign: "right",
                border: "none",
                float: "right",
                fontSize: 20,
                color: "#1c3b71",
              }}
              name="closeRate"
              value={data.closeRate}
              onChange={handleDataChange}
            />
          </Col>
        </Row>

        <Row
          style={{
            backgroundColor: "#F6f9fe",
            marginBottom: 5,
            borderRadius: 4,
            padding: "7px 0px",
          }}
        >
          <Col style={{ color: "#616680", paddingLeft: 30, paddingTop: 3.5 }}>
            {variables[3]}
          </Col>
          <Col>
            <input
              style={{
                textAlign: "right",
                border: "none",
                float: "right",
                fontSize: 20,
                color: "#1c3b71",
              }}
              type="number"
              name="salesCycle"
              value={data.salesCycle}
              onChange={handleDataChange}
            />
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#F0F5FD",
            marginBottom: 5,
            borderRadius: 4,
            padding: "7px 0px",
          }}
        >
          <Col style={{ color: "#616680", paddingLeft: 30, paddingTop: 3.5 }}>
            {variables[4]}
          </Col>
          <Col>
            <input
              style={{
                textAlign: "right",
                border: "none",
                float: "right",
                fontSize: 20,
                color: "#1c3b71",
              }}
              name="aacv"
              value={data.aacv}
              onChange={handleDataChange}
            />
          </Col>
        </Row>

        <Row
          style={{
            backgroundColor: "#F6f9fe",
            marginBottom: 5,
            borderRadius: 4,
            padding: "7px 0px",
          }}
        >
          <Col style={{ color: "#616680", paddingLeft: 30, paddingTop: 3.5 }}>
            {variables[5]}
          </Col>
          <Col>
            <input
              style={{
                textAlign: "right",
                border: "none",
                float: "right",
                fontSize: 20,
                color: "#1c3b71",
              }}
              name="infoCost"
              value={data.infoCost}
              onChange={handleDataChange}
            />
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#616680",
            marginBottom: 5,
            borderRadius: 2,
            padding: "7px 0px",
            fontSize: 20,
          }}
        >
          <Col style={{ color: "#fff", paddingLeft: 30, paddingTop: 3.5 }}>
            {variables[6]}
          </Col>
          <Col>
            <span
              style={{
                display: "inline-block",
                width: 218,
                height: 35,
                backgroundColor: "#ffffff",
                float: "right",
                textAlign: "right",
                color: "#1c3b71",
              }}
            >
              {net}
            </span>
          </Col>
        </Row>
        {/* -------------------Grid end-------------------*/}
      </Container>
    </>
  );
};

export default Landing;
