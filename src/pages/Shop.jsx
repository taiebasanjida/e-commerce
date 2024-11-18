import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Shop = () => {
    const products = useSelector(state => state.products.products);

    if (!products || products.length === 0) {
        return <div className="text-center py-12">No products available</div>;
    }

    return (
        <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
            <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;