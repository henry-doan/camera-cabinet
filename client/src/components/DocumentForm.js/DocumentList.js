import { ListGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DocumentList = ({ documents, gearId, kitId }) => (
        <>
				<h1>All Documents</h1>
					<Container>
						<ListGroup>
								{ documents.map( d =>
								<Link to={`/${gearId}/documents/${d.id}`}
											state={{ kitId: kitId }}>
										{d.image}
								</Link>
								)}
						</ListGroup>
					</Container>
        </>
    )

export default DocumentList;