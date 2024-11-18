import React from 'react';

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
    if (!isModelOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
                    onClick={() => setIsModelOpen(false)} // Modal বন্ধ করার জন্য
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
