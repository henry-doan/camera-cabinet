import { useState, useEffect } from 'react';
import { DocumentConsumer } from '../../providers/DocumentProvider';
import axios from 'axios';
import { useParams } from 'react-routerdom';
import { Card, Button } from 'react-bootstrap';

const DocumentShow = ({}) => {
    const params = useParams()
    const [document, setDocument] = useState({ purchased: '', image: ''})

    useEffect( () => {
        axios.get(`/api/gears/${params.gearId}/documents/${params.documentId}`)
        .then( res => setDocument(res.data))
        .catch(err => console.log(err))
    }, [])

    const { purchased, image} = document
    return (
        <>
        <Card>
            <Card.Header as="h5">Document</Card.Header>
            <Card.Body>
                <Card.Title>{purchased}</Card.Title>
                <Card.Text>
                    {image}
                </Card.Text>
                <Button variant="primary">Edit</Button>
                <Button variant="primary">Delete</Button>
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