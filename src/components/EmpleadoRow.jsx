import EmpleadoAvatar from "./EmpleadoAvatar";
import {ListGroup, Card, Badge} from 'react-bootstrap';

const EmpleadoRow = () => {
    return (
        <div>
            <ListGroup.Item as="li" active>
            <Card>
                <div className="d-flex">
            <EmpleadoAvatar></EmpleadoAvatar>

      <Card.Body>
        <Card.Title className="text-dark">Special title treatment</Card.Title>
        <Card.Text className="text-dark row">
         <h6>
        CEO <Badge bg="info">New</Badge>
      </h6>
        </Card.Text>
      </Card.Body>
                </div>
    </Card>
      </ListGroup.Item>
        </div>
    );
};

export default EmpleadoRow;