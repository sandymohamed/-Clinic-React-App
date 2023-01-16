import React from 'react';
import Card from '../../Card/Card';
import './portfolio.scss'


const Portfolio = () => {

    const portfolioCards = [
        { title: "title", desc: "my description here.............." },
        { title: "title", desc: "my description here.............." },
        { title: "title", desc: "my description here.............." },
        { title: "title", desc: "my description here.............." },
        { title: "title", desc: "my description here.............." },

    ]

    return (
        <div id="portfolio" className='portfolio p-2'>
            <div className='portfolio-content'>
                <h1 className='text-center head-title text-success' >Services</h1>
                <p className='text-center'>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


            </div>
            <div className='cards d-flex flex-wrap row '  >

                {portfolioCards.map((item, i) => (
                    <div className='col-sm-4' >

                        <Card key={i} title={item.title} desc={item.desc} />
                    </div>
                ))
                }

            </div>



            
        </div>
    );
};

export default Portfolio;