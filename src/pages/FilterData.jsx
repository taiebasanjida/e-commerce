import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const FilterData = () => {
    const filteredProducts = useSelector((state) => state.products.filteredData);

    // Handle cases where filteredProducts might be undefined or empty
    if (!filteredProducts || filteredProducts.length === 0) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-6">Shop</h2>
                <p>No products found.</p>
            </div>
        );
    }

    return (
        <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
            <h2 className="text-2xl font-bold mb-6 text-center">Filtered Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FilterData;
