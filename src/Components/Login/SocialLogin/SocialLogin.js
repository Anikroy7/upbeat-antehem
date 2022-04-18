
import React from 'react';
import './SocialLogin.css'
import facebook from '../../../images/social-image/facebook.png'
import google from '../../../images/social-image/google.png'
import github from '../../../images/social-image/github.png'

const SocialLogin = () => {
    return (
        <div className=''>
            <div className='justify-content-center d-flex align-items-center'>
                <div style={{ height: '2px', backgroundColor: 'gray' }} className='w-25'></div>
                <p className='m-2 mt-1 text-secondary'>or</p>
                <div style={{ height: '2px', backgroundColor: 'purple' }} className='w-25 text-info'></div>
            </div>
            <div className='social-login-container text-center me-4 mt-2'>
                <span className='ms-3' title='login with google'><img src={google} alt="" /></span>
                <span className='ms-3' title='login with facebook'><img src={facebook} alt="" /></span>
                <span className='ms-3' title='login with github'><img src={github} alt="" /></span>
            </div>
        </div>
    );
};

export default SocialLogin;