import React from 'react';

const Blog = () => {
    return (
        <div className='m-4'>
            <section>
                <h4>Why are we using firebase ?</h4>
                <p>We use firebase for implement authentication system in our projects. we can can also host free our project on firebase. it also give us database system. firebase alo provide google analytics.</p>
                <h6>Alternative of firebase ?</h6>
                <li>Back4app</li>
                <li>Parse</li>
                <li>App write</li>
                <li>Deployd</li>
                <li>Nhost</li>
            </section>
            <section>
                <h3>What other service firebase provide?</h3>
                <li>Realtime Database</li>
                <li>File store</li>
                <li>Storage</li>
                <li>Hosting</li>
                <li>Cloud function</li>
                <li>Security rules</li>
                <li>Emulator suite</li>
            </section>
        </div>
    );
};

export default Blog;