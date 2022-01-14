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


  return (
    <>
      <KitContext.Provider value={{
        kits,
        getAllKits: getAllKits,
      }}>
        { children }
      </KitContext.Provider>
    </>
  )
}

export default KitProvider;