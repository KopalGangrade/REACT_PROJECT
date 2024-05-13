import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() =>{
        setTime((prevTime)=> prevTime + 10);
      },10);
    }else if(!running) {
      clearInterval(interval);
    }
  
    return () => clearInterval(interval);
  }, [running]);
  

  return (
    <>
      <div className='container'>
        <h1 className='top'>01-Stopwatch</h1>
        <div className='time'>
          <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
          <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
          <span>{("0"+((time/10)%100)).slice(-2)}</span>
        </div>
        <div className="button">
          {running? (<button className='btn1' onClick={()=> {setRunning(false)}}>Stop</button>) : (<button className='btn1' onClick={()=>{setRunning(true)}}>Start</button>)}
          <button className='btn1' onClick={()=>{setTime(0)}}>Restart</button>
        </div>
      </div>
    </>
  )
}

export default App
