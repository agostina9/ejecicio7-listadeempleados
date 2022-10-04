import { Container, Col, Row, Card } from "react-bootstrap";

const EmpleadoList = (props) => {
    return (
        <Container>
        <Card className="card bg">
          <Row className="no-gutters ">
            <Col md={5} lg={5}>
              <Card.Img variant="top" src={props.pic} alt="" className="img" />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>{props.fullName}</Card.Title>
                <Card.Text>{props.title}</Card.Text>
                <Card.Text className="text-white badge bg-primary">{props.department}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        </Container>
    );
};

export default EmpleadoList;