import React, { useState } from 'react'

const NameInput = ({name,setName}) => {
    const[error,setError]=useState('');

    const handleChange = (e) =>{
      const value = e.target.value;
      if(/[^a-zA-Z]/.test(value)){
        setError('Only letters and spaces allowed!');
      }else{
        setError('');
        setName(value);
      }
    };
    const clearInput=()=>{
        setName('');
        setError('');
    };
  return (
    <div>
        <input
            type="text"
            value={name}
            onChange= {handleChange}
            placeholder="Enter your name"
        />
        <button onClick={clearInput}>Clear</button>
        {error && <p style={{color:'red'}}>{error}</p>}
      
    </div>
  );
};

export default NameInput
