import React from 'react';
import { cn } from '../../utils/cn';
import { FilterPeriod } from '../../types';

interface FilterTabProps {
    periods: FilterPeriod[];
    activePeriod: FilterPeriod;
    onChange: (period: FilterPeriod) => void;
    className?: string;
}

export function FilterTab({ periods, activePeriod, onChange, className }: FilterTabProps) {
    return (
        <div className={cn('flex items-center space-x-1 border border-gray-200 rounded-lg p-1 bg-gray-50', className)}>
            {periods.map((period) => (
                <button
                    key={period}
                    onClick={() => onChange(period)}
                    className={cn(
                        'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                        activePeriod === period
                            ? 'bg-orange-500 text-white shadow'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    )}
                >
                    {period}
                </button>
            ))}
        </div>
    );
}
