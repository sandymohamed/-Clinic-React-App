import React from 'react';
import { useTranslation } from 'react-i18next';

import avatar from "../../../assets/avatar.webp"

const About = () => {
    const { t } = useTranslation();

    return (
        <div id='about' className='about d-flex  justify-content-center align-items-center row p-5 m-2' >
            <div className='about-image col-sm-6'  data-aos="flip-left" data-aos-delay="400">
                <img src={avatar} alt="" className='w-100' />
            </div>
            <div className='about-content col-sm-6'  data-aos="fade-up" data-aos-delay="200">
                <p className='h1 text-success head-title'>{t('nav-about')}</p>
                <p className='h4'>{t('about-title')}</p>
                <p className=''>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

            </div>


        </div>
    );
};

export default About;