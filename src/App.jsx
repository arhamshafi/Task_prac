import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { appcontext } from './Context';

function App() {
  let { inp , setinp } = useContext(appcontext)
  return (
    <div>
      <h1 className='w-full cursor-context-menu text-center text-black font-bold text-2xl mt-5 tracking-[2px]'>Own Task</h1>

      <div className='w-[90%] h-[40px] mt-5 mx-auto flex justify-center items-center gap-4'>
        <input className='w-[80%] h-full px-4 text-lg bg-gray-100 text-black rounded-lg' type="text" 
          value={inp}
        />
        <button className='py-1 px-3 bg-black text-white rounded-lg cursor-pointer h-full font-bold'>Add_Manager</button>
      </div>

      <div className='w-[90%] h-[450px] mx-auto mt-20 flex justify-between'>
      
        <div className='w-[380px] h-max py-3 rounded-lg px-3 border'>
          <div className='w-full h-[70px] bg-black rounded-lg flex justify-between px-6 items-center'>
            <h1 className='text-white font-bold text-lg tracking-[2px] cursor-context-menu'>Task etc</h1>
            <div className='flex justify-center items-center  text-white text-2xl gap-2'>
              <MdDelete className='text-red-500 cursor-pointer' />
              <MdEditSquare className='text-blue-500 cursor-pointer' />
            </div>
          </div>

          <div className='w-full max-h-[240px] scrolldiv'>
            <div className='w-full h-[70px] bg-gray-200 rounded-lg mt-[10px]'></div>
           
          </div>

          <div className='w-full py-3 bg-black mt-3 rounded-lg'>
            <input type="text" className='w-[80%] h-[35px] bg-white text-black px-3 rounded-lg mx-auto block' />
            <button className='text-white font-white px-3 block mx-auto hover:bg-white hover:text-black mt-3 cursor-pointer h-[30px] rounded-lg border'>Add_Todo</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App