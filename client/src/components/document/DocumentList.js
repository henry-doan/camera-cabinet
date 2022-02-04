import { ListGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Font } from '../../styles/documentStyles';

const DocumentList = ({ documents, gearId, kitId }) => (
        <>
				<Font>
				All Documents
				</Font>
					<Container>
						<ListGroup>
								{ documents.map( d =>
								<Link to={`/${gearId}/documents/${d.id}`}
											state={{ kitId: kitId }}>
										<img src={d.image} style={{ height: '200px'}}/>
								</Link>
								)}
						</ListGroup>
					</Container>
        </>
    )

export default DocumentList;