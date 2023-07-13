/* eslint-disable @typescript-eslint/no-floating-promises */

import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import { getAllTasks } from "../generic-crud/tasks/getAllTasks"
import AddTaskForm from "./AddTaskForm";
import TaskItem from "./TaskItem";

interface taskType {
  title: string,
  id: number,
  isFinished: boolean
}

const Tasks = () => {

  const [tasks, setTasks] = useState<taskType[]>([]);

  const navigate = useNavigate();
  const id = sessionStorage.getItem("userId");
  if(!id)
    navigate('/login');

    useEffect(() => {
      getAllTasks(sessionStorage.getItem("userId"))
      .then(result => {
        console.log("Result!!!: ");
        console.log(result);
        setTasks(result);
      })
    }, [])
    


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