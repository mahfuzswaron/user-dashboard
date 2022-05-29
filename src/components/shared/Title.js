import React from 'react';

const Title = ({ children }) => {
    return (
        <h3 className='text-lg font-bold'>
            {children}
        </h3>
    );
};

export default Title;