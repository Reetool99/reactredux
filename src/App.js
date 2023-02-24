import './App.css';
import { useSelector, useDispatch } from 'react-redux'
// import ComponentC from './components/ComponentC';
import UserContext from './components/UserContext';
import UseReduce from './components/UseReduce';
import UseReduce2 from './components/UseReduce2';
import UseReduce3 from './components/UseReduce3';
import A from './components/A';
import { createContext, useReducer } from 'react';
import B from './components/B';
import C from './components/C';
import OneComponent from './components/OneComponent';
import TwoComponent from './components/TwoComponent';
import ThreeComponent from './components/ThreeComponent';


const initialstate = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialstate
    default:
      return state
  }
}
export const Components = createContext();

function App() {
  // const counter = useSelector((state => state.counter))
  // const dispatch = useDispatch();
  // const Increment = () => {
  //   dispatch({ type: 'Inc' })
  // }

  // const Decrement = () => {
  //   dispatch({ type: 'Dec' })
  // }
  // const Add = () => {
  //   dispatch({ type: 'plus' })
  // }
  // const Sub = () => {
  //   dispatch({ type: 'minus' })
  // }

  {/* //simple reducer with global state\\  */ }

  const [count, dispatch] = useReducer(reducer, initialstate)

  return (
    <Components.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        {/* <h1>
        React Redux
      </h1>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={Increment}>INCREMENT</button>
      <button onClick={Decrement}>DECREMENT</button>
      <br />
      <button onClick={Add}>ADD Value By 10</button>
      <button onClick={Sub}>SUB Value By 10</button> */}

        <div>
          {/* <h1>  Context API</h1> */}
          {/* <UserContext /> */}
        </div>

        {/* UseReduce start  */}
        <div>
          {/* <UseReduce /> */}
        </div>
        <div>
          {/* <UseReduce2 /> */}
        </div>
        <div>
          {/* <UseReduce3 /> */}
        </div>


        {/* //simple reducer with global state\\  */}
        {/* <A count={count} click={() => dispatch('increment')} />
      <B click={() => dispatch('decrement')} />
      <C click={() => dispatch('reset')} /> */}
        <div>
          count : {count}
          <OneComponent />
          <TwoComponent />
          <ThreeComponent />
        </div>

      </div>
    </Components.Provider>
  );
}

export default App;
