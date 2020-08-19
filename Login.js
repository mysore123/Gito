import React from 'react';
import { Button } from 'semantic-ui-react';
import './login.css'
const Login = () => {
    return ( 
        <div className="login">
                <form>
                <h1>Sign In</h1>
                <h5>E-mail</h5>
                <input type="text"/>
                <h5>Password</h5>
                <input type="text"/>
                <button>SignIn</button>
            </form>
            <button>Create Account</button>
        </div>
     );
}
 
export default Login;