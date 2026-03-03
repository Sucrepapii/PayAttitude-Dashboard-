import React from 'react';
import { Card } from '../Card/Card';
import { TokenActivityStat } from '../../types';

interface TokenActivityProps {
    stats: TokenActivityStat[];
}

export function TokenActivity({ stats }: TokenActivityProps) {
    return (
        <Card className="flex-1 w-full lg:w-80 flex-shrink-0">
            <Card.Header
                title="Token Activity"
                action={
                    <select className="text-sm border-gray-200 rounded-md text-gray-600 font-medium focus:ring-orange-500 focus:border-orange-500 bg-gray-50 px-3 py-1.5 outline-none">
                        <option>Today</option>
                        <option>This Week</option>
                    </select>
                }
            />
            <div className="px-6 py-2 text-xs text-gray-400 font-medium">
                Last updated: 23/09/23, 09:11:04
            </div>
            <Card.Body className="p-0">
                <div className="divide-y divide-gray-100">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex justify-between items-center px-6 py-4 hover:bg-gray-50/50 transition-colors">
                            <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                            <span className="font-semibold text-gray-900 text-lg">{stat.value.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
}
