import React from 'react';
import './ServiceDetails.css'

const ServiceDetails = ({ service }) => {
    const { name, price, description, ratings, image } = service;
    return (
        <div className='service-details-container col-sm-12 col-md-6 col-lg-4 text-center p-2'>
            <img src={image} alt="" />
            <h5 className='service-title mt-3'>{name}</h5>
            <h5>$ {price}</h5>
            <h5 >Ratings: <span className='text-primary'>{ratings}</span></h5>
            <p>{description}</p>
            <div className='service-btn'>
                <button className='w-75 mx-auto rounded-pill'>Procced Cheakout</button>
            </div>
        </div>
    );
};

export default ServiceDetails;