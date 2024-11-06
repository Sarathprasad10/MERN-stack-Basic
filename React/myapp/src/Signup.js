import React ,{ useState} from 'react'

import './Signup.css';
function Signup() {
    const[formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        pwd:""
    })
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setFormData((prevData)=>({...prevData,[name]:value})) //... shallow copy  to accept previous data without affecting the new data
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(formData,"data")
    }
    
  return(
   
    <form onSubmit={handleSubmit}>
    <div className="App">
    <h1>
      Regestration
    </h1>
    <div className="first">
    <p>enter your first NAME
    <input type="text" name="firstname" value={formData.firstname} onChange={(event)=>handleInputChange(event)}></input>
    </p>
    <p>last name
    <input type="text" name="lastname" value={formData.lastname} onChange={(event)=>handleInputChange(event)}></input>
    </p>
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
  );
}

export default Signup

    
  
