import { useState } from 'react'

function AddTaskForm({ addTask }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() !== '') {
      addTask(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddTaskForm
