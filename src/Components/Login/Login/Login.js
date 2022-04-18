import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {

    const [errorMessage, setErrorMessage] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        setErrorMessage(error.message)
    }


    const handelOnSumit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password)

    }

    return (
        <div className='login-main-container p-5'>
            <div className='shadow-lg p-3 mb-5 bg-body rounded login-container rounded bg-white p-4 mx-auto'>
                <div>
                    <h1 className='text-black text-center '>Login From</h1>
                    <form onSubmit={handelOnSumit}>
                        <p className='ms-5 mt-5'>
                            <span className='text-black d-block mb-2'>Email</span>
                            <span>
                                <FontAwesomeIcon className='mt-2 me-2' icon={faUser}></FontAwesomeIcon>
                            </span>
                            <input className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your email'  type="email" name="email" id="" required />
                        </p>
                        <p className='ms-5 mt-2 '>
                            <span className='text-black d-block mb-2'>Password</span>
                            <span>
                                <FontAwesomeIcon className='mt-2 me-2' icon={faLock}></FontAwesomeIcon>
                            </span>
                            <input className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your password' type="password" name="password" id="" required />
                            <p className='text-black mt-3 '>Forgot password?</p>
                            <p className='text-black'>
                                <span>New to upbeat anthem? </span>
                                <span><Link to={'/signup'} className='text-black d-inline fw-bold'> Sign up</Link></span>
                            </p>
                        </p>
                        {
                            <p className='text-danger'>{errorMessage}</p>
                        }
                        <p className=' d-flex justify-content-center mt-3'>
                            <input className='from-button w-50 ' type="submit" value="Login" />
                        </p>
                    </form>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;