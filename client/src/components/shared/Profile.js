import { useEffect, useState } from 'react';
import { Card , Button} from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
import ProfileForm from './ProfileForm'
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Center, TextC } from '../../styles/profileStyles';



const Profile = ({ id, fname, lname, age, email, image, updateUser}) => {

  const [user, setUser] = useState ({ fname: '', email: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/auth/edit`)
      .then( res => setUser(res.data))
      .catch( err => console.log(err))
  }, [])




  return (
<>
    { editing ? 
      <>
      <TextC>
        <ProfileForm
          email={email}
          updateUser={updateUser} 
          setEdit={setEdit}
          id={id}
        />
        </TextC>
        <Button variant="outline-danger" onClick={() => setEdit(false)}>Cancel</Button>
        <br />
      </>
      :
      <>
      <Center>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>User # {id}</Card.Title>
        <Card.Text>
          <br />
          Email: {email}
        </Card.Text>
        <Button 
            variant="outline-danger"
            onClick={() => setEdit(true)}
          >Edit Profile</Button>
       
      </Card.Body>
    </Card>
    </Center>
        </>
      }
    </>
  )
}


const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value.user} />}
  </AuthConsumer>
)

export default ConnectedProfile;