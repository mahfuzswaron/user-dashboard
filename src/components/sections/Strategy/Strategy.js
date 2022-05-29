import React, { useState } from 'react';
import Subtitle from '../../shared/Subtitle';
import Title from '../../shared/Title';
import './Strategy.css';

const Strategy = () => {
    const [EmprangeValue, setEmpRangeValue] = useState(0);
    const [RetrangeValue, setRetRangeValue] = useState(0);
    return (
        <section className='bg-[#FAFAFA] p-5 mt-10 rounded-lg'>
            <Title>Requirement Strategy</Title>
            <div className='my-5'>
                <Subtitle>Employee Contributions</Subtitle>
                <div className='flex items-center'>
                    <input onChange={(e) => setEmpRangeValue(e.target.value)} type='range' className='slider mr-3' />
                    <span>{EmprangeValue}%</span>
                </div>
            </div>
            <div className='my-5'>
                <Subtitle>Retirement Age</Subtitle>
                <div className='flex items-center'>
                    <input onChange={(e) => setRetRangeValue(e.target.value)} type='range' className='slider mr-3' />
                    <span>{RetrangeValue}</span>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex items-center my-5 justify-between'>
                    <Subtitle>Employee Contributions</Subtitle>
                    <span>8.4%</span>
                </div>
                <div className='flex items-center my-5 justify-between'>
                    <Subtitle>Interest Rate</Subtitle>
                    <span>5%</span>
                </div>
            </div>
            <button className='btn py-2 px-3 my-5 w-full bg-blue-500 text-white rounded-lg'>Update</button>
            <a href='#' className='text-blue-500 font-bold mx-20' >{'View help docs >'} </a>
            <div>

            </div>
        </section>
    );
};

export default Strategy;