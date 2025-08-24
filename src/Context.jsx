import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const appcontext = createContext()

function Context({ children }) {


  let data = localStorage.getItem("main_task") ? JSON.parse(localStorage.getItem("main_task")) :
    [
      { name: "TODO_LIST", todo: [] },
      { name: "IN PROGRESS", todo: [] },
      { name: "DONE", todo: [] }
    ]


  let [main, setmain] = useState(data)
  let [inp, setinp] = useState("")
  let [editng, setediting] = useState(false)
  let [edit_index, setedit_index] = useState(null)
  let [todo_inp, settodo_inp] = useState([])
  console.log(todo_inp);

  function add_main() {
    if (inp.trim() === "") return;
    let update = [...main]

    if (editng) {
      update[edit_index].name = inp
      setediting(false)
    }
    else {
      update = [...main, { name: inp, todo: [] }]
      setmain(update)
    }

    setinp("")
  }

  function edit_main(idx, ele) {
    setedit_index(idx)
    setediting(true)
    setinp(ele.name)
    scroll(0, 0)
  }

  function del_main(idx) {
    let update = [...main]
    let fitr = update.filter((_, i) => i !== idx)
    setmain(fitr)
  }

  function add_todo(idx) {
    if (todo_inp[idx].trim() === "") return;

    let update = [...main]

    update[idx].todo.push(todo_inp[idx])
    setmain(update)
    let clone = [...todo_inp]
    clone[idx] = ""
    settodo_inp(clone)
  }

  useEffect(() => {
    localStorage.setItem("main_task", JSON.stringify(main))
    settodo_inp(new Array(main.length).fill(""))
  }, [main])

  return (
    <appcontext.Provider value={{
      inp, setinp,
      add_main,
      main,
      edit_main,
      editng,
      del_main,
      add_todo,
      todo_inp, settodo_inp,
    }}>
      {children}
    </appcontext.Provider>
  )
}

export default Context