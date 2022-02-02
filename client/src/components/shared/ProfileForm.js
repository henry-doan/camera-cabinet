import { useState, useEffect } from 'react';

const ProfileForm = ({ updateUser, setEdit, fname, lname, age,email, addUser,id}) => {
  const [user, setUser] = useState({ fname: '', lname: '', age: '', email: '' })
 
 
  useEffect( () => {
    if (id) {
    setUser({ fname, lname, age, email})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } 
  setUser({ fname: '', lname: '', age: '',email: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input 
          name='First Name'
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })} 
        />
        <label>Last Name:</label>
        <input 
          name='Last Name'
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        />
        <label>Age:</label>
        <input 
          name='Age'
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <label>Email:</label>
        <input 
          name='Email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ProfileForm;