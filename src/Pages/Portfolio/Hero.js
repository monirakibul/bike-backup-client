import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Hero = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url('https://i.ibb.co/xYFL7X9/5ed1a235add5df124b882e05-blog-hero-optim.jpg')` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <p className='uppercase text-sm tracking-widest text-gray-500 mb-4'>
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='mb-5 text-5xl font-bold'>
                        Hi, I'm <span className='text-[#5651e5]'>Rakibul Hasan</span>
                    </h1>
                    <p className='py-4 text-gray-300 m-auto'>
                        I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive front-end web applications while learning back-end technologies.
                    </p>
                    <a href="https://github.com/monirakibul" class="btn btn-primary m-2" target="blank"><FontAwesomeIcon size='2x' icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/rakibul-hasan2082/" class="btn btn-primary m-2" target="blank"><FontAwesomeIcon size='2x' icon={faLinkedin} /></a>
                    <a href="mailto:rakibul.hasan2082@gmail.com" class="btn btn-primary m-2" target="blank"><FontAwesomeIcon size='2x' icon={faEnvelope} /></a>
                </div>
            </div>
        </div>
    );
};

export default Hero;