import React from 'react';
import user_pic from '../../../../src/user-pic.jpg';
import Title from '../../shared/Title';
import SmallText from '../../shared/SmallText';
import Subtitle from '../../shared/Subtitle';

const HelloSection = () => {
    return (
        <section className='flex flex-col items-cente '>
            <div className='flex justify-around items-center mt-10 w-2/3'>
                <div>
                    <img className='inline-block h-20 w-20 rounded-full ring-2 ring-white' src={user_pic} alt='' />
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>Hi Mike,</h3>
                    <p>welcome back</p>
                </div>
            </div>
            {/* ---------------------------------------- */}
            <div className='mt-5'>
                <Title> Today </Title>
                <div className='mt-2'>
                    <h4 className='text-2xl font-bold'>$19,892</h4>
                    <SmallText>Account Balance</SmallText>
                </div>
                <div className='mt-2'>
                    <h4 className='text-xl font-bold'>$4.000</h4>
                    <SmallText>Year-to-Date Contribution </SmallText>
                </div>
                <div className='mt-2'>
                    <h4 className='text-xl font-bold'>$1,092</h4>
                    <SmallText>Total Interest</SmallText>
                </div>
                <button className='btn py-2 px-3 mt-3 bg-blue-500 rounded-lg'>
                    <select name="want-to" id="want-to" className='bg-blue-500  text-white border-none outline-none'>
                        <option value="I Want to">I Want To</option>
                        <option value="foo">foo</option>
                        <option value="bar">bar</option>
                        <option value="nothing">nothing</option>
                    </select>
                </button>
            </div>
            {/* ------------------------------- */}
            <div className='mt-5'>
                <Title>Recent Transactions</Title>
                <div className='my-5'>
                    <SmallText>2020-08-07</SmallText>
                    <Subtitle>Withdrwal Transfer To Bank -xxxx11</Subtitle>
                </div>
                <hr></hr>
                <div className='my-5'>
                    <SmallText>2020-08-04</SmallText>
                    <Subtitle>Withdrwal Transfer To Bank -xxxx12</Subtitle>
                </div>
                <hr></hr>
                <div className='my-5'>
                    <SmallText>2020-10-07</SmallText>
                    <Subtitle>Withdrwal Transfer To Bank -xxxx13</Subtitle>

                </div>
            </div>

        </section>
    );
};

export default HelloSection;