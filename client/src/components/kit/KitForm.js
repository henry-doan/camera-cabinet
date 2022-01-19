import { useState, useEffect } from 'react';

const KitForm = ({ addKit, id, name, description, image, item,  updateKit, setEdit}) => {
  const [kit, setKit] = useState({ name: '', description: '', image: '' })
 
  // item: '' is a data atr but not sure if we need to include in the form
  useEffect( () => {
    if (id) {
      setKit({ name, description, image })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateKit(id, kit)
      setEdit(false)
    } else {
      addKit(kit)
    }
    setKit({ name: '', description: '', image: '', })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Kit Name:</label>
        <input 
          name='Kit Name'
          value={kit.name}
          onChange={(e) => setKit({ ...kit, name: e.target.value })}
          required
        />
        <label>Kit Description:</label>
        <textarea
          name='Kit Description'
          value={kit.description}
          onChange={(e) => setKit({ ...kit, description: e.target.value })}
          required
        ></textarea>
         <label>Kit Image:</label>
        <input 
          name='Url of image NOT REQUIRED'
          value={kit.image}
          onChange={(e) => setKit({ ...kit, image: e.target.value })}
        />
         {/* <label>Kit Item Count:</label> */}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default KitForm;