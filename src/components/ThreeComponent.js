import React, { useContext } from 'react'
import { Components } from '../App'

const ThreeComponent = () => {
     const Cont = useContext(Components)
     return (
          <div>
               <h1>Three Component</h1>
               {/* <h2>Value= {cont.countState}</h2> */}
               <button onClick={() => Cont.countDispatch('increment')}>Increment</button>
               <button onClick={() => Cont.countDispatch('decrement')}>Decrement</button>
               <button onClick={() => Cont.countDispatch('reset')}>Reset</button>
          </div>
     )
}

export default ThreeComponent