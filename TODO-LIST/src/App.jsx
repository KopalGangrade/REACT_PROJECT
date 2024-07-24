import './App.css'
import { useState } from 'react';
import Input from './components/Input';

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <h1>TODO-LIST</h1>
      <Input taskList= {taskList} setTaskList={setTaskList}/>
      <div>
        {taskList.map((task, index)=> 
          <li key={index}>{task}</li>
        )}
      </div>
    </>
  );
}

export default App
