import React, { useContext } from 'react'
import { bcb } from './UserContext'

const ComponentE = () => {
     const consumer = useContext(bcb)
     return (
          <div>
               <h1>lastname is {consumer}</h1>
          </div>

     )
}

export default ComponentE