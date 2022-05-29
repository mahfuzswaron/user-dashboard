import React, { useEffect, useState } from 'react';
import Title from '../../shared/Title';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, CustomizedLegend } from 'recharts';

const Chart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(info => setData(info))
    }, [data]);
    if (!data) {
        return <p>Loading...</p>
    }
    const renderLegend = (props) => {
        const { payload } = props;

        return (
            <ul>
                {
                    payload.reverse().map((entry, index) => (
                        <li key={`item-${index}`}>
                            <span style={{ backgroundColor: entry.color }} />
                            <span>{entry.payload.value}</span>&nbsp;{entry.value}
                        </li>
                    ))
                }
            </ul>
        );
    }
    return (
        <div className='mt-20'>
            <Title>Contributions Overtime ({data?.length})</Title>
            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend content={renderLegend} /> */}
                    <Legend layout="horizontal" verticalAlign="top" align="center" margin={{ bottom: "10px" }} />
                    <Bar dataKey="employee" stackId="a" fill='#2563EB' className='fill-blue-600' />
                    <Bar dataKey="employer" stackId="a" fill='#3B82F6' className='fill-blue-500' />
                    <Bar dataKey="total_interest" stackId="a" fill="#60A5FA" className='fill-blue-400' />
                </BarChart>
            </div>
        </div >
    );
};

export default Chart;