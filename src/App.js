import { useEffect, useState } from "react";
import './App.css';



function App() {
  const [sec,setSec]=useState(0);
  const [min,setMin]=useState(0);
  const [hour,setHour]=useState(0);
  const [isStart,setIsStart]=useState(false);
  const [isStop,setIsStop]=useState(true);
  
  function timer(){
   console.log(sec,'timer')
   setSec(sec=>sec+1)
    if(sec>59){
        setSec(0);
        setMin(min=>min+1)
    }
    if(min>59){
        setMin(0);
        setHour(hour=>hour+1);
    }
 }   





useEffect(()=>{
let timerId=null;

    if(isStart && !isStop){
       timerId = setInterval(timer, 1000);
    }
    else if(isStop){
        clearInterval(timerId)
    }
    return ()=>{
        clearInterval(timerId);
    }
},[sec,isStart])



    function start(){
      setIsStart(true);
      setIsStop(false);
     
   
    }
    function stop(){
     setIsStart(false);
     setIsStop(true);
    }
    function reset(){
       setHour(0)
       setMin(0)
       setSec(0)
       setIsStart(false);
       setIsStop(true);
    }
  return (
    <div className="App">
      <div className="stopwatch-container">
        <h1>Stopwatch</h1>
        <div className="timer-box">
          <span>{hour<10?"0"+hour:hour}</span>
          <span>:</span>
          <span>{min<10?"0"+min:min}</span>
          <span>:</span>
          <span>{sec<10?"0"+sec:sec}</span>
        </div>
        <div className="timer-btn-box">
          <button onClick={() => start()}>Start</button>
          <button onClick={() => stop()}>Stop</button>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
