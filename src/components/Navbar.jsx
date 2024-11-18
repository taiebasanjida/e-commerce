import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { setSearchTerm } from '../redux/productSlice'; // Redux action
import Modal from './Modal';
import Login from './Login';
import Register from './Register';

const Navbar = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // Default Login modal open
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(search)); // Redux-এ সার্চ টার্ম পাঠানো
        navigate('/filter-data'); // ফিল্টার পেজে নেভিগেট
    };

    const products = useSelector((state) => state.cart.products);

    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                {/* Logo */}
                <div className='text-lg font-bold'>
                    <Link to="/">e-Shop</Link>
                </div>

                 

                {/* Search Box */}
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch} className="flex">
                        <input
                            type="text"
                            placeholder="Search Product"
                            className='w-full border py-2 px-4'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-800">
                            <FaSearch />
                        </button>
                    </form>
                </div>

                {/* User Options */}
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className="absolute top-0 left-3 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                {products.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>

            {/* Navigation Links below the Search Bar */}
            <div className='bg-gray-100 py-2'>
                <div className='container mx-auto px-4 md:px-16 lg:px-24 flex justify-center space-x-8 text-gray-700'>
                    <Link to="/" className="hover:text-red-600">Home</Link>
                    <Link to="/shop" className="hover:text-red-600">Shop</Link>
                    <Link to="/contact" className="hover:text-red-600">Contact</Link>
                    <Link to="/about" className="hover:text-red-600">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
