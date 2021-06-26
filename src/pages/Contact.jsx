import React from 'react';
import SmallHero from '../components/SmallHero';
import Contact from '../components/home/Contact';

import contactBg from '../assets/images/contactBg.jpg';
import Footer from '../components/Footer';

const MainContact = () => {
    return (
        <>
            <SmallHero imgUrl={contactBg} text="Contact Us" />
            <Contact />
            <Footer />
        </>
    )
}

export default MainContact;