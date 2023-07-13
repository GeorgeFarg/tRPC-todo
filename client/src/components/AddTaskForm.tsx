/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react"
import { addTask } from "../generic-crud/tasks/addTask";


const AddTaskForm = () => {
    const [input, setinput] = useState("");
  return (
    <form className="flex gap-5 h-fit" onSubmit={async e => {
        e.preventDefault()
        await addTask( sessionStorage.getItem("userId") ,input);
    }}>
        <input 
        placeholder="Task name..." 
        type="text" 
        className="h-10 w-[500px] border-2 border-slate-400 rounded-lg font-bold px-5"
        value={input}
        onChange={(e) => {setinput(e.target.value)}}
        />
        <button type="submit" className="h-full self-end flex justify-center items-center bg-blue-600 text-white py-2 px-6 rounded-lg">Add</button>
    </form>
  )
}

export default AddTaskForm