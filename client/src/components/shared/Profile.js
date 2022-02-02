import { useEffect, useState } from 'react';
import { Card , Button} from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
import ProfileForm from './ProfileForm'
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
        <ProfileForm
          email={email}
          updateUser={updateUser} 
          setEdit={setEdit}
          id={id}
        />
        <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
        <br />
      </>
      :
      <>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>User # {id} {fname} {lname}</Card.Title>
        <Card.Text>
          Age: {age}
          <br />
          Email: {email}
        </Card.Text>
        <Button 
            variant="warning" 
            onClick={() => setEdit(true)}
          >Edit Profile</Button>
       
      </Card.Body>
    </Card>
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