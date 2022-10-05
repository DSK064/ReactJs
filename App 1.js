
import './App.css';

function App() {

  let num1 = 10;
  let num2 = 20;

function multiply(num1,num2)
{
  return num1*num2;
}

  function add(num1,num2)
  {
    return num1+num2;
  }

  return (
    <div id="app">
      {multiply(num1, num2)}<br></br>{add(num1,num2)}
    </div>
  );
}

export default App;
