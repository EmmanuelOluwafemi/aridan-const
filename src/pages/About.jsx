import React from 'react';
import Hero from '../components/about/Hero';
import Grid from '../components/about/Grid';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Partners from '../components/home/Partners';

const About = () => {
    return (
        <>
            <Hero />
            <Grid 
                color="#FDFAF5" 
                title="Our <br />Vision"
                content="We provide tailored real asset investment solutions founded on independent advice, specialist financial expertise and the insight only the world’s leading commercial property firm can offer. <br /><br />The team partners with clients over the longer term to invest and deploy their capital. Combining specialist financial services skills with real estate expertise the team can deliver individual, independent strategic advice and implementation for real asset investors, whether directly to the physical asset or indirectly through debt and / or equity."
            />
            <Grid 
                color="#FFF" 
                right 
                title="Our <br />Mission"
                content="We provide tailored real asset investment solutions founded on independent advice, specialist financial expertise and the insight only the world’s leading commercial property firm can offer.
                <br /><br />
                The team partners with clients over the longer term to invest and deploy their capital. Combining specialist financial services skills with real estate expertise the team can deliver individual, independent strategic advice and implementation for real asset investors, whether directly to the physical asset or indirectly through debt and / or equity.
                "
            />
            <Testimonial />
            <Partners />
            <Footer />
        </>
    )
}

export default About;