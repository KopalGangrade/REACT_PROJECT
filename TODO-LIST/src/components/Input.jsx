import React from 'react';
import { useState } from 'react';

const Input = (taskList, setTaskList) => {
    const [input, setInput] = useState("");

    function button(e){
        e.preventDefault()
        setTaskList([...taskList, input]);
        setInput("");
    }

  return (
    <>
        <form action="">
            <input type="text" value={input} onChange={(e)=> {setInput(e.target.value)}} placeholder='Enter Here' className='input' />
            <button className='button' onClick={button}>Add</button>
            <div>
                {taskList.map((task, index)=>
                    <li key={index}>{task}</li>
                )}
            </div>
        </form>
    </>
  )
}

export default Input