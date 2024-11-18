import React, { useState } from 'react'; // Correctly import useState and React
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setOrder }) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState('cod');
    
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        zip: '',
    });
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();

    const handleOrder = () => {
        const newOrder = {
            products: cart.products,
            orderNumber: "123456",
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice,
            
        }

        setOrder(newOrder);
        navigate('/order-confirmation');
    };

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>Checkout</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8 '>
                <div className='md:w-2/3'>
                    {/* Billing Information */}
                    <div className='border p-2 mb-6'>
                        <div
                            className='flex items-center justify-between'
                            onClick={() => setBillingToggle(!billingToggle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${billingToggle ? '' : 'hidden'}`}>
                            <div>
                                <label className='block text-gray-700'>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Enter name'
                                    className='w-full px-3 py-2 border'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Enter email'
                                    className='w-full px-3 py-2 border'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Phone</label>
                                <input
                                    type="text"
                                    name='phone'
                                    placeholder='Enter phone #'
                                    className='w-full px-3 py-2 border'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Information */}
                    <div className='border p-2 mb-6'>
                        <div
                            className='flex items-center justify-between'
                            onClick={() => setShippingToggle(!shippingToggle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${shippingToggle ? '' : 'hidden'}`}>
                            <div>
                                <label className='block text-gray-700'>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder='Enter address'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>City</label>
                                <input
                                    type="text"
                                    name='city'
                                    placeholder='Enter city'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Zip Code</label>
                                <input
                                    type="text"
                                    name='zip'
                                    placeholder='Enter ZIP code'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className='border p-2 mb-6'>
                        <div
                            className='flex items-center justify-between'
                            onClick={() => setPaymentToggle(!paymentToggle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 ${paymentToggle ? '' : 'hidden'}`}>
                            <div className='flex items-center mb-2'>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')}
                                />
                                <label className='block text-gray-700 ml-2'>Cash On Delivery</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={paymentMethod === 'dc'}
                                    onChange={() => setPaymentMethod('dc')}
                                />
                                <label className='block text-gray-700 ml-2'>Debit Card</label>
                            </div>
                            {paymentMethod === 'dc' && (
                                <div>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                    <div>
                                        <label htmlFor="cardNumber">Card Number:</label>
                                        <input type='text' id="cardNumber" name="cardNumber" placeholder='Enter Card Number' />
                                    </div>
                                    <div>
                                        <label htmlFor="cardHolderName">Card Holder Name:</label>
                                        <input type='text' id="cardHolderName" name="cardHolderName" placeholder='Enter Card Holder Name' />
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="expireDate">Expire Date:</label>
                                            <input type='date' id="expireDate" />
                                        </div>
                                        <div>
                                            <label htmlFor="cvv">CVV:</label>
                                            <input type='text' id="cvv" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border '>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cart.products.map(product => (
                            <div key={product.id} className="flex justify-between">
                                <div className='flex items-center'>
                                    <img
                                        src={product.image || '/path/to/default-image.jpg'}
                                        alt={product.name || 'Product'}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-md font-semibold">{product.name}</h4>
                                        <p className="text-gray-500">
                                            ${product.price} x {product.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>
                                    ${product.price * product.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price:</span>
                            <span className='font-semibold'>${cart.totalPrice?.toFixed(2)}</span>
                        </div>
                    </div>
                    <button
                        className='w-full bg-red-500 text-white py-2 px-4 mt-6 hover:bg-red-800'
                        onClick={handleOrder}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
