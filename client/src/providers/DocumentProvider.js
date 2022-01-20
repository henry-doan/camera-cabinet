import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const DocumentContext = React.createContext();
export const DocumentConsumer = DocumentContext.Consumer;

const DocumentProvider = ({ children }) => {
  const [documents, setDocuments] = useState([])

  const navigate = useNavigate()

  const getAllDocuments = (gearId) => {
    axios.get(`/api/gears/${gearId}/documents`)
      .then ( res => setDocuments(res.data))
      .catch( err => console.log(err))
  }

  const addDocument = (kitId, gearId, document) => {
    axios.post(`/api/gears/${gearId}/documents`, { document } )
      .then( res => {
        navigate(`/${kitId}/gears/${gearId}`)
        setDocuments([...documents, res.data])
      })
        .catch( err => console.log(err))
  }

  const updateDocument = (kitId, gearId, id, document) => {
    axios.put(`/api/gears/${gearId}/documents/${id}`, { document })
      .then ( res => {
        const newUpdatedDocuments = documents.map( d => {
          if (d.id === id ) {
            return res.data
          }
          return d
        })
        setDocuments(newUpdatedDocuments)
        navigate(`/${kitId}gears/${gearId}`)
      })
      .catch( err => console.log(err))
  }

  const deleteDocument = (kitId, gearId, id) => {
    axios.delete(`/api/gears/${gearId}/documents/${id}`)
      .then( res => {
        setDocuments(documents.filter( d => d.id !== id))
        navigate(`/${kitId}/gears/${gearId}`)
      })
      .catch( err => console.log(err))
  }

  return (
    <DocumentContext.Provider value={{
      documents,
      getAllDocuments: getAllDocuments,
      addDocument: addDocument,
      updateDocument: updateDocument,
      deleteDocument: deleteDocument,
    }}>
      { children }
    </DocumentContext.Provider>
  )
}


export default DocumentProvider;