import React, { useReducer, useState, useRef, useEffect } from 'react'
import '../styles/App.css';
const App = () => {
  const [toggle, settoggle ] = useState(false ); 
  const [background, setbackground] = useState('white');  


  return (
    <div className="main" style={{ background : `${background}` }}>
        { <Popup settoggle={settoggle}  setbackground={setbackground} /> } 
    </div>

  )
}


export default App;


const Popup = ({setbackground })=>{
     const bgref = useRef(); 
     const handle = () =>{
           console.log(bgref.current.value)
           setbackground((pre)=>bgref.current.value); 
     }
     return (
          <div className='position'> 
          <input type="text" ref={bgref}></input>
          <button onClick={()=>handle(bgref.current.value)}> Set background </button>
      </div>
     )
}