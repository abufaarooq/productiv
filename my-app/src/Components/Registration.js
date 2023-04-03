import React from "react";
import './Registration.css';

function Registration () {
    return  (
    <div class="text">
      <form class = "location-form">
      <div>
        <label for="username"> First Name </label>
        <input type="text" id="username" name="username"></input>
        </div>
        <div>
        <label for="username"> Last Name </label>
        <input type="text" id="username" name="username"></input>
        </div>
        <div>
        <label for="username"> E-mail </label>
        <input type="text" id="username" name="username"></input>
        </div>
        <div>
        <label for="username"> Username </label>
        <input type="text" id="username" name="username"></input>
        </div>
        <div>
        <label for="password"> Password </label>
        <input type="password" id="password" name="password"></input>
        </div>
        <div>
        <button type="submit" value= "Submit"> Submit </button>
        </div>
    </form>
    </div>
    )
}

export default Registration;