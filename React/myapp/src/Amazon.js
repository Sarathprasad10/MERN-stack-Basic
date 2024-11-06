import React, { useState } from 'react'

function Amazon() {
    const [formData,setFormData]=useState({
        email:"",
        pwd:""

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
    <div className='first'><h1>Amazon</h1>
    <div>
        <h2>Login</h2>
        <br></br>
    <p>Email
    <input type="email" name='email' value={formData.email} onChange={(event)=>handleInputChange(event)}></input>
    </p>
    <p>password
    <input type="password" name ="pwd" value={formData.pwd} onChange={(event)=>handleInputChange(event)}></input>
    </p>
    <br></br>
    <button className="submit">Submit</button>
   
    </div>
    </div>
    </form>
  )
}

export default Amazon