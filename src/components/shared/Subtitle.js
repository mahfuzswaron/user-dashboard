import React from 'react';

const Subtitle = ({ children }) => {
    return (
        <h4 className='text-sm text-black font-bold'>
            {children}
        </h4>
    );
};

export default Subtitle;