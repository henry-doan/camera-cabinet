import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const KitContext = React.createContext();
export const KitConsumer = KitContext.Consumer;

const KitProvider = ({ children }) => {
  const [kits, setKits] = useState ([])

  const navigate = useNavigate()

  const getAllKits = () => {
    axios.get('/api/kits')
      .then( res => setKits(res.data))
      .catch( err => console.log(err))
  }

  const addKit = (kit) => {
    axios.post('/api/kits', { kit })
      .then( res => setKits([...kits, res.data]))
      .catch( err => console.log(err) )
  }

  const updateKit = (id, kit) => {
    axios.put(`/api/kits/${id}`, { kit })
    .then( res => {
      const newUpdatedKits = kits.map ( k => {
        if (k.id === id) {
          return res.data
        }
        return k
      })
      setKits(newUpdatedKits)
      navigate(`/kits`)
    })
    .catch( err => console.log(err) )
  }

  const deleteKit = (id) => {
    axios.delete(`/api/kits/${id}`)
      .then( res => {
        setKits(kits.filter( k => k.id !== id))
        alert(res.data.message)
        navigate('/kits')
      })
      .catch( err => console.log(err) )
  }

  return (
      <KitContext.Provider value={{
        kits,
        getAllKits: getAllKits,
        addKit: addKit,
        updateKit: updateKit,
        deleteKit: deleteKit,
      }}>
        { children }
      </KitContext.Provider>
  )
}

export default KitProvider;