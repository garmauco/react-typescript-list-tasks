import { Task } from "./Task"

type ListTasksProps = {
    listTasks: string[],
    deleteTask: (index: number) => void
}

export const ListTasks = ({ listTasks, deleteTask }: ListTasksProps) => {
  return (
    <div className="taskList">
        {
            listTasks.map((task,index) => (
                <Task key={index} task={task} deleteTask={() => deleteTask(index) } />
            ))
        }
    </div>
  )
}