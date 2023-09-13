import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import axios from "axios";
export default function Display() {
    const navigate=useNavigate();
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3333/getusers').then(
        result => {setData(result.data)
        }
    )
    .catch(error => {alert(error)})
  },[])

  function handledelete(id){
    axios.delete('http://localhost:3333/deleteuser/'+id)
    .then(result => {console.log(result) 
    window.location.reload();})
    .catch(error => {alert(error)
    alert("Error deleting user")})
  }

  return (
    <div>
      <table className="display-table">
        <thead>
          <tr className="tablehead">
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
             <tr  className="tablehead" key={item.name}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>
                <Link to={`/update/${item._id}`} className="btn btn-success">
                    Edit
                </Link>
                <Button variant="contained" color="success" onClick={(e)=> handledelete(item._id)}>
                    Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

