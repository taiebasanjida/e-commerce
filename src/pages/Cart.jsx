import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";


import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";




const Cart = ({ EmptyCart }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart || { products: [], totalQuantity: 0, totalPrice: 0 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState("Main Street, 0012");
    const Navigate = useNavigate();


    const handleChangeAddress = (newAddress) => {
        setAddress(newAddress);
        setIsModalOpen(false);
    };


    return (
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            {cart.products.length > 0 ? (
                <div>
                    <h3 className="text-2xl font-bold mb-6">Shopping Cart</h3>


                    {/* Cart Header */}
                    <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8 ">
                        <p className="font-semibold w-1/4">Products</p>
                        <div className="flex justify-between w-3/4">
                            <p className="font-semibold">Price</p>
                            <p className="font-semibold">Quantity</p>
                            <p className="font-semibold">Subtotal</p>
                            <p className="font-semibold">Remove</p>
                        </div>
                    </div>


                    {/* Cart Items */}
                    {cart.products.map((product, index) =>
                        product ? (
                            <div key={index} className="flex items-center justify-between p-3 border-b">
                                <div className="md:flex items-center space-x-4 w-1/4">
                                    <img
                                        src={product.image || "/path/to/default-image.jpg"}
                                        alt={product.name || "Product"}
                                        className="w-16 h-16 object-contain rounded"
                                    />
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                </div>


                                <div className="flex space-x-12 items-center w-3/4 justify-between">
                                    <p>${product.price?.toFixed(2) || "0.00"}</p>


                                    <div className="flex items-center justify-center border">
                                        <button className="text-xl font-bold px-2 border-r"
                                         onClick={() => dispatch(decreaseQuantity(product.id))}
                                        >
                                            -
                                        </button>
                                        <p className="text-xl px-2">{product.quantity || 0}</p>
                                        <button className="text-xl font-bold px-2 border-l"
                                         onClick={() => dispatch(increaseQuantity(product.id))}
                                        >
                                            +
                                        </button>
                                    </div>


                                    <p>${(product.quantity * product.price || 0).toFixed(2)}</p>
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => dispatch(removeFromCart(product.id))}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ) : null
                    )}


                    {/* Cart Total */}
                    <div className="mt-6 p-4 bg-gray-100 rounded">
                        <h3 className="text-lg font-bold mb-4">Cart Total</h3>
                        <div className="flex justify-between items-center mb-2">
                            <span>Total Items:</span>
                            <span>{cart.totalQuantity || 0}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span>Shipping to:</span>
                            <span>{address}</span>
                            <button
                                className="text-blue-500 underline"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Change Address
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Total Price:</span>
                            <span>${cart.totalPrice?.toFixed(2) || "0.00"}</span>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        onClick={()=>Navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <img
                        src={EmptyCart || "/path/to/empty-cart-placeholder.jpg"}
                        alt="Empty Cart"
                        className="h-96"
                    />
                </div>
            )}


            {/* Modal for Changing Address */}
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <ChangeAddress onSave={handleChangeAddress} onCancel={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
};


export default Cart;