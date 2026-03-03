import React from 'react';
import { Card } from '../Card/Card';
import { Merchant } from '../../types';

interface MerchantsListProps {
    merchants: Merchant[];
    isLoading?: boolean;
}

export function MerchantsList({ merchants, isLoading }: MerchantsListProps) {
    return (
        <Card className="flex-1">
            <Card.Header
                title="Merchants"
                action={
                    <button className="text-sm border border-gray-200 rounded-md text-gray-700 font-medium hover:bg-gray-50 px-3 py-1.5 transition-colors">
                        View more
                    </button>
                }
            />
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-semibold tracking-wider">Merchant ID ↑</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Name ↑</th>
                            <th className="px-6 py-4 font-semibold tracking-wider">Email ↑</th>
                            <th className="px-6 py-4 font-semibold tracking-wider text-right">Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {isLoading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                                    <div className="animate-pulse flex space-x-4 justify-center">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    </div>
                                </td>
                            </tr>
                        ) : merchants.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                    No merchants found for this period.
                                </td>
                            </tr>
                        ) : (
                            merchants.map((merchant) => (
                                <tr key={merchant.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{merchant.id}</td>
                                    <td className="px-6 py-4 text-gray-600">{merchant.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{merchant.email}</td>
                                    <td className="px-6 py-4 text-gray-900 text-right font-medium">
                                        {merchant.revenue.toLocaleString('en-NG', { minimumFractionDigits: 2 })}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
