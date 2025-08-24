import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { appcontext } from './Context';

function App() {
  let { inp, setinp, add_main, main, edit_main, editng, del_main, add_todo, todo_inp, settodo_inp } = useContext(appcontext)
  return (
    <div>
      <h1 className='w-full cursor-context-menu text-center text-black font-bold text-2xl mt-5 tracking-[2px]'>Own Task</h1>

      <div className='w-[90%] h-[40px] mt-5 mx-auto flex justify-center items-center gap-4'>
        <input className='w-[80%] h-full px-4 text-lg bg-gray-100 text-black rounded-lg' type="text"
          value={inp}
          onChange={(e) => setinp(e.target.value)}
        />
        <button className='py-1 px-3 bg-black text-white rounded-lg cursor-pointer h-full font-bold'
          onClick={() => add_main()}> {editng ? "Update" : "Add_Manager"} </button>
      </div>

      <div className='w-full h-[450px] mx-auto mt-8 flex-wrap flex justify-evenly'>

        {main.map((ele, idx) => {
          return (
            <div key={idx} className='w-[380px] h-max py-3 mt-8 rounded-lg px-3 border'>
              <div className='w-full h-[70px] bg-black rounded-lg flex justify-between px-6 items-center'>
                <h1 className='text-white font-bold text-lg tracking-[2px] cursor-context-menu'>{ele.name}</h1>
                <div className='flex justify-center items-center text-white text-2xl gap-2'>
                  <MdEditSquare className='text-blue-500 cursor-pointer' onClick={() => edit_main(idx, ele)} />
                  <MdDelete className='text-red-500 cursor-pointer' onClick={() => del_main(idx)} />
                </div>
              </div>

              <div className='w-full h-[240px] scrolldiv'>
                {
                  ele.todo.map((item, i) => {

                    return (
                      <div key={i} className='w-full h-[70px] bg-gray-200 rounded-lg mt-[10px]'>{item}</div>

                    )
                  })
                }
              </div>

              <div className='w-full py-3 bg-black mt-3 rounded-lg'>
                <input type="text" className='w-[80%] h-[35px] bg-white text-black px-3 rounded-lg mx-auto block'
                  value={todo_inp[idx] || ""}
                  onChange={(e) => {
                    let clone = [...todo_inp]
                    clone[idx] = e.target.value
                    settodo_inp(clone)
                  }}
                />
                <button className='text-white font-white px-3 block mx-auto hover:bg-white hover:text-black mt-3 cursor-pointer h-[30px] rounded-lg border'
                  onClick={() => add_todo(idx)}>Add_Todo</button>
              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App