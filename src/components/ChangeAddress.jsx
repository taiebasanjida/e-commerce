// এটি নতুন ঠিকানা সেট করার জন্য ফর্ম হবে।

import React, { useState } from 'react';

const ChangeAddress = ({ onSave, onCancel }) => {
    const [newAddress, setNewAddress] = useState('');

    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Change Address</h3>
            <input
                type="text"
                placeholder="Enter new address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end">
                <button
                    onClick={onCancel}
                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                >
                    Cancel
                </button>
                <button
                    onClick={() => {
                        if (newAddress) onSave(newAddress);
                    }}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Save Address
                </button>
            </div>
        </div>
    );
};

export default ChangeAddress;
