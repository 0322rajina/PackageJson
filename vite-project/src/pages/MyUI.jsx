import React, { useState } from 'react'
import NameInput from './NameInput';

const MyUI = () => {
    //   const name ="techspire";
const[name,setName]= useState("techspire");
// // const count=0
const[count,setCount]=useState(0);
const handleClick=()=>{
   setCount(count + 2);

};
  return (
    <div>
       <NameInput name={name} setName={setName} />
       <p>{name}</p>
       <p>{count}</p>
       <button onClick={handleClick}>Click Me</button>
    <p>I am a react</p> 
    
    </div>
  )


  
}

export default MyUI;
