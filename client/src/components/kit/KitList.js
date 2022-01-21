import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const KitList = ({ kits }) => {
    return(
        <>
        <ListGroup>
            { kits.map( k =>
            <Link to={`/kits/${k.id}`}>
                <ListGroup.Item>{k.name}</ListGroup.Item>
            </Link>
            )}
        </ListGroup>
        </>
    	)
	}

export default KitList;