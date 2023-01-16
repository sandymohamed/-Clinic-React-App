import React from 'react';
import { useTranslation } from 'react-i18next'
import './home.scss'
// import {avatar} from "../../assets"
const Home = () => {
    const { t } = useTranslation();


    return (
        <div id='home' className='home d-flex  justify-content-center align-items-center row overflow-hidden p-3'>
            <div className='col-sm-6' data-aos="fade-up" data-aos-delay="200">
                <p className='h1 head-title'>{t('intro-title')}</p>
                <p className='h5 '>{t('intro')}</p>

                <a href='#contact'
                    type="button"
                    className=" button text-decoration-none text-center text-white border border-1 rounded-6"
                > {t('contact')} </a>

            </div>
            <div className='col-sm-6'  data-aos="flip-left" data-aos-delay="400">
                <img src="https://img.freepik.com/premium-photo/3d-character-male-cartoon-with-eye-glasses-yellow-orange-polo-shirt-good-profile-picture_477250-8.jpg" className='w-100 m-1' alt='photo' />
            </div>

        </div>
    );
};

export default Home;