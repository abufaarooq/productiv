import React, {useState} from "react";
import './Welcome.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function Welcome () {


    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
    const [invalidCreds, setInvalidCreds] = useState(false);
    const [response, setResponse] = useState('');
    const navigate = useNavigate();
    const handleUsernameChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setUserName(value);
    }
    const handlePasswordChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setPassWord(value);
    }
    const auth = useAuth();
    const Login = (e) => {
        e.preventDefault();
        auth.login(userName)
        if (userName === 'Admin' && passWord === '1234') {
            setIsLoginSuccessful(true);
            setInvalidCreds(false);
            Credentials(isLoginSuccessful);
            navigate('Welcome', {replace: true })
            axios.get(`http://localhost:8080/users/Admin/items`).then(response => console.log(response.data))
            .catch(error => setIsLoginSuccessful(false)); // Fix this for an error pafe backend and not condtionals, 404 or 500 error via axious.
        }
        else {
            setInvalidCreds(true);
            InvalidCredentials(invalidCreds);
            setIsLoginSuccessful(false);
            Credentials(isLoginSuccessful);
        }
    }
    const Credentials = () => {
        if (isLoginSuccessful)  
        {  
            return response;
        }
    }
    const InvalidCredentials = () => {
        if (invalidCreds)  
        {  
            return (
                        <div className="error-message">Invalid Credential!</div>
                    )
        }
    }
    return  (
    <div>
        <h1 className = 'firtheading'>pro·duc·tiv</h1>
        <h1 className= "secondheading">/prəˈdəktiv/</h1>
        <h1 className= "thirdheading">adjective</h1>
        <h1 className="fourthheading">achieving or producing a significant amount or result.</h1>
        <form className = 'location-form'>
            <div>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" name="username" value = {userName} onChange = {handleUsernameChange}></input>
            </div>
            <div>
            <label className="password">Password </label>
            <input htmlFor="password" type = 'password' id="password" name="password" value = {passWord} onChange = {handlePasswordChange}></input>
            </div>
            <div>
            <button className ='button' type="submit" value= {response} onClick= {Login}>Login</button>
            <button className ='button' type="submit" value= "Sign up" onClick={() => navigate('Registration')}>Sign up</button>
            </div>
            <div>
            <InvalidCredentials/>
            <Credentials/>
            </div>
        </form>
    </div>
    )
    }

export default Welcome;