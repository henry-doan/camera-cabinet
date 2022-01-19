import { useState, useEffect } from 'react';

const GearForm = ({ id, name, desc, price, model, condition, make, image, serial, setEdit, updateGear}) => {
  
  const [gear, setGear] = useState({ name: '', desc: '', rating: '', price: '', model: '',
  condition: '', make: '', image: '', serial: ''})

  useEffect( () => {
    if (id) {
      setGear({ name, desc, rating, price, model, condition, make, image, serial,})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateGear(id, gear)
    setEdit(false)
  } else {
    addGear(gear)
  }
    setGear({ name: '', desc: '', rating: 0, price: 0, model: '',
    condition: '', make: '', image: '', serial: ''})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Gear Name:</label>
        <input 
          name='name' 
          value={gear.name}
          onChange={(e) => setGear({...gear, name: e.target.value})}
          required
          placeholder="Gear Name"
        />
      <label>Gear Description:</label>
        <input 
          name='desc' 
          value={gear.desc}
          onChange={(e) => setGear({...gear, desc: e.target.value})}
          required
          placeholder="Gear Description"
        />
        <label>Rating:</label>
        <input 
          name='rating' 
          value={gear.rating}
          onChange={(e) => setGear({...gear, rating: e.target.value})}
          required
          placeholder="Gear Rating"
        />
        <label>Price:</label>
        <input 
          name='price' 
          value={gear.price}
          onChange={(e) => setGear({...gear, price: e.target.value})}
          required
          placeholder="Gear price"
        />
        <label>Model:</label>
        <input 
          name='model' 
          value={gear.model}
          onChange={(e) => setGear({...gear, model: e.target.value})}
          required
          placeholder="Gear model"
        />
        <label>Condition:</label>
        <input 
          name='condition' 
          value={gear.condition}
          onChange={(e) => setGear({...gear, condition: e.target.value})}
          required
          placeholder="Gear condition"
        />
        <label>Make:</label>
        <input 
          name='make' 
          value={gear.make}
          onChange={(e) => setGear({...gear, make: e.target.value})}
          required
          placeholder="Gear make"
        />
        <label>Image of Gear:</label>
        <input 
          name='image' 
          value={gear.image}
          onChange={(e) => setGear({...gear, image: e.target.value})}
          required
          placeholder="Gear image"
        />
        <label>Serial Number:</label>
        <input 
          name='serial' 
          value={gear.serial}
          onChange={(e) => setGear({...gear, serial: e.target.value})}
          required
          placeholder="Gear serial"
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default GearForm;