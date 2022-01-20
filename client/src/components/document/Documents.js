import { useEffect, useState } from 'react';
import { DocumentConsumer } from '../../providers/DocumentProvider';
import DocumentList from './DocumentList';
import { Button } from 'react-bootstrap';
import DocumentForm from './DocumentForm';

const Documents = ({ documents, getAllDocuments, addDocument }) => {
    const [adding, setAdding] = useState(false)

    useEffect( () => {
        getAllDocuments()
    }, [])

    return (
        <>
        <h1>Warrenties & Insurance</h1>
        { adding ?
            <>
            <DocumentForm addDocument={addDocument} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>    
            </>
            :
            <Button variant="info" onClick={() => setAdding(true)}>+</Button>
        }
        <DocumentList documents={documents} />
        </>
    )
}

const ConnectedDocuments = (props) => (
    <DocumentConsumer>
        { value => <Documents {...props} {...value} />}
    </DocumentConsumer>
)

export default ConnectedDocuments;