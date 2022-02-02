import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DocumentList = ({ documents }) => {
    return(
        <>
        <ListGroup>
            { documents.map( d =>
            <Link to={`/documents/${d.id}`}>
                <ListGroup.Item>{d.name}</ListGroup.Item>
                </Link>
                )}
  
 
</ListGroup>
        </>
    )
}

export default DocumentList;