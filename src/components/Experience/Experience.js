import React from 'react';
import "./experience.scss"
import { useTranslation } from 'react-i18next'

const Experience = () => {
    const { t } = useTranslation();

    return (
        <div className='ex ms-5 me-5 bg-white p-5 d-flex flex-wrap justify-content-evenly align-items-center'   data-aos="flip-left" data-aos-delay="200">

            <div className='ex-item text-center ' data-aos="fade-up" data-aos-delay="400">
                <h1>+15</h1>
                <p className='h5'>{t('years')}</p>
            </div>
    

        </div>
    );
};

export default Experience;