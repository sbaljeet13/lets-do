import './App.css';
import Form from './Form';
import Header from './Header';
import TaskList from './TaskList';
import { useState } from 'react';

export default function App() {
  const exampleTasks = [
    {id: 0, title:"Grocery Shopping", isComplete: true, isDeleted: false},
    {id: 1, title:"Cook Dinner", isComplete: false, isDeleted: false}
  ];

  const [tasks, setTasks] = useState(exampleTasks);
  const [newTask, setNewTask] = useState("");
  const [id, setId] = useState(2);

  function addTask() {
    setTasks([...tasks, { 
      id: id,  
      title: newTask, 
      isComplete: false, 
      isDeleted: false 
    }]);

    setId(id + 1);
    setNewTask('');
  }

  return (
    <div>
      <Header />
      <Form newTask={newTask} onTextChange={setNewTask} onClick={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
