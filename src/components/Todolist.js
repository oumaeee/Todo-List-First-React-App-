import React from "react";
import { Container, Row } from "react-bootstrap";
import Todoitem from "./Todoitem";
function Todolist(props) {
  const toDos = props.toDos;
  const list = toDos.map((toDo, i) => <Todoitem data={toDo} key={toDo.id} no={i + 1} />);
  return (
    <Container className="rounded p-1 mt-3" style={{ backgroundColor: "#eee", minHeight: "150px" }}>
      <h3 className="text-center my-3" onClick={() => console.log(props.toDos)}>
        {props.statusTodo} TO DO
      </h3>
      <Row className="px-2">{list}</Row>
    </Container>
  );
}

export default Todolist;
