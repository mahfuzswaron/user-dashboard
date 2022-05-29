import React from 'react';
import user_pic from '../../../../src/user-pic.jpg'

const HelloSection = () => {
    return (
        <section className='flex flex-col items-center mt-10'>
            <div className='flex justify-around items-center w-2/3'>
                <div>
                    <img className='inline-block h-20 w-20 rounded-full ring-2 ring-white' src={user_pic} alt='' />
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>Hi Mike,</h3>
                    <p>welcome back</p>
                </div>
            </div>

        </section>
    );
};

export default HelloSection;