import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const imgAuth = '7bf6a572a5a09c32951b2b05c6608139';


    function useDisplayImage() {
        const [result, setResult] = React.useState("");

        function uploader(e) {
            const imageFile = e.target.files[0];

            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                setResult(e.target.result);
            });

            reader.readAsDataURL(imageFile);
        }

        return { result, uploader, setResult };
    }
    const { result, uploader, setResult } = useDisplayImage();

    const handleAddProduct = async e => {
        e.preventDefault()
        const formData = new FormData();
        const image = e.target.image.files[0];
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgAuth}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const product = {
                        name: e.target.name.value,
                        minimum: e.target.minimum.value,
                        available: e.target.available.value,
                        price: e.target.price.value,
                        description: e.target.description.value,
                        img: img,
                    }

                    fetch('http://localhost:5000/product', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            toast.success('Product Added');
                            setResult('');
                            e.target.reset();
                        })
                } else {
                    toast.error('Select a image file')
                }
            })

    }
    return (
        <div className='w-11/12 lg:w-6/12  '>
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Add Product
            </h1>
            <div class="p-6 rounded-lg shadow-lg  bg-white">
                <form onSubmit={handleAddProduct}>
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Name"
                            name='name' />
                    </div>
                    <div class="form-group mb-6">
                        <div class="flex items-center justify-center w-full">
                            <label for="image" class="flex flex-col w-full border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                {
                                    result ?
                                        <img src={result} alt="" className='w-1/3 max-h-30 mx-auto' />
                                        :
                                        <div class="flex flex-col items-center justify-center pt-7" id="show">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p class="pt-1 pb-4 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                Select Product Image</p>
                                        </div>
                                }

                            </label>

                            <input accept="image/*" onChange={(e) => uploader(e)} name='image' type="file" class="hidden" id='image' />
                        </div>
                    </div>
                    <div class="form-group mb-6">
                        <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Minimum Order Quantity"
                            name='minimum' />
                    </div>
                    <div class="form-group mb-6">
                        <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Available Quantity"
                            name='available' />
                    </div>
                    <div class="form-group mb-6">
                        <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Price"
                            name='price' />
                    </div>
                    <div class="form-group mb-6">
                        <textarea
                            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "  rows="3" name="description"
                        ></textarea>
                    </div>

                    <button type="submit" class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;