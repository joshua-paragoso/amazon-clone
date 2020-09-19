import React from 'react'
import './Login.css'
import {Link} from "react-router-dom";
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
                    <h5>
                        
                    </h5>
                </form>
        </div>

        
    </div>
        
    )
}

export default Login
