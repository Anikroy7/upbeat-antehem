import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { async } from '@firebase/util';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [errorMessage, setErrorMessage] = useState('')
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        setErrorMessage(error?.message)
    }
    const handelLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password);
    }


    const handelResetPassword = async () => {
        const email = emailRef.current.value;
        console.log('emeil', email);
        await sendPasswordResetEmail(email)
        toast("email sending!")

    }

    return (
        <div className='login-main-container p-5'>
            <div className='shadow-lg p-3 mb-5 bg-body rounded login-container rounded bg-white p-4 mx-auto'>
                <div>
                    <h1 className='text-black text-center '>Login From</h1>
                    <form onSubmit={handelLogin}>
                        <div className='ms-5 mt-5'>
                            <span className='text-black d-block mb-2'>Email</span>
                            <span>
                                <FontAwesomeIcon className='mt-2 me-2' icon={faUser}></FontAwesomeIcon>
                            </span>
                            <input ref={emailRef} className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your email'  type="email" name="email" id="1" required />
                        </div>
                        <div className='ms-5 mt-2 '>
                            <span className='text-black d-block mb-2'>Password</span>
                            <span>
                                <FontAwesomeIcon className='mt-2 me-2' icon={faLock}></FontAwesomeIcon>
                            </span>
                            <input ref={passwordRef} className='border-0 border-bottom w-75 text-black p-2' placeholder='
                        Type your password' type="password" name="password" id="2" required />
                            <div className='text-black mt-3 mb-3'>
                                <span className='me-2'>Forgot password?</span>
                                <span onClick={handelResetPassword} className='reset-password '>Reset password?</span>
                            </div>
                            <div className='text-black'>
                                <span>New to upbeat anthem? </span>
                                <span><Link to={'/signup'} className='text-black d-inline fw-bold'> Sign up</Link></span>
                            </div>
                        </div>
                        {
                            <p className='text-danger'>{errorMessage}</p>
                        }
                        <p className=' d-flex justify-content-center mt-3'>
                            <input className='from-button w-50 ' type="submit" value="Login" />
                        </p>
                    </form>
                </div>
                <ToastContainer />
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;