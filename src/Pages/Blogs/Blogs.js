import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    return (
        <div>
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Blogs
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center m-5'>
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>
    );
};

export default Blogs;