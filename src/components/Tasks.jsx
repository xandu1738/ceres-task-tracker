import Task from "./Task"
import '../index.css'

const Tasks = ({tasks, onDelete, onToggle}) => {
    
  return (
    <>
    <ul>
    {
        tasks.map((task) => (
            <Task key={task.id} id={task.id} reminder={task.reminder} task={task.text} day={task.day} onToggle={onToggle} onDelete={onDelete}  />
        ))
    }
    </ul>
    </>
  )
}

export default Tasks