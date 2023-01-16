import React, { useEffect, useState } from 'react';
import './App.scss'
import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Pages/Home/Home';
import NavbarComponent from './components/Navbar/Navbar';
import Portfolio from './components/Pages/portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Footer from './components/Pages/Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faPhoneVolume, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import { fa } from '@fortawesome/free-regular-svg-icons'

import { faFacebook, faLinkedin, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faFacebook, faLinkedin,faWhatsapp,faPhoneVolume ,faMobilePhone )

function App() {

	// It is a hook imported from 'react-i18next'
	const { t } = useTranslation();

	const helmetContext = {};

	const [dir, setDir] = useState('rtl');

	useEffect(() => {
		AOS.init();

		if (window.location.href.indexOf("en") > -1) {
			setDir("ltr")
		} else {
			setDir("rtl")
		}

	}, [])

	return (
		<div className="App overflow-hidden w-100 p-0 m-0">
			<HelmetProvider context={helmetContext}>

				<Helmet htmlAttributes={{ dir: dir }} />
				{/* <h1>{t('intro')}</h1>
           <h1>{t('welcome')}</h1> */}
				<NavbarComponent />
				

					<Home  />
					<div className="experience-position">
						<Experience />
					</div>
					<Portfolio />
					<About />
					<Contact />
					<Footer />



			</HelmetProvider>
		</div>
	);
}

export default App;
