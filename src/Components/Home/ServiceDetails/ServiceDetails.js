import React from 'react';
import './ServiceDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ServiceDetails = ({ service }) => {
    const { name, price, description, ratings, image } = service;
    return (
        <div className='service-details-container col-sm-12 col-md-6 col-lg-4 text-center mb-3 p-2'>
            <img src={image} alt="" />
            <h5 className='service-title mt-3'>{name}</h5>
            <h5>$ {price}</h5>
            <h5 >Ratings: <span className='text-primary'>{ratings}</span></h5>
            <p>{description}</p>
            <div className='service-btn'>
                <button className='mb-4 w-75 mx-auto rounded-pill'>Procced Cheakout <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div >
    );
};

export default ServiceDetails;