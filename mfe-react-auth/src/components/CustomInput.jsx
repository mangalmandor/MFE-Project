import React from 'react';

const CustomInput = ({ type, placeholder, value, onChange, required }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 mb-4 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500"
    />
);

export default CustomInput;