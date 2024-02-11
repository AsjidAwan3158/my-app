import React from 'react';
// import logo from './logo.svg'
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
// import { type } from '@testing-library/user-event/dist/type';
import {
  // BrowserRouter,
  //  as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
function App() {
const[mode,setmode]=useState('primary');
const[text]=useState('white');
const[formtext,setformtext]=useState('black');
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    message:message,
    type:type
  });
  setTimeout(() => {
    
    setAlert(null);
  }, 1000);

}
const handlemode=()=>{

  if(mode==='primary'){
  setmode('dark');
  setformtext('white')
  document.body.style.backgroundColor ='black';
  showAlert("Dark Mode is Enabled","success");
}else{
  setmode('primary');
  document.body.style.backgroundColor ='white';
  setformtext('black');
  showAlert("light Mode is Enabled","success");
  }
}
  return (
   <>

<Navbar title="TextUtils" mode={mode} text={text} handlemode={handlemode} showAlert={showAlert}/>
<Alert alert={alert} />
<div className='container'>
    <Routes>
          <Route path="/about" element={<About mode={mode} text={formtext} />} >
            
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" element={ <Textform heading="Enter your Text"  mode={mode}  text={formtext} showAlert={showAlert}/>}>
          </Route>
          </Routes>

         
{/* <About/> */}
</div>

</>
  );
}

export default App;
