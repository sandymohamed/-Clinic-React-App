import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();


  return (
    <div className='m-0 p-o row' style={{ "backgroundColor": "#00856F" }}>
      <div className='col-sm-6' >
        <h1 className='text-white m-3 '>{t('intro-title')}</h1>
      </div>

      <div className='col-sm-6 d-flex justify-content-center align-items-center'>
        <a
          className='col-1'
          href='https://www.facebook.com/profile.php?id=100063817818791'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-facebook" className='fs-3 m-5 text-white' />
        </a>

        <a
          className='col-1 whatsapp_float'
          href="https://wa.me/+201125570826"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-whatsapp" className='fs-3 m-5 text-white' />

        </a>
      </div>

      {/* <FontAwesomeIcon icon="fa-brands fa-twitter" className='fs-4 m-1 text-light' />
                <FontAwesomeIcon icon="fa-brands fa-linkedin" className='fs-4 m-1 text-light' />
                <FontAwesomeIcon icon="fa-brands fa-facebook" className='fs-4 m-1 text-light' />  */}
      <p className='text-center text-light'>2022 &#169; Abd-ELghany ELsawy	</p>

    </div>
  );
};

export default Footer;