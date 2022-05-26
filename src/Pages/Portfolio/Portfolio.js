import React from 'react';
import Contact from './Contact';
import Educations from './Educations';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Portfolio = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Educations />
            <Contact />
        </>
    )
};

export default Portfolio;