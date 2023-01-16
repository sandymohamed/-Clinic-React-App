import './contact.scss';
import avatar from "../../../assets/avatar.webp"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div id="contact" className='contact d-flex  justify-content-center align-items-center row p-5 m-2'>

            <div  className='contact-content col-12'  data-aos="fade-up" data-aos-delay="200">
                <p className='h1  text-center text-success text-capitalize head-title'>{t('contact')}</p>
                <p className='h4'>Entenda quem somos e por que existimos</p>
                <p className=''>
                <FontAwesomeIcon icon="fa-solid fa-mobile" /> 01009898060 /  01125570826
                </p>
                <p className=''>
                <FontAwesomeIcon icon="fa-solid fa-phone-volume" /> 0863818100                   </p>
            </div>
            <div className='contact-image d-flex flex-column justify-content-center col-12 p-2' >
                <p className='h3'>Matay: </p> 
                <p className='h2'>{t('a-address')} </p> 

                <iframe
                className='map m-4'
                    title='map'
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=مطاى,د.عبدالغني اسماعيل الصاوي&t=&z=13&ie=UTF8&iwloc=&output=embed`}

                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    data-aos="flip-left" data-aos-delay="400">
                </iframe>

            </div>
            <div className='contact-image d-flex flex-column justify-content-center col-12 p-2'>
                <p className='h3'>Bany-Mazar: </p> 
                <p className='h2'>{t('b-address')} </p> 
                <iframe
                className='map m-4'
                    title='map'
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=د.عبدالغني اسماعيل الصاوي , بنى مزار&t=&z=13&ie=UTF8&iwloc=&output=embed`}

                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    data-aos="flip-right" data-aos-delay="600">
                </iframe>
            </div>
    
        </div>
    );
};

export default Contact;