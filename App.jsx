import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [showButton,setShowButton]=useState(true);
  const [timerMessage,setTimerMessage]=useState('');
  const [otp, setOtp] = useState("");

  const generatePassword=()=>{
    return Math.floor(100000+Math.random()*900000);
  }
  const handleclick=()=>{
    setOtp(generatePassword());
    setShowButton(false);
    
  }
  useEffect(()=>{
    if(!showButton){
      let i=5;
      const intervalId=setInterval(()=>{
        
        
        setTimerMessage(`Expires in ${i} seconds`)
        if(i==0){
        setOtp('');
        setTimerMessage("OTP expired. Click the button to generate a new OTP.")
        clearInterval(intervalId);
        setShowButton(true);
      }
        i--;
        
      
      },1000)
      
      
        
        
      
    }
      



    
  },[showButton])


  return (
    <div className="container" >
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">Click 'Generate OTP' to get a code</h2>
      <p>{otp}</p>
      <p id="otp-timer">{timerMessage}</p> {/*future Expires in: X seconds and shows OTP expired. Click the button to generate a new OTP*/}
      {
        showButton && (
        <button id="generate-otp-button" onClick={handleclick}>Generate OTP</button>
        )}
        {/* when button clicked generate a new otp and start a 5 second countdown and disable the button while counting*/}
      
    
    
    </div>
  );
}


export default App
