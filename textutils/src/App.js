import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react'                        //importing usestate
import About from './components/About';
import Alert from './components/Alert';
import {                                                    //importing router from react-router-dom
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // state variable telling whether dark mode is enabled or not
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg:message, //here set alert is a state that is a object, so alert will be an object now
      type:type
    })
    setTimeout (() =>{  //set timeout to show the alert message
      setalert(null);
    }, 2000)
  }
 const removeBodyClasses = () =>{ //arrow function for removing body classes
   document.body.classList.remove('bg-primary')
   document.body.classList.remove('bg-info')
 }
const toggleMode = (cls) =>{  //togglemode arrow function for toggling dark mode
  removeBodyClasses(); //remove body clas because class cant be overwritten
  document.body.classList.add('bg-' + cls) //adding cls to body to show the colour mode
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'black'; // making the html body color change also
    document.body.style.color = 'white';
    showAlert('Dark Mode is Activated', 'success')
    // document.title = 'Text Utlis-Dark'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert('Light Mode is Activated', 'success')
    // document.title = 'Text Utlis-Light'
  }
}



  return (
<>
{/* we are calling different components here with props */}
{/* <Navbar title = "Textutils"  aboutText = "About TextUtils"/>  */}
<Router>
<Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode} /> 
<Alert alert = {alert}/>  {/*here mode is a state variable and togglemode is a function setting the mode */}
<div className="container my-3">
<Routes>
          <Route  exact path="/about"  //use exact beacuse reacter router does partial matching   
          element = { <About mode = {mode} />}>
          </Route>
          <Route exact path="/"
          element =  {<Textform heading= 'Try TextUtils, Word Counter, Character Counter, Remove Extra Spaces' showAlert= {showAlert} mode= {mode}/>}>
          </Route>
 </Routes>
</div>
</Router>
</>
);
} 

export default App;