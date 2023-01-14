import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'pedro',
      day: '5 january',
      reminder: true
    },
    {
      id: 2,
      text: 'rocha',
      day: '6 january',
      reminder: false
    },
    {
      id: 3,
      text: 'dias',
      day: '7 january',
      reminder: false
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show.' }
    </div>
  );
}

export default App;
