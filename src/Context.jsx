import React, { useState } from 'react'
import { createContext } from 'react'

export const appcontext = createContext(  )

function Context({children}) {

    let [inp , setinp] = useState("")
    



  return (
    <appcontext.Provider value={{
        inp,setinp,
    }}>
        {children}
    </appcontext.Provider>
  )
}

export default Context