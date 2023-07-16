/* eslint-disable @typescript-eslint/no-floating-promises */

import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import AddTaskForm from "./AddTaskForm";
import TaskItem from "./TaskItem";
import { trpc } from "../../utils/trpc";

interface taskType { userId: number, title: string, id: number, isFinished: boolean, }

const Tasks = () => {

  const [tasks, setTasks] = useState<taskType[]>([]);

  const navigate = useNavigate();
  const id = sessionStorage.getItem("userId");
  if(!id)
    navigate('/login');

    const res = trpc.tasks.getAllTasks.useQuery(+sessionStorage.getItem("userId")!);
    useEffect(() => {
      res.refetch();
      if (res.data !== undefined) {
        setTasks(res.data);
      }
    }, [res])
    
    


  return (
    <>
      <div className="flex flex-col items-center relative top-28">
        <AddTaskForm />
        <div>
          <ul className="w-[700px] mt-12">
            {
              tasks.map(item => (
                <TaskItem key={item.id} title={item.title} isFinished={item.isFinished} id={item.id} />
              ))
            }
          </ul>
        </div>
      </div>
      <div className="blue__gradient absolute box-border rotate-[90deg] transform-cpu-[-50%] w-60 h-60 rounded-full top-[100px] left-[-60px]" ></div>
      <div className="yellow__gradient absolute box-border rotate-[90deg] transform-cpu-[-50%] w-60 h-60 rounded-full right-[-60px]" ></div>
    </>
  )
}

export default Tasks