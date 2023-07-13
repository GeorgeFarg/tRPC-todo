/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react"
import { checkTask } from "../generic-crud/tasks/checkTask";
import { deleteTask } from "../generic-crud/tasks/deleteTask";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface taskType {
    title: string,
    id: number,
    isFinished: boolean
  }
const TaskItem = ({ title, id, isFinished }: taskType) => {
    const [checked, setChecked] = useState(isFinished);
    
  return (
        <li
        className="flex justify-around w-full items-center  border-b border-b-blue-950 py-5">
            <div className="flex items-center gap-4">
                <input className="" type="checkbox" checked={checked} 
                onChange={async () => {
                    try {
                        await checkTask(id, !checked);
                        console.log("check");
                        
                        setChecked(e => !e)
                    } catch (error) {
                        console.error(error);
                    }
                }} 
                />
                {title}
            </div>
                <button 
                className="px-4 py-2 bg-red-700 rounded-lg text-white"
                onClick={async () => {
                    try {
                        await deleteTask(id)
                        console.log("Deleted");
                        
                    } catch (error) {
                        console.error(error);
                    }
                }}
                >Delete</button>
        </li>
  )
}

export default TaskItem