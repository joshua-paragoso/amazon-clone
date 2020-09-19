import React from 'react'
import './Login.css'
import {Link} from "react-router-dom";
import { SettingsSystemDaydreamOutlined } from '@material-ui/icons';
function Login() {
    return (
    <div className='login'>
        <Link to ='/'>
            <img className="login__logo"
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className='login__container'> {/*containers user email and password*/}
            <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                        {/* <iput type='text' value={email} onChange={e => SettingsSystemDaydreamOutlined(e.targer.value)}/> */}
                        <input type='test' />
                    <h5>Password</h5>
                        <input type='password' />
                    <button className='login__signInButton'>Sign In</button>

                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>Create your amazon account</button>{/*Register button if you dont have an account */}
        </div>

        
    </div>
        
    )
}

export default Login
