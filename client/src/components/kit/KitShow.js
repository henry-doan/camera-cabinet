import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Image, Button } from 'react-bootstrap';
import KitForm from './KitForm';
import { KitConsumer } from '../../providers/KitProvider';
import Gears from '../gear/Gears';
import { Header1, Header3, Para1 } from '../../styles/kitStyles';


const KitShow = ({ updateKit, deleteKit }) => {


  const params = useParams()
  const [kit, setKit] = useState ({ name: '', description: '', image: '', item: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/kits/${params.kitId}`)
      .then( res => setKit(res.data))
      .catch( err => console.log(err))
  }, [])


const { name, description, image, item, id } = kit 
return (

  <>
    { editing ? 
      <>
        <KitForm 
          {...kit}
          updateKit={updateKit} 
        />
        <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
        <br />
      </>
      :
      <>
        <Header1>Name: {params.kitId} {name}</Header1>
          <Header3>Description: {description}</Header3>
          <Header3>Item: {item} </Header3> 
          <Image src={image} roundedCircle style={{ width: '250px'}} />

          <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteKit(id)}
          >
            Delete
          </Button>
        </>
      }
      <Gears kitId={id} />
    </>
  )
}

const ConnectedKitShow = (props) => (
  <KitConsumer>
    { value => <KitShow {...props} {...value} /> }
  </KitConsumer>
)

export default ConnectedKitShow;