import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const DocumentForm = ({ addDocument, id, purchased, image, setEdit, updateDocument}) => {
  const [document, setDocument] = useState({ purchased: '', image: ''})

  useEffect( () => {
    if (id) {
      setDocument({ purchased, image})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateDocument(id, document)
    setEdit(false)
  } else {
    addDocument(document)
  }
    setDocument({ purchased: '',  image: ''})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <label>Purchased:</label>
        <input 
          name="purchased"
          value={document.purchased}
          onChange={(e) => setDocument({...document, purchased: e.target.value})}
          required
          placeholder="purchased"
        />
         <label>Image:</label>
        <input 
          name="image"
          value={document.image}
          onChange={(e) => setDocument({...document, image: e.target.value})}
          required
          placeholder="purchased"
        />
       
        <Button type="submit" variant="primary" >Submit</Button>
      </Form>
    </>
  )
}

export default DocumentForm;