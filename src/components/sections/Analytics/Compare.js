import React from 'react';
import SmallText from '../../shared/SmallText';
import Title from '../../shared/Title';

const Compare = () => {
    return (
        <div className='my-10'>
            <Title>How do I compare to my peers?</Title>
            <SmallText>These numbers represent current goals</SmallText>
            <div className='flex my-10 items-center'>
                <div className='w-1/2 pr-5'>
                    <div className='flex'>
                        <p className='font-bold'>Age:</p>
                        <select>
                            <option value="Under-30">Under 30</option>
                            <option value="Under-40">Under 40</option>
                            <option value="Under-60">Under 60</option>
                            <option value="Under-65">Under 65</option>
                        </select>
                    </div>
                    <hr className='my-3' />
                    <div className='flex'>
                        <p className='font-bold'>Salary:</p>
                        <select>
                            <option value="k-20-30">K 20-30</option>
                            <option value="k-30-40">K 30-40</option>
                            <option value="k-40-50">K 40-50</option>
                            <option value="k-50-60">K 50-60</option>
                        </select>
                    </div>
                    <hr className='my-3' />
                    <div className='flex'>
                        <p className='font-bold'>Gender:</p>
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="rather-not-to-say">Rather Not to Say</option>
                        </select>
                    </div>


                </div>
                <div className='flex justify-between w-1/2'>
                    <div className='w-1/4 flex flex-col items-center '>
                        <div class="radial-progress text-success" style={{ "--value": 70 }}>70%</div>
                        <SmallText>Avarage</SmallText>
                    </div>
                    <div className='w-1/4 flex flex-col items-center'>
                        <div class="radial-progress text-success" style={{ "--value": 90 }}>90%</div>
                        <SmallText>Top</SmallText>
                    </div>
                    <div className='w-1/4 flex flex-col items-center'>
                        <div class="radial-progress text-success" style={{ "--value": 60 }}>60%</div>
                        <SmallText>Me</SmallText>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;