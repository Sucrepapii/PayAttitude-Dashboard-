import React from 'react';

interface SkeletonListProps {
    count?: number;
    height?: string;
    className?: string;
}

export function SkeletonList({ count = 3, height = 'h-16', className = '' }: SkeletonListProps) {
    return (
        <div className={`space-y-3 ${className}`}>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className={`w-full ${height} bg-gray-100 rounded-lg animate-pulse`}
                />
            ))}
        </div>
    );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
    return (
        <div className={`rounded-xl border border-gray-100 bg-white p-6 shadow-sm ${className}`}>
            <div className="flex items-center space-x-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 animate-pulse" />
                <div className="space-y-2">
                    <div className="h-4 w-24 rounded bg-gray-100 animate-pulse" />
                    <div className="h-3 w-32 rounded bg-gray-100 animate-pulse" />
                </div>
            </div>
            <div className="space-y-3">
                <div className="h-4 w-full rounded bg-gray-100 animate-pulse" />
                <div className="h-4 w-4/5 rounded bg-gray-100 animate-pulse" />
            </div>
        </div>
    );
}
