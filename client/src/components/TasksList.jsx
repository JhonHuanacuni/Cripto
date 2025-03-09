import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api"; 
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
      console.log(res);
    }
    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => ( //recorre todas la tareas y muestra 
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}