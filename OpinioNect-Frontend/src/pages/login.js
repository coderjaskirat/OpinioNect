import React from 'react'
import {Link} from 'react-router-dom'

export default function Login(){
    const [user, setUser] = React.useState({username:"", pass: ""});
    const [users, setUsers] = React.useState([]);
    const handleSubmit= (e) => {
        if(user.username && user.pass){
            e.preventDefault();
            setUsers({...users, user})
            console.log(users)
            setUser({username:"", pass: ""})
        }
    }
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }
    return(
        <form className='form-login'>
            <h1 className='signin-text'>SIGN IN</h1>
            <h2 className="form-element">Username</h2>
            <input className="form-element-input" onChange={handleChange} type="text" id="username" name="username"value={user.username} placeholder='Enter UserName'/><br/>
            <h2 className="form-element">Password</h2>
            <input className="form-element-input" onChange={handleChange} type="password" id='pass' name="pass" value={user.pass} placeholder='Enter Password'/>
            <a href='#' className='forgot-password'>Forgot Password?</a>
            <Link type="submit" onClick={handleSubmit} className="login-button" to='/Index'>Log In</Link>
        </form>
    )
}