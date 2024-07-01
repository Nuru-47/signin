import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    pincode: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    let newValue = value;
    if (name === 'firstName' || name === 'lastName') {
      newValue = value.replace(/[^A-Za-z]/g, '');
      
      if (name === 'lastName') {
        newValue = newValue.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
      }
    } else if (name === 'phoneNumber' || name === 'pincode') {
      newValue = value.replace(/[^0-9]/g, '');
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormSubmitted(true);
  };

  return (
    <div>
      {formSubmitted ? (

        <p>Form Submitted!</p>
       
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <br /><br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <br /><br />
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              required
            />
          </label>
          <br /><br />
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Phone number should be 10 digits"
              required
            />
          </label>
          <br /><br />
          <label>
            Pincode:
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              pattern="[0-9]{6}"
              title="Pincode should be 6 digits"
              required
            />
          </label>
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
