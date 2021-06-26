import React from 'react';
import SmallHero from '../components/SmallHero';

import projectsImg from '../assets/images/Projects.jpg';

import Projects from '../components/home/Projects';
import Footer from '../components/Footer';

const MainProjects = () => {
    return (
        <>
            <SmallHero imgUrl={projectsImg} text="Projects" />
            <Projects />
            <Footer />
        </>
    )
}

export default MainProjects;