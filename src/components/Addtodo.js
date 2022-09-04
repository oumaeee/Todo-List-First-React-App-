import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
function Addtodo(props) {
  const [toDo, setToDo] = useState();
  const [date, setDate] = useState();
  const [id, setId] = useState();
  const add = (e) => {
    e.preventDefault();
    setId(Date.now());
  };
  const isMounted = useRef(false);
  const isMounted2 = useRef(false);
  useEffect(() => {
    if (isMounted2.current) {
      if (isMounted.current) {
        props.dispatch({ type: "addToDo", newToDo: { do: toDo, date: date, id: id, isCompleted: false } });
      } else {
        isMounted.current = true;
      }
    } else {
      isMounted2.current = true;
    }
    // props.dispatch({ type: "addToDo", newToDo: { do: toDo, date: date, id: id, isCompleted: false } });
  }, [id]);
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
                    onChange={(e) => setToDo(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} lg={6}>
                <Form.Group className="" controlId="formBasicDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" required onChange={(e) => setDate(e.target.value)} />
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
