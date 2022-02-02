import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const DocumentForm = ({ addDocument, id, bought, image, setEdit, updateDocument}) => {
  const [document, setDocument] = useState({ bought: '', image: ''})

  useEffect( () => {
    if (id) {
      setDocument({ bought, image})
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
    setDocument({ bought: '',  image: ''})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <label>Purchased:</label>
        <input 
          name="purchased"
          value={document.bought}
          onChange={(e) => setDocument({...document, bought: e.target.value})}
          required
          placeholder="purchased"
        />
         <label>Image:</label>
        <input 
          name="image"
          value={document.image}
          onChange={(e) => setDocument({...document, image: e.target.value})}
          required
          placeholder="image"
        />
       
        <Button type="submit" variant="primary" >Submit</Button>
      </Form>
    </>
  )
}

export default DocumentForm;