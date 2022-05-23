import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Lasted Products
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center m-5'>
                {
                    products.slice(0, 6).map(product => <SingleProduct
                        key={product._id}
                        product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;