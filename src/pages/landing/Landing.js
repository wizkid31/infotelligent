import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
//svg import
import { ReactComponent as LogoText } from "../../assets/svgs/logo_text.svg";
const Landing = () => {
  const variables = [
    "Number of Sales Rep",
    "Number of Demos Per Reps",
    "Close Rate (%)",
    "Sales Cycle (in Months)",
    "Average Annual  Contract Value ($)",
    "Infotelligent Cost ($)",
    "Net Value ($)",
  ];

  const [data, setData] = useState({
    salesRep: "",
    demos: "",
    closeRate: "",
    salesCycle: "",
    aacv: "",
    infoCost: "",
  });

  const handleDataChange = (e, value) => {
    setData({
      ...data,
      [e.target.name]: Number(value) || Number(e.target.value),
      // net: calculateNet(),
    });
  };
  const calculateNet = () => {
    const net =
      data.salesRep *
      data.demos *
      (data.closeRate / 100) *
      (11 - data.salesCycle) *
      data.aacv;
    const res = Number(net);
    console.log(data.salesCycle);
    if (
      data.salesRep === "" &&
      data.demos === "" &&
      data.closeRate === "" &&
      data.salesCycle === "" &&
      data.aacv === "" &&
      data.infoCost === ""
    )
      return "";
    const ans = res.toFixed(0);
    return ans.toLocaleString("en-US");
  };
  const calculateTotalRoi = () => {
    if (
      data.salesRep === "" &&
      data.demos === "" &&
      data.closeRate === "" &&
      data.salesCycle === "" &&
      data.aacv === "" &&
      data.infoCost === ""
    )
      return "";
    if (data.infoCost === 0 || data.infoCost === "") return 0;
    const ans = calculateNet() / data.infoCost;
    const res = Number(ans);
    return res.toFixed(0);
  };
  return (
    <>
      <Container
        style={{ paddingTop: "40px", fontFamily: "PlusJakartaSans-Medium" }}
      >
        <Row style={{ textAlign: "right", marginBottom: 40 }}>
          <span>
            <LogoText />
          </span>
        </Row>

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
                paddingRight: 15,
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
                paddingRight: 15,
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
                paddingRight: 15,
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
                paddingRight: 15,
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
                paddingRight: 15,
              }}
              type="number"
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
                paddingRight: 15,
              }}
              type="number"
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
                borderRadius: 2,
                paddingRight: 15,
              }}
            >
              {calculateNet().toLocaleString("en-US")}
            </span>
          </Col>
        </Row>
        {/* -------------------Grid end-------------------*/}
      </Container>
    </>
  );
};

export default Landing;
