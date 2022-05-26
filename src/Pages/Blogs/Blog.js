import React from 'react';

const Blog = ({ blog }) => {
    const { title, body } = blog;
    return (
        <div className="p-4">
            <div className="border-2 border-gray-200 rounded-lg">
                <div className="p-6">
                    <h1 className="mb-2 text-lg font-medium text-gray-900">{title}</h1>
                    <p className="mb-2 text-sm tracking-wide text-gray-700">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;