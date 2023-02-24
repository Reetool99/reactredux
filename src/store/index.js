import { createStore } from "redux";

const reducerfn = (state = { counter: 0 }, action) => {
     if (action.type === 'Inc' && state.counter < 100) {
          return { counter: state.counter + 1 };
     }
     if (action.type === "Dec" && state.counter > 0) {
          return { counter: state.counter - 1 };
     }
     if (action.type === 'plus' && state.counter < 100) {
          return { counter: state.counter + 10 }
     }
     if (action.type === 'minus' && state.counter > 0) {
          return { counter: state.counter - 10 }
     }
     return state
}

const store = createStore(reducerfn);

export default store