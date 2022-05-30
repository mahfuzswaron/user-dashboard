import React from 'react';
import SmallText from '../../shared/SmallText';

const Goal = (props) => {

    return (
        <div>
            <h3 className='text-2xl text-black font-bold '>{props?.amount}</h3>
            <SmallText>{props?.name}</SmallText>
            <hr className='mt-3 ' />
        </div>
    );
};

export default Goal;