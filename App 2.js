
import './App.css';
import React from 'react'
/*
let checkPalindrome=(num)=>
{
  let revNum = 0;
  let temp = num;
  while(num > 0)
  {
    let rem = num % 10;
    revNum = (revNum * 10) + rem;
    num = parseInt(num / 10);
  }
  if(revNum === temp)
    return "yes, It's a palindrome";
  else
    return "Not a palindrome!"
}
*/

let Student=(props)=>
{
  return (
    <>
  <h1>Name: {props.name}</h1>
  <h2>Branch: {props.branch}</h2>
  <h3>USN: {props.usn}</h3>
  </>)
}
let Student1=({name,branch,usn})=>
{
  return (
    <>
  <h1>Name: {name}</h1>
  <h2>Branch: {branch}</h2>
  <h3>USN: {usn}</h3>
  </>)
}

const student={
  name: "DSK",
  branch: "CSE"
}

class Demo extends React.Component
{
  render()
  {
    return(
      <>
      <h1>name: {student.name}</h1>
      <h2>branch: {student.branch}</h2>
      </>
    )
  }
}

function App() {
  return (
    //<h1>{checkPalindrome(121)}</h1>
    <div className='App.css'>
      <Student name="SaiKumar" branch="CSE" usn="CS031" />
      <Student1 name="ABC" branch="ECE" usn="1234" />
      <Demo/>
    </div>
)}

export default App;
