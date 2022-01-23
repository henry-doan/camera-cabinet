import { GearConsumer } from '../../providers/GearProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Modal, Button } from 'react-bootstrap';
import GearForm from './GearForm';

const GearShow = ({ updateGear, deleteGear }) => {
    const params = useParams()
    const [gear, setGear] = useState({ name: '', desc: '', price: 0, model: '', condition: '', make: '', image: '', serial: ''})
    const [editing, setEdit] = useState(false)
		
    useEffect(() => {
			axios.get(`/api/kits/${params.kitId}/gears/${params.gearId}/`)
				.then( res => setGear(res.data))
				.catch( err => console.log(err))
    }, [])

    const { name, desc, price, model, condition, make, image, serial} = gear
    return (
      <>
      <h1>{name}</h1>
      <h3>Desc: {desc}</h3>
			<h4>price: {price}</h4>
			<h4>model: {model}</h4>
			<h4>condition: {condition}</h4>
			<h4>make: {make}</h4>
			<h4>serial: {serial}</h4>
      <Image src={image} roundedCircle style={{ width: '250px'}} />
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => deleteGear(params.kitId, params.gameId)}>
        Delete
      </Button>
      {/* <Documents gearId={params.gearId} /> */}


      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GearForm
            {...gear}
            kitId={params.kitId}
            id={params.gearId}
            updateGear={updateGear}
            setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEdit(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
	}

const ConnectedGearShow = (props) => (
    <GearConsumer>
        { value => <GearShow {...props} {...value} />}
    </GearConsumer>
)

export default ConnectedGearShow;