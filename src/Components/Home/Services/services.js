import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'
import service1 from '../../../Services-image/service1.jpg'
import service2 from '../../../Services-image/service2.jpg'
import service3 from '../../../Services-image/service3.jpg'
import service4 from '../../../Services-image/service4.jpg'
import service5 from '../../../Services-image/service5.jpg'
import service6 from '../../../Services-image/service6.jpg'

const services = () => {
    const services = [
        {
            id: 1, name: "Voice Over", description: 'Voice-overs are used in video games and on-hold messages,[3] as well as for announcements and information at events and tourist destinations.', price: 2000, ratings: "☆☆☆☆☆", image: service1
        },
        { id: 2, name: "Mixing and Mastering", description: 'DynOne was designed from the ground up to put 5 bands of quality parallel compression at your fingertips. Transparent and adjustable filters. ', price: 5000, ratings: '☆☆☆☆☆', image: service2 },
        { id: 3, name: "Podcast Editing", description: 'Place the audio material in sequence (e.g. intro narration, interview, outro). When you import multiple tracks, the audio will appear about islelf .', ratings: '☆☆☆☆', price: 3000, image: service3 },
        { id: 4, name: "Beat Making", description: 'Have you ever wondered what drum beat is the most famous in the world? I was definitely curious, so I did some research and found that the “Funky Drummer” for every day.', price: 1500, ratings: '☆☆☆☆☆', image: service4 },
        { id: 5, name: "Vocal tuning", description: 'Over the last decade, autotune has evolved from a subtlety producers and engineers use to alter vocals and correct out of tune notes to a full-blown identity for certain musicians.', price: 3000, ratings: '☆☆☆☆', image: service5 },
        { id: 6, name: "Audio ads Production", description: '. Although this highly sought after robotic effect can be created by a vocoder and talkbox it’s important not to get them confused. The vocoder, which was invented in 1938..', price: 6000, ratings: '☆☆☆☆', image: service6 }

    ]




    return (
        <div className='mt-5'>
            <h1 className='text-center'> Our Services</h1>
            <div className='row g-2 mt-5 m-2 sevices-container'>

                {services.map(service => <ServiceDetails
                    service={service}
                    key={service.id}
                ></ServiceDetails>)}
            </div>

        </div>
    );
};

export default services;