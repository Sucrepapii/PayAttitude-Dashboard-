import React from 'react';
import { Home, Key, FileText, Settings, Users, LayoutDashboard, ScrollText, CreditCard } from 'lucide-react';

export function Sidebar() {
    const navItems = [
        { label: 'Dashboard', icon: Home, isActive: true },
        { label: 'Tokens', icon: Key },
        { label: 'Pending Requests', icon: FileText },
        { label: 'Configuration', icon: Settings },
    ];

    const providerItems = [
        { label: 'Token Service Provider', icon: Users },
        { label: 'Pending TSPs', icon: FileText },
    ];

    const merchantItems = [
        { label: 'Manage Merchants', icon: LayoutDashboard },
        { label: 'Pending Merchants', icon: FileText },
    ];

    const usersItems = [
        { label: 'Users', icon: Users },
        { label: 'Roles', icon: Settings },
    ];

    const reportsItems = [
        { label: 'Token activity', icon: CreditCard },
        { label: 'Transaction history', icon: ScrollText },
    ];

    const NavSection = ({ title, items }: { title: string, items: any[] }) => (
        <div className="mb-6">
            <h3 className="px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {title}
            </h3>
            <ul className="space-y-1">
                {items.map((item, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            className={`flex items-center px-6 py-2.5 text-sm font-medium ${item.isActive
                                    ? 'text-white bg-indigo-900/50 border-l-4 border-orange-500'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            <item.icon className="h-5 w-5 mr-3 shrink-0" aria-hidden="true" />
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <aside className="w-64 bg-[#0a0a1a] text-white flex flex-col min-h-screen border-r border-gray-800 shadow-xl z-20 sticky top-0">
            <div className="flex items-center h-16 px-6 border-b border-gray-800 shrink-0">
                <span className="text-xl font-bold tracking-tight">
                    <span className="text-orange-500">PAY</span>ATTITUDE
                    <span className="block text-xs font-normal text-gray-400 tracking-widest mt-0.5">TOKEN VAULT</span>
                </span>
            </div>
            <div className="flex-1 py-6 overflow-y-auto custom-scrollbar">
                <NavSection title="OVERVIEW" items={navItems} />
                <NavSection title="PROVIDER" items={providerItems} />
                <NavSection title="MERCHANT" items={merchantItems} />
                <NavSection title="USERS" items={usersItems} />
                <NavSection title="REPORT" items={reportsItems} />
            </div>
        </aside>
    );
}
