import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../src/music-image/banner1.jpg'
import banner2 from '../../../../src/music-image/banner2.jpg'
import banner3 from '../../../../src/music-image/banner3.jpg'

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
                    <h1>My Own Project Enter Sandman</h1>
                    <p>This is avialabe in youtube.this is the great song of mettalica. i compoosed it.I use diffent kind of sound for making this song</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>My Upcoming Projects Time's</h3>
                    <p>It will be avialabe in youtube and other social platfrom very soon.this is a sycodelic rock song composed by our own band.In this song i use a spicial instrument which sound is so cool.So,if you want to listen this song, please stay with us</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>My Most Favourite Albumn</h3>
                    <p>I released many kinds of album in this year. i works for many rock songs which is my best work. i coomposed those music with my own fiil. i use diffent types of instument for composed.Such as guitar, drums , bass, keyboard, ukelele etc.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;