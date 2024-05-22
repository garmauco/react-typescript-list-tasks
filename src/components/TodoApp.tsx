import { useState } from "react"
import { ListTasks } from "./ListTasks"

export const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>('')
    const [listTasks, setListTasks] = useState<string[]>([])
    
    const handleAddTask = () => {
        // Aquí puedes agregar la nueva tarea a la lista
        if (!newTask.trim()) return // Si la tarea está vacía, no se agrega
        setListTasks([...listTasks, newTask]) // Se agrega la nueva tarea al arreglo
        setNewTask('') // Se vacía el campo de texto

    }

    const handleDeleteTask = (index: number) => {
        setListTasks(listTasks.filter((_, i) => i !== index))
    }

  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div>
            <input type="text" 
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Nueva tarea" />
            <button onClick={handleAddTask} >Agregar</button>
        </div>
        <ListTasks listTasks={listTasks} deleteTask={handleDeleteTask} />
    </div>
  )
}