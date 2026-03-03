import React from 'react';
import { Card } from '../Card/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ChartData {
    name: string;
    successful: number;
    failed: number;
}

interface PerformanceChartsProps {
    tokenizationData: ChartData[];
    detokenizationData: ChartData[];
    // Assuming 'Today' filter for demo purposes, can be extended
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

export function PerformanceCharts({ tokenizationData, detokenizationData }: PerformanceChartsProps) {
    const ChartPanel = ({ title, data }: { title: string, data: ChartData[] }) => (
        <Card className="flex-1">
            <Card.Header
                title={title}
                action={
                    <select className="text-sm border-gray-200 rounded-md text-gray-600 font-medium focus:ring-orange-500 focus:border-orange-500 bg-gray-50 px-3 py-1.5 outline-none">
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                }
            />
            <Card.Body>
                <div className="flex items-center space-x-6 mb-6 px-2">
                    <div className="flex items-center text-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                        <span className="text-gray-600">Successful requests</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                        <span className="text-gray-600">Failed requests</span>
                    </div>
                </div>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barSize={24} barGap={4}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 12 }}
                                dy={10}
                                hide // Hidden in design until hover/detailed view
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 12 }}
                                dx={-10}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                            <Bar dataKey="successful" name="Successful" fill="#f97316" radius={[2, 2, 0, 0]} />
                            <Bar dataKey="failed" name="Failed" fill="#0ea5e9" radius={[2, 2, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card.Body>
        </Card>
    );

    return (
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <ChartPanel title="Tokenization Performance" data={tokenizationData} />
            <ChartPanel title="Detokenization Performance" data={detokenizationData} />
        </div>
    );
}
