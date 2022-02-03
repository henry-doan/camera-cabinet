import { useState, useEffect } from 'react';
import { Header1, Font, Backdrop, P1, P2, P3, P4, P5, Container2,  } from '../../styles/gearStyles.js';
import { Form, Modal, Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';



const GearForm = ({kitId, id, setAdd, name, desc, price, model, condition, make, image, serial, setEdit, updateGear, addGear, /*category*/}) => {
  
  const [gear, setGear] = useState({ name: '', desc: '', price: 0, model: '',
  condition: '', make: '', image: '', serial: '', /*category: ''*/ bought: '', quantity: ''})


  useEffect( () => {
    if (id) {
      setGear({ name, desc, price, model, condition, make, image, serial,bought,quantity,category})
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateGear(kitId, id, gear)
    setEdit(false)
  } else {
    addGear(kitId, gear)
    setAdd(false)
  }
    setGear({ name: '', desc: '', price: 0, model: '',
    condition: '', make: '', image: '', serial: '', /*category: ''*/})
  }

     const [show, setShow] = useState(false); 

  
  return (
   
    <>
    <Button variant="primary" onClick={() => setShow(true)}>Add gear</Button>
    <Modal
    size="xl"
    show={show}
    >
  
    {/* <Modal.Dialog> */}
      <Backdrop>
      <Modal.Header>
      <Modal.Title>
      	<Header1>
          <P2>
			<Font>
			New Gear
			</Font>
      </P2>
		</Header1>
    </Modal.Title>
    </Modal.Header>

        <Modal.Body>
      <Form onSubmit={handleSubmit}>


        <Form.Group controlId="formFile" Classname="mb-3">
        <P3>
          <Font>
          <Form.Label>Gear image</Form.Label>
          </Font>
          </P3>
          <Form.Control 
          type="file"
          value={gear.image}
          onChange={(e) => setGear({...gear, image: e.target.value})}
          required
          placeholder="Image"
          />

        </Form.Group>

        <Form.Group>
          <P3>
            <Font>
        <Form.Label>Manufacturer</Form.Label>
            </Font>
          </P3>
          
        <Form.Control 
          type="text" 
          value={gear.make}
          onChange={(e) => setGear({...gear, make: e.target.value})}
          required
          placeholder= "Input"
          style= {{ color: "red" }}
          />
          
        </Form.Group>
        <br/>
     
        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Model No.</Form.Label>
            </Font>
          </P3>
          <Form.Control
          type="text" 
          value={gear.model}
          onChange={(e) => setGear({...gear, model: e.target.value})}
          required
          placeholder= "Input"
          style= {{ color: "red"}}
          />
        </Form.Group>
        
   
        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Category</Form.Label>
            </Font>
          </P3>
          <Form.Select>
            <option>Select a category</option>
             <option value="camera">Camera</option>
             <option value="audio">Audio</option>
             <option value="lens">Lens</option>
            <option value="light">Light</option>
            onChange={(e) => setGear({...gear, category: e.target.value})}

            {/* style= {{ color: "red"}} */}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Nickname</Form.Label>
            </Font>
          </P3>
          <Form.Control
          type="text" 
          value={gear.name}
          onChange={(e) => setGear({...gear, name: e.target.value})}
          optional
          placeholder= "Optional"
          style= {{ color: "red"}}
          />
        </Form.Group>


        <Header1>
          <Font>
          Purchase Information
          </Font>
        </Header1>
     

        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Price Paid</Form.Label>
            </Font>
          </P3>
          <Form.Control
          type="text" 
          value={gear.price}
          onChange={(e) => setGear({...gear, price: e.target.value})}
          optional
          placeholder= "Optional"
          style= {{ color: "red"}}
          />
        </Form.Group>

        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Condition</Form.Label>
            </Font>
          </P3>
          <Form.Control
          type="text" 
          value={gear.condition}
          onChange={(e) => setGear({...gear, condition: e.target.value})}
          optional
          placeholder= "Optional"
          style= {{ color: "red"}}
          />
        </Form.Group>

        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Quantity</Form.Label>
            </Font>
          </P3>
          <Form.Control
          type="text" 
          value={gear.quantity}
          onChange={(e) => setGear({...gear, quantity: e.target.value})}
          optional
          placeholder= "Optional"
          style= {{ color: "red"}}
          />
        </Form.Group>

        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Date of Purchase</Form.Label>
            </Font>
          </P3>
          <Form.Control
          type="text" 
          value={gear.bought}
          onChange={(e) => setGear({...gear, bought: e.target.value})}
          optional
          placeholder= "Optional"
          style= {{ color: "red"}}
          />
        </Form.Group>

        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Serial Number</Form.Label>
            </Font>
          </P3>
          <Form.Control
          type="text" 
          value={gear.serial}
          onChange={(e) => setGear({...gear, serial: e.target.value})}
          optional
          placeholder= "Optional"
          style= {{ color: "red"}}
          />
        </Form.Group>

        <Form.Group>
          <P3>
            <Font>
              <Form.Label>Notes:</Form.Label>
            </Font>
          </P3>
          <Form.Control
          as="textarea" 
          value={gear.desc}
          onChange={(e) => setGear({...gear, desc: e.target.value})}
          optional
          placeholder= "Optional"
          rows={4}
          style= {{ color: "red"}}
          />
        </Form.Group>

        <Button variant="secondary" onClick={() => setAdd(false)}>
              Close
          </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
        {/* <Modal.Footer>
         
        </Modal.Footer>
      {/* </Form.Group> */}
      </Modal.Body> 
      </Backdrop>
      {/* </Modal.Dialog> */}
    </Modal>
    </>
    
  )
}

export default GearForm;