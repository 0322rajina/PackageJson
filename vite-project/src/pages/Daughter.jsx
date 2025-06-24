import React from 'react'

const Daughter = ({property,changeproperty}) => {
 const changeJagga=()=>{
    changeproperty("pokhara")
 }
 
    return (
    <div style={{backgroundColor:"lightpink", padding:"20px", marginButton:"10px"}}>
      I am a daughter. I got {property} from App.
      <button
      onClick={changeJagga}
      >Change to pokhara</button>
    </div>
  )
}

export default Daughter
