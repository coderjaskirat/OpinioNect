import React from "react"
import {Link} from "react-router-dom"

export default function SignUpForm(){
    const [Formdata, setFormdata] = React.useState({
        UserName: "",
        Email: "",
        PassWord: "",
        ConfirmPassword: ""
    });
    function handleChange(event){
        setFormdata(prev => {return{
            ...prev, [event.target.name]: event.target.value
        }})
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(Formdata)
        console.log(Formdata.PassWord===Formdata.ConfirmPassword ? "Password confirmed succesfully": "Password does not match")
    }
    return(
        <form className='form-signup' onSubmit={handleSubmit}>
            <h1 className='signin-text'>SIGN UP</h1>
            <h2 className="form-element">Username</h2>
            <input className="form-element-input" type="text" onChange={handleChange} value={Formdata.UserName} id="usersname" name="UserName" placeholder='Enter UserName'/><br/>
            <h2 className="form-element">Email</h2>
            <input className="form-element-input" type="email" onChange={handleChange} value={Formdata.Email} id="email" name="Email" placeholder='Enter Email'/><br/>
            <h2 className="form-element">Password</h2>
            <input className="form-element-input" type="password" onChange={handleChange} value={Formdata.PassWord} id='pass' name="PassWord" placeholder='Enter Password'/>
            <h2 className="form-element">Confirm Password</h2>
            <input className="form-element-input" type="password" onChange={handleChange} value={Formdata.ConfirmPassword} id='pass' name="ConfirmPassword" placeholder='Password'/>
            <p>Already a member?  <Link to="/">Log In</Link></p>
            <Link className="login-button" to="/Index">Register</Link>
        </form>
    )
}