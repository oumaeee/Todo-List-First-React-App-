import React from "react";
import { Container, Row } from "react-bootstrap";
import Todoitem from "./Todoitem";
function Todolist(props) {
  return (
    <Container className="rounded p-1 mt-3" style={{ backgroundColor: "#eee", minHeight: "150px" }}>
      <h3 className="text-center my-3">{props.statusTodo} TO DO</h3>
      <Row className="px-2">
        <Todoitem />
        <Todoitem />
        <Todoitem />
      </Row>
    </Container>
  );
}

export default Todolist;
