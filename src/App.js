import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {backOutDown } from "@wellyshen/use-web-animations";

function App() {


  const { ref, playState, getAnimation } = useWebAnimations({...backOutDown }); 


  return (
    <div >
      <div className = 'target' ref={ref}> </div>
      <h1>PIAIC Boot Camp 2020 : Class 13 - Web Animation using @wellyshen/use-web-animations</h1>
      <h2>Student : Muhammad Javaid Nawab </h2>
      Current Animation backOutDown - State :  {playState}
      <button onClick = {()=> getAnimation().pause()} >Pause</button>
      <button onClick = {()=> getAnimation().play()} >Play</button>
      
    </div>
  );
}

export default App;
