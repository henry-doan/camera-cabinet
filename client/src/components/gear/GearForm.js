import { useState, useEffect } from 'react';



const GearForm = ({kitId, id, setAdd, name, desc, price, model, condition, make, image, serial, category, setEdit, updateGear, addGear}) => {
  
  const [gear, setGear] = useState({ name: '', desc: '', price: '', model: '',
  condition: '', make: '', image: '', serial: '', category: ''})

  useEffect( () => {
    if (id) {
      setGear({ name, desc, price, model, condition, make, image, serial, category})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateGear(kitId, id, gear)
    setEdit(false)
  } else {
    addGear(gear)
    setAdd(false)
  }
    setGear({ name: '', desc: '', price: 0, model: '',
    condition: '', make: '', image: '', serial: '', category: ''})
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
        <label>
          Category
          <select value={gear.category} onChange={(e) => setGear({...gear, category: e.target.value})}>
            <option value="camera">Camera</option>
            <option value="audio">Audio</option>
            <option value="lens">Lens</option>
            <option value="light">Light</option>
          </select>
        </label>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default GearForm;