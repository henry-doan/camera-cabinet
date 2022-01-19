import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GearList = ({ gears }) => {
    return(
        <>
        <ListGroup>
            { gears.map( g =>
                <Link to={`/gears/${g.id}`}>
                    <ListGroup.Item>{g.name}</ListGroup.Item>
                </Link>
            )}
        </ListGroup>
     </>
    )
}

export default GearList;