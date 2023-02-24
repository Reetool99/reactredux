import React, { useContext } from 'react'
import { user } from './UserContext'

const ComponentF = () => {
     const consumer = useContext(user)
     return (
          <div>
               <h1>firstname is {consumer}</h1>
          </div>
     )
}

export default ComponentF