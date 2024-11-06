import React, { useState } from 'react'

export default function State() {
  const defaultName="name";
    const[formData,setFormData]=useState({
     
       name:defaultName
    })
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setFormData((prevData)=>({...prevData,[name]:value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(formData,"data")

    }
    
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <p>enter  the {formData.name}</p>
        <input type='text' value="name" onChange={(event)=>handleInputChange(event)}></input>
        <br></br>
        <button type='submit'>Submit</button>
    </div>
    </form>
  )
}
