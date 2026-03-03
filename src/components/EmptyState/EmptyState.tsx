import React from 'react';
import { FileQuestion } from 'lucide-react';

interface EmptyStateProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    className?: string;
}

export function EmptyState({
    title,
    description,
    icon = <FileQuestion className="h-10 w-10 text-gray-400" />,
    action,
    className = ''
}: EmptyStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-100 rounded-xl border-dashed ${className}`}>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 mb-4">
                {icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 max-w-sm mb-6">{description}</p>
            {action && <div>{action}</div>}
        </div>
    );
}
