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
      text: 'ivo',
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

  return (
    <div className="App container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
