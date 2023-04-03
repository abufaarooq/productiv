import React, {  useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import './Logout.css';
import axios from "axios";
import { useAuth } from "./auth";

function Logout () {
    const [responses, setResponse] = useState([]);
    const [deleteResponse, setDeleteResponse] = useState([]);
    const auth = useAuth();
    useEffect(() => {
        getData()
    }, []);
    
    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }

    const getData = () => {
         axios.get(`http://localhost:8080/users/Admin/items`).then(response => setResponse(response.data))
        .catch(error => {console.log("An error happened:" + error)})
    }

    const navigate = useNavigate();

   const deleteRequest = (userName, id) => {
        axios.delete(`http://localhost:8080/users/${userName}/items/${id}`).then(response => setDeleteResponse(response.userName,response.id))
       .catch(error => {console.log(error.data)})
        getData();
   }
    return (
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
        <div>
        <div className="header">
        <a href="/" onClick={() => navigate('/')} className="logo">Productiv</a>
        <div className="header-right">
       {/* Create loader! */}
        <a href="Welcome" onClick={() => navigate('Welcome')}>My Account</a>
        <a href="/" onClick={handleLogout}>Logout</a>
        </div>
        </div>
        <h1>Welcome!</h1>
            <button className="add-button" onClick={() => navigate('Add')}>Add</button>
        </div>
            <table className="list-of-itmes">
                <tr>
                    <th>Number</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {
                 responses.map(response => (
                 <tr>
                 <td>{response.id}</td>
                 <td>{response.description}</td>
                 <td>{response.completionDate}</td>
                 <td>{response.isDone}</td>
                 <td><button className="update-button" onClick={() => navigate('Update')}>Update</button></td>
                 <td><button className="delete-button" onClick={() => deleteRequest(response.userName, response.id)}>Delete</button></td>
                 </tr>
                 ))
                }
            </table>
        </div>
    )
}

export default Logout;