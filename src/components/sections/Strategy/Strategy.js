import React, { useState } from 'react';
import Subtitle from '../../shared/Subtitle';
import Title from '../../shared/Title';
import SmallText from '../../shared/SmallText';
import './Strategy.css';

const Strategy = () => {
    const [EmprangeValue, setEmpRangeValue] = useState(0);
    const [RetrangeValue, setRetRangeValue] = useState(0);
    return (
        <section className='bg-[#FAFAFA] p-5 mt-10 rounded-lg sm:w-full lg:w-80 flex flex-col items-center'>
            <div className='w-full'>
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
                <button className='btn border-none py-2 px-3 my-5 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>Update</button>
                <div>
                </div>
            </div>
            <div className=''>
                <a href='#' className='text-blue-500 font-bold block w-full' >{'View help docs >'} </a>
            </div>

            <div className='mt-16  border-l-2 border-blue-500 pl-3'>
                <p>Are you considering a <br /> <span className='font-bold'>Housing Advance?</span></p>
                <SmallText>Limited time reduces interest</SmallText>
                <a href='#' className='text-blue-500 font-bold' >{'Learn moer >'} </a>
            </div>
        </section>
    );
};

export default Strategy;