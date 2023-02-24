import React, { useReducer } from 'react'

const UseReduce3 = () => {
     const initialstate = 0

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
     const [counttwo, dispatchtwo] = useReducer(reducer, initialstate) /// use multiple usereducer

     return (

          <div>
               <h1>UseReducerthree with simplestate  : {count}</h1>
               <button onClick={() => dispatch('increment')}>Increment</button>
               <button onClick={() => dispatch('decrement')}>Decrement</button>
               <button onClick={() => dispatch('reset')}>Reset</button>

               <h1>UseReducerthree with simplestate  : {counttwo}</h1>
               <button onClick={() => dispatchtwo('increment')}>Increment</button>
               <button onClick={() => dispatchtwo('decrement')}>Decrement</button>
               <button onClick={() => dispatchtwo('reset')}>Reset</button>
          </div>
     )
}

export default UseReduce3