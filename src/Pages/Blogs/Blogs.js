import React, { useEffect, useState } from 'react';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import Blog from './Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://bike-backup.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <ChangePageTitle pageTitle="Blogs - Bike Backup" />
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Blogs
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center m-5'>
                {
                    blogs.map((blog, index) => <Blog key={index} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;