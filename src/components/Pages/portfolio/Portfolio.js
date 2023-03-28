import React from 'react';
import Card from '../../Card/Card';
import { useTranslation } from 'react-i18next';
import './portfolio.scss';
import {img1, img2, img3, img4, img5, img6, img7, img10, img11, img12, img13, img14, img15, img16,} from '../../../assets/index'

const Portfolio = () => {

    const { t } = useTranslation();

    const portfolioCards = [
        { title: "title", desc: "my description here..............", image: [img1, img2 ]},
        // { title: "title", desc: "my description here..............", image: [img2 ]},
        { title: "title", desc: "my description here..............", image: [img3 ]},
        { title: "title", desc: "my description here..............", image: [img4 ]},
        { title: "title", desc: "my description here..............", image: [img5 ]},
        { title: "title", desc: "my description here..............", image: [img6 ]},
        { title: "title", desc: "my description here..............", image: [img7 ]},
        { title: "title", desc: "my description here..............", image: [img10, img11] },
        // { title: "title", desc: "my description here..............", image: [img11]},
        { title: "title", desc: "my description here..............", image: [img12] },
        { title: "title", desc: "my description here..............", image: [img13] },
        { title: "title", desc: "my description here..............", image: [img14, img15, img16] },
    ]

    return (
        <div id="portfolio" className='portfolio p-2'>
            <div className='portfolio-content'>
                <h1 className='text-center head-title text-success' >{t('Services')}</h1>
                <p className='text-center'>{t('lorem')} </p>


            </div>
            <div className='cards d-flex flex-wrap row '  >

                {portfolioCards.map((item, i) => (
                    <div className='col-sm-4' >
                        <Card key={i} title={item.title} description={item.desc} imageUrls={item.image} />
                    </div>
                ))
                }

            </div>



            
        </div>
    );
};

export default Portfolio;