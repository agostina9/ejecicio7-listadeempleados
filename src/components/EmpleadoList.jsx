import EmpleadoRow from "./EmpleadoRow";
import ListGroup from 'react-bootstrap/ListGroup';

const EmpleadoList = () => {
    return (
        <div>
             <ListGroup as="ul">
            <EmpleadoRow></EmpleadoRow>
      </ListGroup>
        </div>
    );
};

export default EmpleadoList;