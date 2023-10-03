import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function App() {
  // State variables to store form input values
  const navigate   = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can do something with the form data here (e.g., send it to an API)
    console.log('Submitted data:', { name, email, age });


    axios.post("http://localhost:3333/createUser",{name,email,age})
    .then(result => 
    {console.log(result)
    alert("data sent successfully to the backend ")
    navigate('/')
}
   
    )
    .catch(err => {console.log(err)
    alert("there was an error")})


  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input
            type="text"
            id="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="label">Age:</label>
          <input
            type="number"
            id="age"
            className="input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default App;
