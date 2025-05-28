import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const appcontext = createContext(  )

function Context({children}) {


    let data = localStorage.getItem("main_task") ? JSON.parse(localStorage.getItem("main_task")) :
    [
        { name : "TODO_LIST" , todo : [] },
        { name : "IN PROGRESS" , todo : [] },
        { name : "DONE" , todo : [] }
    ] 
    
    
    let [main , setmain] = useState(data)
    let [inp , setinp] = useState("")
    
    console.log(main);
    

    function add_main(){
      let update = [...main , { name : inp , todo : []}]
      setmain(update)
      setinp("")
    }

    useEffect(()=>{

      localStorage.setItem("main_task",JSON.stringify(main))

    },[main])


  return (
    <appcontext.Provider value={{
        inp,setinp,
        add_main,
        main
    }}>
        {children}
    </appcontext.Provider>
  )
}

export default Context