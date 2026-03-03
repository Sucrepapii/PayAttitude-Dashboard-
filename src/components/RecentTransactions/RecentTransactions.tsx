import React from 'react';
import { Card } from '../Card/Card';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { Transaction } from '../../types';
import { useTransactions } from '../../hooks/useTransactions';

interface RecentTransactionsProps {
    initialTransactions: Transaction[];
}

export function RecentTransactions({ initialTransactions }: RecentTransactionsProps) {
    const {
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        paginatedTransactions,
        totalPages,
        totalEntries,
        itemsPerPage,
    } = useTransactions(initialTransactions);

    return (
        <Card>
            <Card.Header
                title="Recent Transactions"
                action={
                    <button className="text-sm border border-gray-200 rounded-md text-gray-700 font-medium hover:bg-gray-50 px-3 py-1.5 transition-colors">
                        View more
                    </button>
                }
            />

            <div className="p-4 border-b border-gray-100 flex items-center bg-gray-50/50">
                <div className="relative w-full max-w-sm">
                    <svg
                        className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search records"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-shadow bg-white"
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-semibold tracking-wider">Timestamp ↑</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Transaction Ref ↑</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Merchant ID ↑</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Merchant Name</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Amount ↑</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Status ↑</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {paginatedTransactions.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                    No transactions found matching your search.
                                </td>
                            </tr>
                        ) : (
                            paginatedTransactions.map((tx) => (
                                <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{tx.timestamp}</td>
                                    <td className="px-6 py-4 font-mono text-gray-600 text-xs">{tx.reference}</td>
                                    <td className="px-6 py-4 font-mono text-gray-600 text-xs">{tx.merchantId}</td>
                                    <td className="px-6 py-4 text-gray-900 font-medium">{tx.merchantName}</td>
                                    <td className="px-6 py-4 font-mono text-gray-900">
                                        ₦{tx.amount.toLocaleString('en-NG', { minimumFractionDigits: 2 })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={tx.status} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100 bg-gray-50/20">
                <span className="text-sm text-gray-500 font-medium">
                    Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalEntries)} of {totalEntries} entries
                </span>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Show</span>
                        <select className="border border-gray-200 rounded px-2 py-1 text-sm text-gray-700 bg-white outline-none focus:ring-1 focus:ring-orange-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <span className="text-sm text-gray-500">entries</span>
                    </div>
                    <div className="flex items-center space-x-1 border border-gray-200 rounded-md bg-white">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-1 px-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed border-r border-gray-200"
                        >
                            &lt;
                        </button>
                        <button className="px-3 py-1 text-sm font-medium text-orange-600 bg-orange-50">
                            {currentPage}
                        </button>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-1 px-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed border-l border-gray-200"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
