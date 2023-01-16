import React from 'react';
import "./experience.scss"

const Experience = () => {
    return (
        <div className='ex ms-5 me-5 bg-white p-5 d-flex flex-wrap justify-content-evenly align-items-center'   data-aos="flip-left" data-aos-delay="200">
            <div className='ex-item text-center ' data-aos="fade-up" data-aos-delay="400">
                <h1>+5000</h1>
                <p className='h5'>Patient</p>
            </div>
            <div className='ex-item text-center ' data-aos="fade-up" data-aos-delay="400">
                <h1>+15</h1>
                <p className='h5'>years of experience</p>
            </div>
            <div className='ex-item text-center ' data-aos="fade-up" data-aos-delay="400">
                <h1>+5000</h1>
                <p className='h5'>Patient</p>
            </div>

        </div>
    );
};

export default Experience;