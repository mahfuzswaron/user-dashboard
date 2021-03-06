import React from 'react';
import Chart from './Chart';
import Compare from './Compare';
import Goal from './Goal';
const Analytics = () => {

    return (
        <section className='lg:w-2/5 sm:w-full bg-white px-10 mt-10'>
            <p className='text-sm font-bold text-blue-500'>Retirement Income</p>
            <h3 className='text-2xl text-black font-bold'>Starting Year 2056</h3>

            <div className='mt-10 flex justify-between '>
                <Goal
                    amount='$300,000'
                    name='My Goal'
                ></Goal>
                <Goal
                    amount='59%'
                    name='Goal Achieved'
                ></Goal>
                <Goal
                    amount='$3400'
                    name='Est. Monthly Income'
                ></Goal>
            </div>

            <Chart></Chart>
            <Compare />
        </section>
    );
};

export default Analytics;