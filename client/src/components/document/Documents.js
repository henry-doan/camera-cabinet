import { useEffect, useState } from 'react';
import { DocumentConsumer } from '../../providers/DocumentProvider';
import DocumentList from './DocumentList';
import { Button, Modal } from 'react-bootstrap';
import DocumentForm from './DocumentForm';
import { useParams } from 'react-router-dom';

const Documents = ({ documents, getAllDocuments, addDocument, gearId }) => {
    const [adding, setAdd] = useState(false)

    const params = useParams()

    useEffect( () => {
        getAllDocuments(gearId)
    }, [])

    return (
        // <>
        // <h1>Warrenties & Insurance</h1>
        // { adding ?
        //     <>
        //     <DocumentForm addDocument={addDocument} />
        //     <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>    
        //     </>
        //     :
        //     <Button variant="info" onClick={() => setAdding(true)}>+</Button>
        // }
        // <DocumentList documents={documents} />
        // </>
            <>
            <br />
            <Button variant="outline-light" onClick={() => setAdd(true)}>
              Add Document
            </Button>
            <br />
      
            <Modal show={adding} onHide={() => setAdd(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Add Document</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <DocumentForm 
                  kitId={params.kitId}
                  addDocument={addDocument}
                  gearId={gearId}
                  setAdd={setAdd}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-light" onClick={() => setAdd(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <DocumentList 
              kitId={params.kitId}
              documents={documents}
              gearId={gearId}
            />
          </>
    )
}

const ConnectedDocuments = (props) => (
    <DocumentConsumer>
        { value => <Documents {...props} {...value} />}
    </DocumentConsumer>
)

export default ConnectedDocuments;