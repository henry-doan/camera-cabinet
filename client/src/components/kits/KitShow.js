import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Image, Button } from 'react-bootstrap';

const KitShow = ({ updateKit, deleteKit }) => {
  const params = useParams();
  const [kit, setKit] = useState ({ name: '', description: '', image: '', item: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`api/kits/${params.kitId}`)
    .then( res => setKit(res.data))
    .catch( err => console.log(err))
  })
}

const { name, description, image, item } = kit
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
           <h1>Name: {params.kitId} {name}</h1>
          <h3>Description: {description}</h3>
          <h3>Item: {item} </h3> 
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
      <Games kitId={id} />
    </>
  )
}

const ConnectedKitShow = (props) => (
  <KitConsumer>
    { value => <KitShow {...props} {...value} /> }
  </KitConsumer>
)

export default ConnectedKitShow;
