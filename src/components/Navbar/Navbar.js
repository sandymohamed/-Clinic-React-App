import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next'

// Contains the value and text for the options
const languages = [
    { value: 'en', text: "English" },
    { value: 'ar', text: "Arabic" },

]

const NavbarComponent = () => {

    // It is a hook imported from 'react-i18next'
    const { t } = useTranslation();

    const [lang, setLang] = useState('');

    // This function put query that helps to
    // change the language
    const handleChange = (e) => {
        // e.preventDefault();
        setLang(e);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e);

    }


    return (
        <Navbar className='p-3 ' expand="lg" style={{ "backgroundColor": "#00856F" }}>
            <Container fluid>
                <Navbar.Brand className='text-white' href="#">Abd-ELghany ELsawy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="me-auto my-2 my-lg-0  "
                        style={{ maxHeight: '100px' }}
                        navbarScroll

                    >
                        <Nav.Link className='text-white text-capitalize' href="#home">{t('nav-home')}</Nav.Link>
                        <Nav.Link className='text-white text-capitalize' href="#portfolio">{t('nav-services')}</Nav.Link>
                        <Nav.Link className='text-white text-capitalize' href="#about">{t('nav-about')}</Nav.Link>
                        <Nav.Link className='text-white text-capitalize' href="#contact">{t('contact')}</Nav.Link>
                        {/* <Nav.Link className='text-white text-capitalize' href="#portfolio">{t('nav-services')}</Nav.Link> */}

                     

                    </Nav>

                    <NavDropdown className="me-3 mb-4 mb-md-0 text-white " title={t('lang')} id="navbarScrollingDropdown" value={lang} onSelect={handleChange}>
                        {languages.map(item => {
                            return (
                                <NavDropdown.Item key={item.value}
                                    eventKey={item.value}>{item.text}</NavDropdown.Item>
                            )
                        })}

                    </NavDropdown>
                    <button type="button" className="btn btn-outline text-white border border-1 rounded-pill me-1">{t('contact')}</button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;