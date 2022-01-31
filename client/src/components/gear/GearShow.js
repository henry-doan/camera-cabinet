import { GearConsumer } from '../../providers/GearProvider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import GearForm from './GearForm';
import { Header1, Header3, Header4, Para1 } from '../../styles/kitStyles';

const GearShow = ({ updateGear, deleteGear }) => {
    const params = useParams()
    const [gear, setGear] = useState({ name: '', desc:'',price: 0, model:'', condition:'',make:'', image: '', serial:'', rating: ''})
    const [editing, setEdit] = useState(false)

    useEffect(() =>{
        axios.get(`/api/kits/${params.kitId}/gears/${params.gearId}`)
    .then( res => setGear(res.data))
    .catch( err => console.log(err))
    }, [])

    const { name, desc, price, model, condition, make, image, serial, rating, id} = gear
    return (
        <>
        { editing ? 
          <>
            <GearForm 
              {...gear}
              updateGear={updateGear} 
              gearId ={params.kitId}
              id={params.gearId}
              updateGame={updateGear}
              setEdit= {setEdit}
            />
            <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
            <br />
          </>
          :
          <>
               <h1>Name: {params.gearId} {name}</h1>
              <h3>Description: {desc}</h3>
              <h3>Price: {price} </h3> 
              <Image src={image} roundedCircle style={{ width: '250px'}} />
    
              <Button 
                variant="warning" 
                onClick={() => setEdit(true)}
              >
                Edit
              </Button>
              <Button 
                variant="danger"
                onClick={() => deleteGear(id)}
              >
                Delete
              </Button>
            </>
          }
          {/* <Documents documentId={id} /> */}
        </>
    )
	}

const ConnectedGearShow = (props) => (
    <GearConsumer>
        { value => <GearShow {...props} {...value} />}
    </GearConsumer>
)

export default ConnectedGearShow;