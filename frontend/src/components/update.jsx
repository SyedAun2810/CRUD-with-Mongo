import { useEffect, useState } from "react";
import { useParams ,Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
export default function Update(){
    const {id}=useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
        axios.put('http://localhost:3333/updateuser/'+id ,{name, email, age}).
        then(result => {console.log(result)
        navigate('/')})
        .catch(err => {console.log(err)})
    };




     
    return (
        <div>
      <h1>Update User</h1>
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
        <button type="submit" className="submit-button">Update User</button>
      </form>
    </div>
    )
}