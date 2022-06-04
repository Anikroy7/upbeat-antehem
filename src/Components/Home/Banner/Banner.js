import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/music-image/banner1.jpg'
import banner2 from '../../../images/music-image/banner2.jpg'
import banner3 from '../../../images/music-image/banner3.jpg'
/* import anik from '../../../images/music-image/anik.jpg'
import hridoy from '../../../images/music-image/hridoy.jpg'
import sakil from '../../../images/music-image/sakil.jpg' */
// import istiak from '../../../images/music-image/istiak.jpg'
/* import saurov from '../../../images/music-image/saorov.jpg'
import rafiqul from '../../../images/music-image/rafiqul.jpg'
import roni from '../../../images/music-image/roni.jpg'
 */

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
                    <h1 className='text-warning fs-10'>Anik Roy</h1>
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
                    <h1 className='text-warning fs-10'>Tawser Islam Hridoy</h1>
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
                    <h3 className='text-warning fs-10'>Sakil Hossain</h3>
                    <p>It will be avialabe in youtube and other social platfrom very soon.this is a sycodelic rock song composed by our own band.In this song i use a spicial instrument which sound is so cool.So,if you want to listen this song, please stay with us</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={istiak}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-warning fs-10'>Istiak Ahmed</h3>
                    <p>I released many kinds of album in this year. i works for many rock songs which is my best work. i coomposed those music with my own fiil. i use diffent types of instument for composed.Such as guitar, drums , bass, keyboard, ukelele etc.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={saurov}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-warning fs-10'>Sourov Sony</h3>
                    <p>I released many kinds of album in this year. i works for many rock songs which is my best work. i coomposed those music with my own fiil. i use diffent types of instument for composed.Such as guitar, drums , bass, keyboard, ukelele etc.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={roni}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-warning fs-10'>Roni Hossain</h3>
                    <p>I released many kinds of album in this year. i works for many rock songs which is my best work. i coomposed those music with my own fiil. i use diffent types of instument for composed.Such as guitar, drums , bass, keyboard, ukelele etc.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={rafiqul}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-warning fs-10'>Rafiqul Islam</h3>
                    <p>I released many kinds of album in this year. i works for many rock songs which is my best work. i coomposed those music with my own fiil. i use diffent types of instument for composed.Such as guitar, drums , bass, keyboard, ukelele etc.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
};

export default Banner;