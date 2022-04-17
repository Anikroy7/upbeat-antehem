import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='login-main-container p-5'>
            <div className='shadow-lg p-3 mb-5 bg-body rounded login-container rounded bg-white p-4 mx-auto'>
                <h1 className='text-black text-center '>Login From</h1>
                <div>
                    <p className='text-black'>Username</p>
                    <p>
                        <span>icon</span>
                        <input className='border-0 border-bottom w-75 text-black' placeholder='
                        Type your username' type="text" name="name" id="" />
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;