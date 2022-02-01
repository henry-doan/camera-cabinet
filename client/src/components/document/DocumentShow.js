import { useState, useEffect } from 'react';
import { DocumentConsumer } from '../../providers/DocumentProvider';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { Card, Button, Modal } from 'react-bootstrap';
import DocumentForm from './DocumentForm';

const DocumentShow = ({ updateDocument, deleteDocument }) => {
    const params = useParams()
    const { state } = useLocation()

    const [document, setDocument] = useState({ bought: '', image: ''})
    const [editing, setEditing] = useState(false)

    useEffect( () => {
        axios.get(`/api/gears/${params.gearId}/documents/${params.documentId}`)
        .then( res => setDocument(res.data))
        .catch(err => console.log(err))
    }, [])

    const { bought, image} = document
    return (
        <>
        {/* <Card>
            <Card.Header as="h5">Document</Card.Header>
            <Card.Body>
                <Card.Title>{purchased}</Card.Title>
                <Card.Text>
                    {image}
                </Card.Text>
                <Button variant="primary">Edit</Button>
                <Button variant="primary">Delete</Button>
            </Card.Body>
        </Card> */}
          <Card>
						<Card.Header as="h5">Document</Card.Header>
						<Card.Body>
							<Card.Title>{bought}</Card.Title>
							<Card.Text>
								{image}
							</Card.Text>
							<Button variant="primary" onClick={() => setEditing(true)}>Edit</Button>
							<Button variant="primary" onClick={() => deleteDocument(state.kitId, params.gearId, params.documentId)}>Delete</Button>

							<Modal show={editing} onHide={() => setEditing(false)}>
								<Modal.Header closeButton>
									<Modal.Title>Edit Document</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<DocumentForm 
										updateDocument={updateDocument}
										{...document}
										id={params.documentId}
										gearId={params.gearId}
										setEditing={setEditing}
										kitId={state.kitId}
									/>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={() => setEditing(false)}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</Card.Body>	
					</Card>
        </>
  )
}

const ConnectedDocumentShow = (props) => (
    <DocumentConsumer>
        { value => <DocumentShow {...props} {...value} />}
    </DocumentConsumer>
)

export default ConnectedDocumentShow;