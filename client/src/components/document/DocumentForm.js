import { useState, useEffect } from 'react';
import { Form, Button, } from 'react-bootstrap';

const DocumentForm = ({ gearId, kitId, addDocument, id, bought, image, setEditing, setAdd, updateDocument}) => {
  const [document, setDocument] = useState({ bought: '', image: ''})

  useEffect( () => {
    if (id) {
      setDocument({ bought, image})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateDocument(kitId, gearId, id, document)
    setEditing(false)
  } else {
    addDocument(kitId, gearId, document)
    setAdd(false)
  }
    setDocument({ bought: '',  image: ''})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <label>Bought:</label>
        <input 
          type="date"
          name="bought"
          value={document.bought}
          onChange={(e) => setDocument({...document, bought: e.target.value})}
          required
          placeholder="purchased"
        />
         <label>Image:</label>
        <input 
          type="text"
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