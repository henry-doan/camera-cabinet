
import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Button } from 'react-bootstrap';
import { RegisterContainer, WhiteFont, RedBackground, FormFont } from '../../styles/registerStyles';

const Register = ({ handleRegister, updateUser, id, setEdit, email, password, passwordConfirmation, fname, lname}) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', fname: '', lname: '' })


  useEffect( () => {
    if (id) {
    setUser({id, email, password, passwordConfirmation, fname, lname})
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (setEdit(true)) {
      updateUser(id, user)
      setEdit(false)
    } if (user.password === user.passwordConfirmation) {
      handleRegister(user)
      setUser({ email: '', password: '', passwordConfirmation: '', fname: '', lname: '' })
    } else {
      alert('Passwords do not match.')
    }  
  }

  return (
    <>
      {/* <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={user.email}  
          onChange={(e) => setUser({...user, email: e.target.value })}
          required
          autoFocus
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={user.password}  
          onChange={(e) => setUser({...user, password: e.target.value })}
          required
        />
        <label>Password Confirmation</label>
        <input
          type='password'
          name='passwordConfirmation'
          value={user.passwordConfirmation}  
          onChange={(e) => setUser({...user, passwordConfirmation: e.target.value })}
          required
        />
        <button tpye='submit'>Submit</button>
      </form> */}
        <RedBackground>
          <RegisterContainer>
          <WhiteFont>Create Account</WhiteFont>
          <br />
            <FormFont>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                  type='email' 
                  name='email'
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value })}
                  required
                  autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password: </Form.Label>
                  <Form.Control 
                  type='password'
                  name='Password'
                  value={user.password}
                  onChange={(e) => setUser({...user, password: e.target.value })}
                  required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password Confirmation: </Form.Label>
                  <Form.Control 
                  type='password'
                  name='passwordConfirmation'
                  value={user.passwordConfirmation}
                  onChange={(e) => setUser({...user, passwordConfirmation: e.target.value })}
                  required
                  />
                </Form.Group>
                <Button variant="outline-light" type="submit">
                  Submit
                </Button>
              </Form>
            </FormFont>
          </RegisterContainer>
        </RedBackground>
          
        
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;