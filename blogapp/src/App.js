import React, {useState} from 'react'
// import About from './components/About'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm' 

function App() {
    const [mode, setMode] = useState('light');
    

    const toggleMode = ()=>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor = '#0b336e';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }
    
  return (
    <>
    <NavBar title = "BlogApp" aboutText = "About BlogApp" mode = {mode} toggleMode = {toggleMode} />
    <TextForm heading = "Enter the text to analyze below" mode = {mode}/>
    {/* <About /> */}
    </>
  )
}

export default App