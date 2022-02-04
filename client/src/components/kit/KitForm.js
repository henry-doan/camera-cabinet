import { useState, useEffect } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { FormContainer, WhiteFont } from '../../styles/kitStyles';

const KitForm = ({ addKit, id, name, description, image,/* item,  */updateKit, setEdit}) => {
  const [kit, setKit] = useState({ name: '', description: '', image: '' })
 
  // item: '' is a data atr but not sure if we need to include in the form
  useEffect( () => {
    if (id) {
    setKit({ name, description, image/*, item */})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateKit(id, kit)
      setEdit(false)
    } else {
      addKit(kit)
    }
  setKit({ name: '', description: '', image: ''/*, item: ''*/})
  }

  return (
    <>
      
      <FormContainer>
        <Container>
          <WhiteFont>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>Kit Name: </Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={kit.name}
                  onChange={(e) => setKit({ ...kit, name: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description: </Form.Label>
                <Form.Control 
                  type="text"
                  name="description"
                  value={kit.description}
                  onChange={(e) => setKit({ ...kit, description: e.target.value })} 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image: </Form.Label>
                <Form.Control 
                  type="text"
                  name="image"
                  value={kit.image}
                  onChange={(e) => setKit({ ...kit, image: e.target.value })} 
                />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                Submit
              </Button>
            </Form>
          </WhiteFont>
        </Container>
      </FormContainer>
    </>
  )
}

export default KitForm;