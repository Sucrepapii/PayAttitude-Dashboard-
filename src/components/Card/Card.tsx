import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    action?: React.ReactNode;
}

Card.Header = function CardHeader({ title, action, className, ...props }: CardHeaderProps) {
    return (
        <div
            className={cn('px-6 py-5 border-b border-gray-100 flex items-center justify-between', className)}
            {...props}
        >
            <h3 className="font-semibold text-gray-900">{title}</h3>
            {action && <div>{action}</div>}
        </div>
    );
};

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

Card.Body = function CardBody({ children, className, ...props }: CardBodyProps) {
    return (
        <div className={cn('p-6', className)} {...props}>
            {children}
        </div>
    );
};
