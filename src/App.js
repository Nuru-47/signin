

import React, {useState, useEffect}from "react";
import "./App.css";
function App(){
  const initialValues ={firstname:"",lastname:"",address:"",Phone:"",pincode:""};
  const [formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false)
  const handleChange=(e)=>{
     console.log(e.target)
     const {name,value}=e.target;
     setFormValues({...formValues,[name]:value})
     console.log(formValues)
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

  }

  useEffect(()=>{
    console.log(formErrors);
  if (Object.keys(formErrors).length===0 && isSubmit){
    console.log(formValues);
  }
  },[[formErrors, formValues, isSubmit]])
  const validate=(values)=>{
    const errors={}
    const firstnameRegex = /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/;
    const phoneRegex = /^\+?[0-9]{1,3}[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/;
    const pincodeRegex = /^\d{6}$/;
    const lastnameRegex = /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/;

    if(!values.firstname){
      errors.firstname = "firstname is reqired";
    }else if(!firstnameRegex.test(values.firstname)){
      errors.firstname= "This not a valid firstname format"
    }
    if(!values.lastname){
      errors.lastname = "lastname is required";
    }else if(!lastnameRegex.test(values.lastname)){
      errors.lastname= "This not a valid lastname format"
    }
    
    if (!values.Phone) {
      errors.Phone = "Phone number is required";
    } else if (!phoneRegex.test(values.Phone)) {
      errors.Phone = "Invalid phone number format";
    }
    if(!values.pincode){
      errors.pincode = "Pin Code is reqired";
    }else if(!pincodeRegex.test(values.pincode)){
      errors.pincode= "This not a valid pin code format"
    }
 return errors;
  };
  return (
    <div className="container">
     { Object.keys(formErrors).length===0 && isSubmit ? (<div className="ui message success">Logged in Succesfully</div>):null
      
     }
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>First name:</label>
            <input type="text" name="firstname" placeholder="firstname" value={formValues.firstname} onChange={handleChange} />
          </div>
          <p>{formErrors.firstname}</p>
          <div className="field">
            <label>Last name:</label>
            <input type="text" name="lastname" placeholder="lastname" value={formValues.lastname} onChange={handleChange} />
          </div>
          <p>{formErrors.lastname}</p>
          <div id="add" className="field">
            <label  >Address:</label>
            <textarea name="address" placeholder="Address" value={formValues.address} onChange={handleChange} required></textarea><br /><br />
          </div>
          <div className="field">
            <label>Phone:</label>
            <input type="text" name="Phone" placeholder="Phone number" value={formValues.Phone} onChange={handleChange} />
          </div>
          <p>{formErrors.Phone}</p>
          <div className="field">
            <label>Pin Code:</label>
            <input type="text" name="pincode" placeholder="Pin Code" value={formValues.pincode} onChange={handleChange} />
          </div>
          <p>{formErrors.pincode}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>

      </form>
    </div>
  )
}
export default App;

