import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const KitContext = React.createContext();
export const KitConsumer = KitContext.Consumer;

const KitProvider = ({ children }) => {
  const [kits, setKits] = useState = ([])

  const getAllKits = () => {
    axios.get('/api/kits')
      .then( res => setKits(res.data))
      .catch( err => console.log(err))
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
  })
  .catch( err => console.log(err) )
}


  return (
    <>
      <KitContext.Provider value={{
        kits,
        getAllKits: getAllKits,
        updateKit: updateKit,
      }}>
        { children }
      </KitContext.Provider>
    </>
  )
}

export default KitProvider;