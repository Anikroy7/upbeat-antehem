import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    return (
        <div className='login-main-container p-5'>
            <div className='shadow-lg p-3 mb-5 bg-body rounded login-container rounded bg-white p-4 mx-auto'>
                <div>
                    <h1 className='text-black text-center '>Login From</h1>

                    <p className='ms-5 mt-5'>
                        <span className='text-black d-block mb-2'>Email</span>
                        <span>
                            <FontAwesomeIcon className='mt-2 me-2' icon={faUser}></FontAwesomeIcon>
                        </span>
                        <input className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your email'  type="email" name="email" id="" />
                    </p>
                    <p className='ms-5 mt-2 '>
                        <span className='text-black d-block mb-2'>Password</span>
                        <span>
                            <FontAwesomeIcon className='mt-2 me-2' icon={faLock}></FontAwesomeIcon>
                        </span>
                        <input className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your password' type="password" name="password" id="" />
                        <p className='text-black mt-3 '>Forgot password?</p>
                        <p className='text-black'>
                            <span>New to upbeat anthem? </span>
                            <span><Link to={'/signup'} className='text-black d-inline fw-bold'> Sign up</Link></span>
                        </p>
                    </p>
                    <p className=' d-flex justify-content-center mt-3'>
                        <input className='from-button w-50 ' type="submit" value="Login" />
                    </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;