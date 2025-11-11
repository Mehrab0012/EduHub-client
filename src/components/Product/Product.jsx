import React from 'react';
import { Link } from 'react-router';
import StarRating from '../../ratingSystem/StarRating';


const Product = ({ productDetails }) => {
    const { toyId, toyName, price, rating, availableQuantity, pictureURL } = productDetails;



    return (
        <div className="bg-white flex flex-col justify-between rounded-lg shadow-md overflow-hidden max-md:px-4  ">
            <div>
                <Link to={`/products/${toyId}`} className="block w-full">
                    <img
                        src={pictureURL}
                        alt={toyName}
                        className="w-full h-56 object-cover p-5 max-md:p-10"
                    />
                </Link>
            </div>

            <div className="p-4">

                <h3 className="text-xl font-bold mb-2 text-black">{toyName}</h3>
                <div className="flex items-center mb-2 gap-3">

                    <StarRating rating={rating}></StarRating>
                    <span className="text-gray-600">({rating})</span>

                </div>
                <p className="text-gray-600 mb-2">Quantity: {availableQuantity}</p>
                <p className="text-2xl font-bold text-orange-500 mb-4">${price}</p>

                <Link to={`/products/${toyId}`} className="block w-full">
                    <button className="w-full cursor-pointer bg-orange-100 text-orange-600 font-semibold py-2 rounded-lg hover:bg-orange-200 transition-colors">
                        View More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Product;