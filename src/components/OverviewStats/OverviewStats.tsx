import React from 'react';
import { Card } from '../Card/Card';

interface StatProps {
    label: string;
    value: string | number;
    highlight?: boolean;
}

export function OverviewStats({ stats }: { stats: StatProps[] }) {
    // Assuming the first stat is the main "Token Requested today"
    const mainStat = stats[0];
    const gridStats = stats.slice(1);

    return (
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <Card className="flex-shrink-0 w-full lg:w-64 flex flex-col justify-center">
                <Card.Body className="text-center p-8">
                    <p className="text-sm font-medium text-gray-500 mb-2">{mainStat.label}</p>
                    <p className="text-4xl font-bold text-gray-900">{mainStat.value}</p>
                </Card.Body>
            </Card>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                {gridStats.map((stat, i) => (
                    <Card key={i}>
                        <Card.Body className="p-6">
                            <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
