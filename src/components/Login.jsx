import React from 'react';

const Login = ({ openSignUp }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login form submitted");
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className="text-center">
                <span className="text-gray-700"> Don't have an account?</span>
                <button className="text-red-800" onClick={openSignUp}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Login;
