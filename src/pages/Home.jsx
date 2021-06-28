import React from 'react';

// Components
import AboutSection from '../components/home/About';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import ServicesSection from '../components/home/Services';
import Partners from '../components/home/Partners';
// import Contact from '../components/home/Contact';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <Projects seemore />
            <Testimonial />
            <Partners />
            {/* <Contact /> */}
            <Footer />
        </>
    )
}

export default Home;