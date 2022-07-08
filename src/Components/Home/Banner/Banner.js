import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/music-image/banner1.jpg'
import banner2 from '../../../images/music-image/banner2.jpg'
import banner3 from '../../../images/music-image/banner3.jpg'

const Banner = () => {
    return (
        <Carousel className='mt-2'>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-warning fs-10'>Vacal Tuning</h1>
                    <p>This is avialabe in youtube.this is the great song of mettalica. i compoosed it.I use diffent kind of sound for making this song</p>
                </Carousel.Caption> fs-10
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-warning fs-10'>Mixing and Mastering</h1>
                    <p>This is avialabe in youtube.this is the great song of mettalica. i compoosed it.I use diffent kind of sound for making this song</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='text-warning fs-10'>Audio ads Production</h3>
                    <p>It will be avialabe in youtube and other social platfrom very soon.this is a sycodelic rock song composed by our own band.In this song i use a spicial instrument which sound is so cool.So,if you want to listen this song, please stay with us</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;