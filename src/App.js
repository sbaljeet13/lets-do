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
  const [id, setId] = useState(1);

  function onInputChange(event) {
      setNewTask(event.target.value);
  }

  function onClickAddBtn() {
    tasks.push({ id: id, title:newTask});
    setId(id + 1);
    setTasks(tasks);
  }

  return (
    <div>
      <Header />
      <Form newTask={newTask} onClick={onClickAddBtn} onChange={onInputChange} />
      <TaskList tasks={tasks} />
    </div>
  );
}
