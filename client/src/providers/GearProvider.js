import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GearContext = React.createContext();
export const GearConsumer = GearContext.Consumer;

const GearProvider = ({ children }) => {
  const [gears, setGears] = useState([])

  const navigate = useNavigate()

  const getAllGears = (kitId) => {
    axios.get(`/api/kits/${kitId}/gears`)
      .then( res => setGears(res.data))
      .catch( err => console.log(err))
  }

  const addGear = (kitId, gear) => {
    axios.post(`/api/kits/${kitId}/gears`, { gear } )
      .then ( res => setGears([...gears, res.data]))
      .catch( err => console.log(err))
  }

  const updateGear = (kitId, id, gear) => {
    axios.put(`/api/kits/${kitId}/gears/${id}`, { gear })
      .then ( res => {
        const newUpdatedGears = gears.map( g => {
          if (g.id === id ) {
            return res.data
          }
          return g
        })
        setGears(newUpdatedGears)
        navigate(`/kits/${kitId}`)
      })
      .catch( err => console.log(err))
  }

  const deleteGear = (kitId, id) => {
    axios.delete(`/api/kits/${kitId}/gears/${id}`)
      .then( res => {
        setGears(gears.filter( g => g.id !== id))
        alert(res.data.message)
        navigate(`/kits/${kitId}`)
      })
      .catch( err => console.log(err))
  }

  return (
    <GearContext.Provider value={{
      gears,
      getAllGears: getAllGears,
      addGear: addGear,
      updateGear: updateGear,
      deleteGear: deleteGear,
    }}>
      { children }
    </GearContext.Provider>
  )
}


export default GearProvider;