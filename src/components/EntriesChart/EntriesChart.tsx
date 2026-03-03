import React from 'react';
import { Card } from '../Card/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../../types';

interface EntriesChartProps {
    data: ChartDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg text-sm">
                <p className="font-semibold text-gray-900 mb-2">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center justify-between space-x-4 mb-1">
                        <span className="flex items-center text-gray-600">
                            <span
                                className="w-2 h-2 rounded-full mr-2"
                                style={{ backgroundColor: entry.color }}
                            />
                            {entry.name}
                        </span>
                        <span className="font-semibold text-gray-900">{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export function EntriesChart({ data }: EntriesChartProps) {
    return (
        <Card className="mb-6">
            <Card.Header
                title="Entries over time"
                action={
                    <select className="text-sm border-gray-200 rounded-md text-gray-600 font-medium focus:ring-orange-500 focus:border-orange-500 bg-gray-50 px-3 py-1.5 outline-none">
                        <option>Today</option>
                        <option>This Week</option>
                    </select>
                }
            />
            <Card.Body>
                <div className="flex justify-end items-center space-x-6 mb-8 px-2">
                    <div className="flex items-center text-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-400 mr-2" />
                        <span className="text-gray-600 font-medium">Tokenization</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mr-2" />
                        <span className="text-gray-600 font-medium">Detokenization</span>
                    </div>
                </div>

                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 12 }}
                                dx={-10}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="tokenization"
                                name="Tokenization"
                                stroke="#fb923c"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 6, fill: "#fb923c", stroke: "#fff", strokeWidth: 2 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="detokenization"
                                name="Detokenization"
                                stroke="#60a5fa"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 6, fill: "#60a5fa", stroke: "#fff", strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card.Body>
        </Card>
    );
}
