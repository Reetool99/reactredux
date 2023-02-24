import React from 'react'

const A = (props) => {
     return (<>
          <h1>Just simple useReducer change state globally </h1>
          <div>{props.count}</div>
          <button onClick={props.click}>A- Increment Button</button>
     </>
     )
}

export default A