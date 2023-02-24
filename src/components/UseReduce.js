import React, { useReducer } from 'react'

const UseReduce = () => {

     const initialstate = 0;

     const reducer = (state, action) => {
          if (action === 'increment') {
               return state + 1
          }
          if (action === 'decrement') {
               return state - 1
          }
          if (action === 'reset') {
               return state = initialstate
          }
     }

     const [count, dispatch] = useReducer(reducer, initialstate)

     return (

          <div>
               <h1>UseReducerOne with simplestate  : {count}</h1>
               <button onClick={() => dispatch('increment')}>Increment</button>
               <button onClick={() => dispatch('decrement')}>Decrement</button>
               <button onClick={() => dispatch('reset')}>Reset</button>
          </div>
     )
}

export default UseReduce