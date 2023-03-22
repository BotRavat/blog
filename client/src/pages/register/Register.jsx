import { NavLink } from 'react-router-dom';
import './register.css';

export default function Register(){
    return(
        <div className='register'>
           <span className='registerTitle'>Register</span>
    <form className='registerForm'>
        <label>Username</label>
        <input type="text" placeholder='Enter your username..' className='registerInput'/>
        <label>Email</label>
        <input type="email" placeholder='Enter your email..' className='registerInput'/>
        <label>Password</label>
        <input type="password" placeholder='Enter your password..'  className='registerInput'/>
        <button className='registerButton'>Register</button>
    </form>
        <button className='registerLoginButton'>
        <NavLink className='link' to='/login'>Login</NavLink>
        </button>

        </div>
    )
}