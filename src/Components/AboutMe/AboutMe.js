import React from 'react';
import myself from '../../images/my-pic/my-pic.jpg'
const AboutMe = () => {
    return (
        <div>
            <div className='text-center'>

                <img style={{ width: '500px ', height: '500px' }} src={myself} alt="" />
            </div>
            <h1>What i want to do in future?</h1>
            <p>I want to do remote job for any company. For this, i join this course. I Learn a lots of things in this course. i always want to devlop my skills. and learn somthing new.</p>
        </div>
    );
};

export default AboutMe;