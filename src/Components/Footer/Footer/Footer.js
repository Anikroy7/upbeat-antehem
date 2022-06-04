import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='container'>
            <hr className='footer-line' />
            <div className="footer-container row">
                <div className='col-7' >
                    <h3 className='footer-title'>Sound of Souls</h3>
                </div>
                <div className='col-5 row'>
                    <div className='col-6'>
                        <a href='/home'>About online music</a>
                        <a href='/home'>Read our blog</a>
                        <a href='/home'>Sign up to coompose</a>
                        <a href='/home'>Add your band</a>
                    </div>
                    <div className='col-6'>
                        <a href='/home'>Get hela</a>
                        <a href='/home'>Read FAQs</a>
                        <a href='/home'>View all citys</a>
                        <a href='/home'>Studio near me</a>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 mt-4">
                    <p href='/home'>copyright &copy; 2020 online music</p>
                </div>
                <div className="col-6 d-flex justify-content-evenly mt-4">
                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div >
    );
};

export default Footer;