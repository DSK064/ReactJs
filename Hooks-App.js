
import './App.css';
import React, {useEffect, useState, useContext} from 'react';
import Main from './one';
import Two from './two';


const FirstHook=()=>{
  const [name,setName]= useState("");
  const [counter,setCounter] = useState(0);
  function increaseCounter(){
      setCounter(counter+1);
  }
  function decreaseCounter()
  {
      setCounter(counter-1);
  }

const [details,setDetails] = useState({name:"",counter:0});
function iCounter(prev)
{
  setDetails((prev)=>({
    ...prev,
    counter:prev.counter+1
  }));
}

function dCounter(prev)
{
  setDetails((prev)=>({
    ...prev,
    counter:prev.counter-1
  }))
}

  return(
      <div>
        <input type="type" onChange={e=>{setName(e.target.value)}}></input>
      
          <h2>Counter value:{counter}</h2>
          <h2>{name} has increased:{counter}</h2>
          <button onClick={increaseCounter}>Increase</button>
          <button onClick={decreaseCounter}>Decrease</button>
          <h2>Counter value:{details.counter}</h2>
          <button onClick={iCounter}>Increase</button>
          <button onClick={dCounter}>Decrease</button>
      </div>
  )
}

const SecondHook=()=>
{
  const [counter,setCounter] = useState(0);
  const [counterByTen,setCounterByTen] = useState(10);
  function increaseCounter(){
      setCounter(counter+1);
  }
  function decreaseCounter()
  {
      setCounter(counter-1);
  }
  useEffect(()=>{document.title = counterByTen+" times clicked.";},[counterByTen])

  return(
    <div>
          <h2>Counter value:{counter}</h2>
          <button onClick={increaseCounter}>Increase</button>
          <button onClick={decreaseCounter}>Decrease</button>

          <h2>counterByTen value:{counterByTen}</h2>
          <button onClick={()=>{setCounterByTen(counterByTen+10)}}>Increase</button>
          <button onClick={()=>{setCounterByTen(counterByTen-10)}}>Decrease</button>
    </div>
  )
  

}

let ThirdHook=()=>
{
  return(
    <HelloContext.Provider value ={"hello"} />
  );
}

function App() {
  return (
    <div className="App">
      <ThirdHook />
    </div>
  );
}

export default App;
