import React from 'react';
import { cn } from '../../utils/cn';

interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    status: 'Success' | 'Failed' | 'Removed';
}

export function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100', // base
                {
                    'bg-emerald-50 text-emerald-700': status === 'Success',
                    'bg-red-50 text-red-700': status === 'Failed',
                    'bg-gray-100 text-gray-700': status === 'Removed',
                },
                className
            )}
            {...props}
        >
            <span
                className={cn('w-1.5 h-1.5 rounded-full mr-1.5', {
                    'bg-emerald-500': status === 'Success',
                    'bg-red-500': status === 'Failed',
                    'bg-gray-500': status === 'Removed',
                })}
            />
            {status}
        </span>
    );
}
