import React, { useContext } from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { DispatchContext } from "../App";
function Todoitem(props) {
  const dispatchContext = useContext(DispatchContext);
  return (
    <Col className="rounded mb-3 " xs={12} xl={4} md={6} style={{ height: "110px" }}>
      <Card className="w-100 h-100 shadow">
        <Row className=" w-100 h-100 px-2 py-1 ">
          <Col className="mt-2" xs={2} style={{ alignSelf: "center" }}>
            <div
              className="ms-1 bg-info rounded text-center h4 text-white"
              style={{ width: "50px", height: "50px", lineHeight: "50px" }}
            >
              {props.no}
            </div>
          </Col>
          <Col xs={8} sm={9} className="ps-4 py-1 d-flex flex-column justify-content-between ms-auto">
            <Card.Title>
              <h6>
                {props.data.do} {props.data.id}
              </h6>
            </Card.Title>
            <Card.Text className="text-center">{props.data.date}</Card.Text>
          </Col>
          <Col xs={1} className=" h-100 d-flex flex-column justify-content-around ">
            {!props.data.isCompleted && (
              <Button variant="primary" className="h-25 w-100 d-flex justify-content-center align-items-center">
                <i className="bi bi-pencil-fill"></i>
              </Button>
            )}
            {!props.data.isCompleted && (
              <Button
                onClick={() => dispatchContext.dispatch({ type: "change", id: props.data.id })}
                variant="success"
                className="h-25 w-100 d-flex justify-content-center align-items-center"
              >
                <i className="bi bi-check"></i>
              </Button>
            )}

            <Button
              onClick={() => dispatchContext.dispatch({ type: "delete", id: props.data.id })}
              variant="danger"
              className="h-25 w-100 d-flex justify-content-center align-items-center"
            >
              <i className="bi bi-trash-fill"></i>
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default Todoitem;
