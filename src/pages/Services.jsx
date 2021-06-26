import React from 'react';


import SmallHero from '../components/SmallHero';
import ServicesContent from '../components/ServicesContent';

import serviceHero from '../assets/images/serviceHero.jpg';
import Steps from '../components/services/Steps';
import Offer from '../components/services/Offer';
import Building from '../components/services/Building';
import Process from '../components/services/Process';
import Consult from '../components/services/Consult';
import Renovation from '../components/services/Renovation';
import RenovationList from '../components/services/RenovationList';
import Footer from '../components/Footer';
import Terms from '../components/services/Terms';

const Services = () => {
    return (
        <>
            <SmallHero imgUrl={serviceHero} text="Services" />
            <ServicesContent />
            <Steps />
            <Offer />
            <Building />
            <Process />
            <Consult />
            <Terms />
            <Renovation />
            <RenovationList />
            <Footer />
        </>
    )
}

export default Services;