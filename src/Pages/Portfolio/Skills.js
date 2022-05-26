import React from 'react';

const Skills = () => {
    return (
        <div class="p-5 py-10">
            <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl mt-5 font-bold mb-10 text-center tracking-widest uppercase text-[#5651e5]'>
                    Skills
                </p>
                <div class="overflow-hidden bg-white rounded shadow-lg  leading-normal w-full md:w-1/2">
                    <ul class="divide-y divide-gray-300">
                        <li class="p-4 hover:bg-gray-50 cursor-pointer font-medium"> <span className="font-bold">Expertise: </span> JavaScript, ES6, React, React Hook, React Router, Rest API, Tailwind,
                            Bootstrap5, HTML5, CSS3</li>
                        <li class="p-4 hover:bg-gray-50 cursor-pointer font-medium"><span className="font-bold">Comfortable: </span>  NodeJs, ExpressJs, MongoDB, Firebase, JWT, MaterialUI, MySQL</li>
                        <li class="p-4 hover:bg-gray-50 cursor-pointer font-medium"><span className="font-bold">Familiar: </span>  PHP, MySql</li>
                        <li class="p-4 hover:bg-gray-50 cursor-pointer font-medium"><span className="font-bold"> Tools: </span>Github, Chrome Dev Tool, Heroku, Netlify, VS Code, Figma, Photoshop</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;