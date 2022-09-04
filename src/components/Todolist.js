import React from "react";
import { Container, Row } from "react-bootstrap";
import Todoitem from "./Todoitem";
function Todolist(props) {
  const toDos = props.toDos;

  return (
    <Container className="rounded p-1 mt-3" style={{ backgroundColor: "#eee", minHeight: "150px" }}>
      <h3 className="text-center my-3" onClick={() => console.log(props.toDos)}>
        {props.statusTodo} TO DO
      </h3>
      <Row className="px-2">
        {toDos.map((toDo, i) => (
          <Todoitem data={toDo} no={i + 1} key={toDo.id} />
        ))}
      </Row>
    </Container>
  );
}

export default Todolist;
