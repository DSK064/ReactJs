import './App.css';
import pic from './DSK.jpg'
/*
let Title=()=>
{
  return(
  <>
  <div id="title">
  <h1><p><u>Resume</u></p></h1>
  </div>
  </>
);
}


let Headding=()=>
{
  return(
    <>
    <div id="headding">
    <div id="image">
    <img src={pic} alt="picture" height="150" width="150"></img>
    </div>
    <div id="name">
      <h2>D SAI KUMAR</h2>
    </div>
    </div>
    
    </>
  
);
}
*/

let Left=()=>
{
  return(
    <>
      <div id="left">
        <img id="image" src={pic} alt="dp" height="150" width="150"></img>
        <div id="contact">
        <h2 className="h2left">CONTACT</h2><hr id="hr_left"></hr>
        <h3 className="h3left">Email:</h3>
        <h4 className="h4left">saichowdary064@gmail.com</h4><br></br>
        <h3 className="h3left">Phone:</h3>
        <h4 className="h4left">8008180191</h4><br />
        <h3 className="h3left">Address:</h3>
        <h4 className="h4left">Guntur, Andhra Pradesh</h4>
        </div>

        <div id="skills">
        <h2 className="h2left">SKILLS</h2><hr id="hr_left"></hr>
        <h3 className="h3left">Technical:</h3>
        <h4 className="h4left">C, Java, Sql</h4><br></br>
        <h3 className="h3left">Languages:</h3>
        <h4 className="h4left">English, Hindi, Telugu, Kannada</h4><br />
        <h3 className="h3left">projects:</h3>
        <h4 className="h4left">Flora Detection system</h4>
        <h4 className="h4left">Hospital management system</h4>
        </div>
        
      </div>
    </>
  
);
}

let Right=()=>
{
  return(
    <>
      <div id="name">
        <h1>D SAI KUMAR</h1>
        <h3>Trainee Software Engineer</h3><hr></hr><br/>
        <h2>CAREER OBJECTIVE</h2><hr></hr>
        <p>To work in an organization which provides me with ample opportunities to enhance my skills and knowledge along with contributing to the growth of the organization.</p>
        <h2>WORK EXPERIENCE</h2><hr></hr>
        <p>IVY COMPTECH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 08-2022 - present</p>
        <h2>INTERNSHIP</h2><hr></hr>
        <h3>Full Stack Web Development:</h3>
        <p>Joined the internship through remote mode and was given training on HTML, CSS and JavaScript, then designed a project "WEBSITE FOR VDP SOLUTIONS".</p>

      </div>
      
    </>   
  );
}

function App() {
  return (
    <>
      <div className='App'>
        <Left />
        <Right />
      </div>
    </>
        
  );
}

export default App;
