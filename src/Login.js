import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";


function Login() {

    const history = useHistory(); //program to change url
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth =>{
            //if login was successful
            history.push('/');
        }).catch(error => alert(error.message)) //else return error
    }

    const register = e =>{
        e.preventDefault();

        //some fancy firebase register
        //if everything is done right, a user will be created
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            //if auth is good, push to home page
            if(auth){
                history.push('/');
            }
        }).catch(error => alert(error.message)) //else return error
    }
    
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
                        <input 
                            type='text' 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                        />

                    <h5>Password</h5>
                        
                        <input 
                            type='password' 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />

                    <button
                        type='submit'
                        onClick={signIn} 
                        className='login__signInButton'>Sign In
                    </button>

                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>
                    Create your amazon account
                </button>{/*Register button if you dont have an account */}
        </div>

        
    </div>
        
    )
}

export default Login
