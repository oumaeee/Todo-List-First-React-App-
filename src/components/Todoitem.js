import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
function Todoitem() {
  return (
    <Col className="rounded " xs={12} xl={4} md={6} style={{ height: "110px" }}>
      <Card className="w-100 h-100 ">
        <Row className=" w-100 h-100 px-2 py-1 ">
          <Col className="mt-2" xs={2} style={{ alignSelf: "center" }}>
            <div
              className="ms-1 bg-info rounded text-center h4 text-white"
              style={{ width: "50px", height: "50px", lineHeight: "50px" }}
            >
              1
            </div>
          </Col>
          <Col xs={8} sm={9} className="ps-4 py-1 d-flex flex-column justify-content-between ms-auto">
            <Card.Title>
              <h6>Todo yang akan dilakukan ssss ss Todo yang akan </h6>
            </Card.Title>
            <Card.Text className="text-center">xx/yy/zzzz</Card.Text>
          </Col>
          <Col xs={1} className=" h-100 d-flex flex-column justify-content-around ">
            <Button variant="primary" className="h-25 w-100 d-flex justify-content-center align-items-center">
              <i class="bi bi-pencil-fill"></i>
            </Button>
            <Button variant="success" className="h-25 w-100 d-flex justify-content-center align-items-center">
              <i class="bi bi-back"></i>
            </Button>
            <Button variant="danger" className="h-25 w-100 d-flex justify-content-center align-items-center">
              <i class="bi bi-trash-fill"></i>
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default Todoitem;
