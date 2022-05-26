import React from 'react';
import ProjectItem from './ProjectItem';


const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-2xl font-bold mb-10 text-center tracking-widest uppercase text-[#5651e5]'>
                    Projects
                </p>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='QUICK STORE - Inventory management system'
                        backgroundImg="https://i.ibb.co/4KzW00G/Quick-Store.png"
                        live='https://quickstore-fa064.web.app/'
                        server='https://github.com/monirakibul/warehouse-management-server'
                        client='https://github.com/monirakibul/warehouse-management-clients'
                    />
                    <ProjectItem
                        title='MK PHOTOGRAPHY - A Photography website'
                        backgroundImg="https://i.ibb.co/k3x8rHX/MK-Photography-1.png"
                        live='https://photographer-afc00.web.app/'
                        server=''
                        client='https://github.com/monirakibul/independent-service-'
                    />
                    <ProjectItem
                        title='BIKE BACKUP - A professional bike parts manufacturer.'
                        backgroundImg="https://i.ibb.co/hydsrzb/Bike-Backup.png"
                        live='https://bikebackup.web.app/'
                        server='https://quickstore-fa064.web.app/'
                        client='https://quickstore-fa064.web.app/'
                    />
                    <ProjectItem
                        title='Laptop Mela - ProductAnalysis Website'
                        backgroundImg="https://i.ibb.co/x2nqjF6/image.png"
                        live='https://jocular-liger-645f7c.netlify.app/'
                        server=''
                        client='https://quickstore-fa064.web.app/'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;