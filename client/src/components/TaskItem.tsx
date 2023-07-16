/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react"
import { trpc } from "../../utils/trpc";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface taskType {
    title: string,
    id: number,
    isFinished: boolean
  }
const TaskItem = ({ title, id, isFinished }: taskType) => {
    const [checked, setChecked] = useState(isFinished);
    

    const check = trpc.tasks.finishTask.useMutation();

    const deleteTask = trpc.tasks.deleteTask.useMutation();


  return (
        <li
        className="flex justify-around w-full items-center  border-b border-b-blue-950 py-5">
            <div className="flex items-center gap-4">
                <input className="" type="checkbox" checked={checked} 
                onChange={() => {
                    try {
                        setChecked(e => !e);
                        check.mutate({taskId: id, isFinished: !isFinished});
                        console.log("Check");
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
                        await deleteTask.mutateAsync(id);
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