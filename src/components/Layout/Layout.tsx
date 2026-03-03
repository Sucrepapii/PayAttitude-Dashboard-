import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from '../TopBar/TopBar';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen bg-[#fafafa]">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <TopBar userName="Samuel Aliko-Dangote" userRole="Super Admin" />
                <main className="flex-1 overflow-auto p-8 custom-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
}
