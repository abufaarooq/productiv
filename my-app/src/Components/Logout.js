import React, {  useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import './Logout.css';
import axios from "axios";
import { useAuth } from "./auth";

function Logout () {
    const [responses, setResponse] = useState([]);
    const [deleteResponse, setDeleteResponse] = useState([]);
    const [query, setQuery] = useState("");
    const auth = useAuth();
    useEffect(() => {
        getData()
    }, []);
    
    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }
    

    const getData = () => {
        let username = 'user';
        let password = '1234';
        let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
        axios.get(`http://localhost:8080/users/Admin/items`, {
             headers: {
                 Authorization : basicAuthHeader
        }
   }
    ).then(response => setResponse(response.data))
        .catch(error => {console.log("An error happened: " + error)})
    }

    const navigate = useNavigate();

   const deleteRequest = (userName, id) => {
        axios.delete(`http://localhost:8080/users/${userName}/items/${id}`).then(response => setDeleteResponse(response.userName,response.id))
       .catch(error => {console.log(error.data)})
        getData();
   }
   const searchFeature = (id) => {
    let username = 'user';
        let password = '1234';
        let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
        axios.get(`http://localhost:8080/users/Admin/items/${id}`, {
        headers: {
            Authorization : basicAuthHeader
    }
        }).then(response => setQuery(response.id))
        .catch(error => {console.log(error.data)})
        console.log(query);
   }
    return (
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
        <div>
        <div className="header">
        <a href="/" onClick={() => navigate('/')} className="logo">Productiv</a>
        <div className="header-right">
       {/* Create loader! */}
        <a href="welcome" onClick={() => navigate('welcome')}>My Account</a>
        <a href="/" onClick={handleLogout}>Logout</a>
        </div>
        </div>
        <h1>Welcome!</h1>
        <button className="add-button" onClick={() => navigate('add')}>Add</button>
        <input type="text" placeholder="  Search..." onChange= {searchFeature}></input>
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
                 responses.filter((response => {
                    return query.toLowerCase() === '' ? response : response.description.toLowerCase().includes(query);
                 })).map(response => (
                 <tr>
                 <td>{response.id}</td>
                 <td>{response.description}</td>
                 <td>{response.completionDate}</td>
                 <td>{response.isDone}</td>
                 <td><button className="update-button" onClick={() => navigate('update', {state: response.id})}>Update</button></td>
                 <td><button className="delete-button" onClick={() => deleteRequest(response.userName, response.id)}>Delete</button></td>
                 </tr>
                 ))
                }
            </table>
        </div>
    )
}

export default Logout;