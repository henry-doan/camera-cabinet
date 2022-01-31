import { useState, useEffect } from 'react';



const GearForm = ({kitId, id, setAdd, name, desc, price, model, condition, make, image, serial, category, bought, quantity, setEdit, updateGear, addGear}) => {
  
  const [gear, setGear] = useState({ name: '', desc: '', price: 0, model: '',
  condition: '', make: '', image: '', serial: '', category: '', bought: '', quantity: ''})

  useEffect( () => {
    if (id) {
      setGear({ name, desc, price, model, condition, make, image, serial, category, bought, quantity})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    updateGear(kitId, id, gear)
    setEdit(false)
  } else {
    addGear(kitId, gear)
    setAdd(false)
  }
    setGear({ name: '', desc: '', price: 0, model: '',
    condition: '', make: '', image: '', serial: '', category: '', bought: '', quantity: ''})
  }

 
  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Image of Gear:</label>
        <input 
          type="text"
          name='image' 
          value={gear.image}
          onChange={(e) => setGear({...gear, image: e.target.value})}
          required
          placeholder="Image"
          />
        <label>Manufacturer:</label>
        <input 
          type="text"
          name='make' 
          value={gear.make}
          onChange={(e) => setGear({...gear, make: e.target.value})}
          required
          placeholder="Make"
        />
       <label>Model No.:</label>
        <input 
          type="text"
          name='Model' 
          value={gear.model}
          onChange={(e) => setGear({...gear, model: e.target.value})}
          required
          placeholder="Model"
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
        <label>Nickname:</label>
        <input 
          type="text"
          name='name' 
          value={gear.name}
          onChange={(e) => setGear({...gear, name: e.target.value})}
          placeholder="Name"
        />
        <h1>Purchase Information</h1>
        <label>Price Paid:</label>
        <input 
        type="text"
          name='price'
          value={gear.price}
          onChange={(e) => setGear({...gear, price: e.target.value})}
          placeholder="Price"
        />
        <label>Used:</label>
        <input 
        type="text"
          name='condition' 
          value={gear.condition}
          onChange={(e) => setGear({...gear, condition: e.target.value})}
          placeholder="Condition"
        />
       <label>Quantity:</label>
        <input 
        type="text"
          name='quantity'
          value={gear.quantity}
          onChange={(e) => setGear({...gear, quantity: e.target.value})}
          placeholder="Quantity"
        />
       <label>Date of Purchase:</label>
        <input 
          type="date"
          name='bought' 
          value={gear.bought}
          onChange={(e) => setGear({...gear, bought: e.target.value})}
          placeholder="Bought"
        />
       <label>Serial Number:</label>
        <input 
          tpye="text"
          name='serial' 
          value={gear.serial}
          onChange={(e) => setGear({...gear, serial: e.target.value})}
          placeholder="Serial"
        />
        <label>Notes:</label>
        <input 
          type="text"
          name='desc'
          value={gear.desc}
          onChange={(e) => setGear({...gear, desc: e.target.value})}
          placeholder="Description"
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default GearForm;