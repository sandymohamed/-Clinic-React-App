import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({title, desc}) => {
    return (
        <div className='card  p-3 m-2' data-aos="fade-up" data-aos-delay="200">
            <div className='icon'>
            <FontAwesomeIcon className='text-success fs-5' icon="fa-solid fa-check-circle" />
            </div>
            <h3  data-aos="fade-left" data-aos-delay="400">{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default Card;