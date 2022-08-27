import './App.css';
import Form from './Form';
import Header from './Header';
import TaskList from './TaskList';
import { useState } from 'react';

export default function App() {
  // const tasks = [
  //   {id: 1, title:"Grocery Shopping"},
  //   {id: 2, title:"Cook Dinner"}
  // ];

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [id, setId] = useState(0);

  function addTask() {
    setTasks([...tasks, { id: id, title: newTask, isComplete: false }]);
    setId(id + 1);
    setNewTask('');
  }

  function removeTask(key) {
    const remainingTasks = tasks.filter(task => task.id !== key);
    
    setTasks(remainingTasks);
  }

  return (
    <div>
      <Header />
      <Form newTask={newTask} onTextChange={setNewTask} onClick={addTask} />
      <TaskList tasks={tasks} removeTask={(key) => removeTask(key)} />
    </div>
  );
}
