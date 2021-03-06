import { GearConsumer } from '../../providers/GearProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Button, Modal } from 'react-bootstrap';
import GearForm from './GearForm';
import { Header1, Header3, Header4, Para1, Font, ImgContainer, BtnContainer, ShowPara, CompContainer } from '../../styles/kitStyles';
import Documents from '../document/Documents';

const GearShow = ({ updateGear, deleteGear }) => {
    const params = useParams()
    const [gear, setGear] = useState({ name: '', desc:'', price: 0, model:'', condition:'', make:'', image: '', serial:'', category: '', bought: '', quantity: ''})
    const [editing, setEdit] = useState(false)

    useEffect(() =>{
        axios.get(`/api/kits/${params.kitId}/gears/${params.gearId}`)
    .then( res => setGear(res.data))
    .catch( err => console.log(err))
    }, [])

    const { name, desc, price, model, condition, make, image, serial, category, bought, quantity, id} = gear
    return (

      <>
        { editing ? 
      <>
        <GearForm 
          {...gear}
          updateGear={updateGear} 
        />
        <Button 
        variant="outline-light" 
        onClick={() => 
        setEdit(false)}>
        Cancel
        </Button>
        <br />
      </>
      :
      <>
      <ShowPara>
        <Font>
        <Header1>{name}</Header1>
        <Header3>Desc: {desc}</Header3>
        <Header4>price: {price}</Header4>
        <Header4>model: {model}</Header4>
        <Header4>condition: {condition}</Header4>
        <Header4>make: {make}</Header4>
        <Header4>serial: {serial}</Header4>
        <Header4>category: {category}</Header4>
        <Header4>bought: {bought}</Header4>
        <Header4>quantity: {quantity}</Header4>
        </Font>
      </ShowPara>
      <ImgContainer>
        <Image src={image} style={{ width: '370px'}} />
      </ImgContainer>
      <BtnContainer>
        <Button variant="outline-light" onClick={() => setEdit(true)}>
          Edit
        </Button>
        <Button variant="outline-light" onClick={() => deleteGear(params.kitId, params.gearId)}>
          Delete
        </Button>
      </BtnContainer>
      
        
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
          <Button variant="outline-light" onClick={() => setEdit(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        }
      <CompContainer>
        <Documents gearId={params.gearId} />
      </CompContainer>
    </>

    )
	}
  

  



const ConnectedGearShow = (props) => (
    <GearConsumer>
        { value => <GearShow {...props} {...value} />}
    </GearConsumer>
)

export default ConnectedGearShow;