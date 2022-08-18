import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Addtodo() {
  return (
    <Container className="rounded" style={{ backgroundColor: "#eee" }}>
      <Row className="pb-3">
        <Col>
          <h3 className="text-center mt-3">ADD TO DO</h3>
          <Form bg="warning">
            <Row className="mb-3">
              <Col xs={12} lg={6}>
                <Form.Group className="" controlId="formBasicTodo">
                  <Form.Label>Todo</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col xs={12} lg={6}>
                <Form.Group className="" controlId="formBasicDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Col xs={12} sm={{ span: 4, offset: 4 }}>
              <Button className="w-100" variant="secondary" type="submit">
                Add Todo
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Addtodo;
