import React, { useReducer } from 'react'

const UseReduce2 = () => {

     const initialstate = {
          firstCounter: 0,
          secondCounter: 10
     };

     const reducer = (state, action) => {
          if (action.type === 'increment') {
               return { ...state, firstCounter: state.firstCounter + action.value }
          }
          if (action.type === 'decrement') {
               return { ...state, firstCounter: state.firstCounter - action.value }
          }
          if (action.type === 'increment2') {
               return { ...state, secondCounter: state.secondCounter + action.value }
          }
          if (action.type === 'decrement2') {
               return { ...state, secondCounter: state.secondCounter - action.value }
          }

          if (action.type === 'reset') {
               return state = initialstate
          }
     }

     const [count, dispatch] = useReducer(reducer, initialstate)

     return (

          <div>
               <h1>UseReducerTwo with complexstate and action : {count.firstCounter}</h1>
               <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
               <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
               <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
               <h1>UseReducerTwo with complexstate and action : {count.secondCounter}</h1>
               <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment by 5</button>
               <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement by 5</button>
          </div>
     )
}

export default UseReduce2