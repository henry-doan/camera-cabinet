import { GearConsumer } from '../../providers/GearProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Button, Modal } from 'react-bootstrap';
import GearForm from './GearForm';
import { Header1, Header3, Header4, Para1 } from '../../styles/kitStyles';
import Documents from '../document/Documents';

const GearShow = ({ updateGear, deleteGear }) => {
    const params = useParams()
    const [gear, setGear] = useState({ name: '', desc:'', price: 0, model:'', condition:'', make:'', image: '', serial:''/*, category: ''*/, bought: '', quantity: ''})
    const [editing, setEdit] = useState(false)

    useEffect(() =>{
        axios.get(`/api/kits/${params.kitId}/gears/${params.gearId}`)
    .then( res => setGear(res.data))
    .catch( err => console.log(err))
    }, [])

    const { name, desc, price, model, condition, make, image, serial, /*category*/ bought, quantity, id} = gear
    return (

      <>
        <Header1>{name}</Header1>
        <Header3>Desc: {desc}</Header3>
        <Header4>price: {price}</Header4>
        <Header4>model: {model}</Header4>
        <Header4>condition: {condition}</Header4>
        <Header4>make: {make}</Header4>
        <Header4>serial: {serial}</Header4>
        {/* <Header4>category: {category}</Header4> */}
        <Header4>bought: {bought}</Header4>
        <Header4>quantity: {quantity}</Header4>
        <Image src={image} style={{ width: '400px'}} />
      
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => deleteGear(params.kitId, params.gameId)}>
        Delete
      </Button>
      
      <Documents gearId={params.gearId} />

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