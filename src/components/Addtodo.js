import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
function Addtodo(props) {
  const [toDo, setToDo] = useState({ do: "", date: "", isCompleted: false, id: "" });
  const add = (e) => {
    e.preventDefault();
    setToDo({ ...toDo, id: Date.now() });
    props.addToDoArray(toDo);
  };

  return (
    <Container className="rounded" style={{ backgroundColor: "#eee" }}>
      <Row className="pb-3">
        <Col>
          <h3 className="text-center mt-3">ADD TO DO</h3>
          <Form bg="warning" onSubmit={add}>
            <Row className="mb-3">
              <Col xs={12} lg={6}>
                <Form.Group controlId="formBasicTodo">
                  <Form.Label>Todo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter To do"
                    required
                    onChange={(e) => setToDo({ ...toDo, do: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} lg={6}>
                <Form.Group className="" controlId="formBasicDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" required onChange={(e) => setToDo({ ...toDo, date: e.target.value })} />
                </Form.Group>
              </Col>
            </Row>
            <Col xs={12} sm={{ span: 4, offset: 4 }}>
              <Button className="w-100" variant="secondary" type="submit">
                Add To Do
              </Button>
            </Col>
            <p>{JSON.stringify(toDo)}</p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Addtodo;
