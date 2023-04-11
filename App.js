
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);

  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been Enabled","success");
      document.title='TextUtis Dark Mode';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been Enabled","success");
      document.title='TextUtis Light-Mode';
    }
  }
  
  return (
    <>
    <Navbar title="TextUtis" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container" my-3>
    <TextForm heading="Enter The Text To Analysis"/>
   
    </div>
    
    </>
  );
}

export default App;
