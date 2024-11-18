import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import HeroImage from '../assets/Images/hero-page.jpeg';
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard'; // Import ProductCard component
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Shop from './Shop';
import Cart from './Cart';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products); // Access the `products` array here

    useEffect(() => {
        dispatch(setProducts(mockData)); // Dispatch mockData to Redux store
    }, [dispatch]);

    return (
        <div>
        <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
            <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
                {/* Sidebar: Categories */}
                <div className="w-full md:w-3/12">
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
                        Shop BY Categories
                    </div>
                    <ul className="space-y-4 bg-gray-100 p-3 border">
                        {Categories.map((category, index) => (
                            <li
                                key={index}
                                className="flex items-center text-sm font-medium"
                            >
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hero Section */}
                <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
                    <img
                        src={HeroImage}
                        alt="Hero"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute top-16 left-8">
                        <p className="text-gray-600 mb-4">Code with Taieba</p>
                        <h2 className="text-xl mt-2.5 font-bold">
                            Welcome To E-SHOP
                        </h2>
                        <p className="text-xl mt-2.5 font-bold text-gray-800">
                            MILLIONS+PRODUCTS
                        </p>
                        <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <InfoSection />

            {/* Categories Section */}
            <CategorySection />

            {/* Top Products Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 text-center">Top Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-5 cursor-pointer">
                    {/* Render products using ProductCard */}
                    {products &&
                        products.slice(0, 5).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
            </div>
            
        </div>
         <Shop />
         <div>
            <Cart />
         </div>
        </div>

    );
};

export default Home;
