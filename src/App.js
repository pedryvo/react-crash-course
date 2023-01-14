import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';

const App = () => {
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

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App container">
      <Header />
      { tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks to show.' }
    </div>
  );
}

export default App;
