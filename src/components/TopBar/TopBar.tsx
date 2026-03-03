import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface TopBarProps {
    userName: string;
    userRole: string;
}

export function TopBar({ userName, userRole }: TopBarProps) {
    return (
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                <ChevronRight className="w-4 h-4 mx-1 text-gray-300" />
                <span className="font-medium text-gray-900">Dashboard</span>
            </div>

            <div className="flex items-center">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                        <img
                            src="https://ui-avatars.com/api/?name=Samuel+Aliko-Dangote&background=0D8ABC&color=fff"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900 leading-tight">{userName}</span>
                        <span className="text-xs text-gray-500">{userRole}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 rotate-90 ml-1" />
                </div>
            </div>
        </header>
    );
}
