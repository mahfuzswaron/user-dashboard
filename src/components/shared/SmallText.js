import React from 'react';

const SmallText = ({ children }) => {
    return (
        <p className='text-gray-400 text-sm mt-1'>
            {children}
        </p>
    );
};

export default SmallText;