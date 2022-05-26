import React from 'react';

const Educations = () => {
    return (
        <div class="p-5 py-10 bg-cover bg-center" style={{ backgroundImage: `url('https://i.ibb.co/xYFL7X9/5ed1a235add5df124b882e05-blog-hero-optim.jpg')` }}>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl mt-5 text-white font-bold mb-10 text-center tracking-widest uppercase'>
                    Education
                </p>
                <div class="overflow-hidden bg-white rounded shadow-lg  leading-normal w-full md:w-1/2">
                    <ul class="divide-y divide-gray-300">
                        <li class="p-4 hover:bg-gray-50 cursor-pointer"> <span className="font-medium">Royal Media College</span> </li>
                        <li class="p-4 hover:bg-gray-50 cursor-pointer"><span className="font-medium">HSC (Passed)</span></li>
                        <li class="p-4 hover:bg-gray-50 cursor-pointer"><span className="font-medium">2021</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Educations;