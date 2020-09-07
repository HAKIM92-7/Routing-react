import React from 'react'
import Auth from './Auth';
const Login2 = (props) => {
    return (
        <div>
            <h2>You must log in to view the page</h2>
            <button onClick={()=>{
            Auth.login(()=>{props.history.push("/Admin")}) }}>Log In</button>
            
            
        </div>
    )
}

export default Login2
