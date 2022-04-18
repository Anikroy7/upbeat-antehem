import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Signup.css'
const Signup = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handelFromSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(password);

        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='login-main-container h-100 p-5'>
            <div className='shadow-lg p-3 pb-5 mb-5 bg-body rounded login-container rounded bg-white p-4 mx-auto'>
                <form onSubmit={handelFromSubmit}>
                    <h1 className='text-black text-center mb-3'>Signup </h1>

                    <p className='ms-5 mt-3'>
                        <span className='text-black d-block mb-0'>Username</span>
                        <span>
                            <FontAwesomeIcon className='mt-2 me-2' icon={faUser}></FontAwesomeIcon>
                        </span>
                        <input className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your username' type="text" name="name" id="name" />
                    </p>
                    <p className='ms-5 mt-2'>
                        <span className='text-black d-block mb-0'>Email</span>
                        <span>
                            <FontAwesomeIcon className='mt-2 me-2' icon={faUser}></FontAwesomeIcon>
                        </span>
                        <input className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your Email' type="email" name="email" id="email" />
                    </p>
                    <p className='ms-5 mt-2 '>
                        <span className='text-black d-block mb-0'>Password</span>
                        <span>
                            <FontAwesomeIcon className='mt-2 me-2' icon={faLock}></FontAwesomeIcon>
                        </span>
                        <input className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your password' type="password" name="password" id="password" />
                        <p className='text-black mt-3 '>Forgot password?</p>
                        <p className='text-black'>
                            <span>Already have an account? </span>
                            <span><Link to={'/login'} className='text-black d-inline fw-bold'> Login</Link></span>
                        </p>
                    </p>
                    <p className=' d-flex justify-content-center mt-3'>
                        <input className='from-button w-50 ' type="submit" value="Sign up" />
                    </p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;