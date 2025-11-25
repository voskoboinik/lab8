import { useState, useEffect } from 'react'
import AddTaskForm from './AddTaskForm'
import ToDoList from './ToDoList'

function App() {
  // Загружаем задачи из localStorage при старте
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  // Сохраняем задачи в localStorage при изменении tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => setTasks([...tasks, { id: Date.now(), text }])
  const removeTask = (id) => setTasks(tasks.filter(t => t.id !== id))
  const clearTasks = () => setTasks([])

  return (
    <div className="app">
      <h1>Мои задачи</h1>
      <AddTaskForm addTask={addTask} />
      <ToDoList tasks={tasks} removeTask={removeTask} />
      <button onClick={clearTasks}>Очистить всё</button>
    </div>
  )
}

export default App
