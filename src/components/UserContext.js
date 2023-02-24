import React from 'react'
import { createContext } from 'react'
import ComponentE from './ComponentE'
import ComponentF from './ComponentF'



export const user = createContext()
export const bcb = createContext()


const UserContext = () => {
     const abc = ["ritul", "james"]
     // const [first, setfirst] = useState(second)
     return (<>


          <user.Provider value={abc[0]} >
               <div>
                    <ComponentF />

               </div>
          </user.Provider>


          <bcb.Provider value={abc[1]}>
               <div>
                    <ComponentE />
               </div>
          </bcb.Provider>
     </>
     )
}

export default UserContext