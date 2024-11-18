import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    

    // Handle adding product to the cart
    const handleAddToCart = (e, product) => {
        e.stopPropagation(); // Dispatch action to add the product to the cart
        e.preventDefault();
        dispatch(addToCart(product));
        alert('Product added to cart!');
    };

    return (
        <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
            <img
                src={product.image}
                alt={product.name}
                className='w-full h-48 object-contain mb-4'
            />
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <p className='text-gray-500'>${product.price}</p>
            <div className='flex items-center mt-2'>
                {/* Render rating stars */}
                {[...Array(product.rating)].map((_, index) => (
                    <FaStar key={index} className='text-yellow-500' />
                ))}
            </div>
            <div
                className="absolute bottom-4 right-2 flex items-center justify-center ww-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
                onClick={(e) => handleAddToCart(e, product)}
            >
                <span className="group-hover:hiddenblock">+</span>
                <span className="hidden group-hover:block">Add to cart</span>
            </div>
        </div>
    );
};

// Prop validation for the product prop
ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired, // Added rating prop validation
    }).isRequired,
};

export default ProductCard;
