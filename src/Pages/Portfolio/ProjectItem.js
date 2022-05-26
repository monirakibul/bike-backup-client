import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ live, server, client, backgroundImg, title }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <img className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                <div className=' flex items-center justify-center'>
                    <a href={live} target="_blank">
                        <span className='block text-[15px] text-center m-2 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Demo</span>
                    </a>
                    <a href={client} target="_blank">
                        <span className='block text-[15px] text-center m-2 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Github (Client)</span>
                    </a>
                    {
                        server && <a href={server} target="_blank"> <span className='block text-[15px] text-center m-2 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Github (Server)</span> </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;