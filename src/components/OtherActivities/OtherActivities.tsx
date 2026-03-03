import React from 'react';
import { Card } from '../Card/Card';
import { TopMerchantActivity, MostUsedTokenActivity, FraudDetectionActivity } from '../../types';

interface OtherActivitiesProps {
    topMerchant: TopMerchantActivity;
    mostUsedToken: MostUsedTokenActivity;
    fraudDetection: FraudDetectionActivity;
}

export function OtherActivities({ topMerchant, mostUsedToken, fraudDetection }: OtherActivitiesProps) {
    return (
        <Card className="mb-6">
            <Card.Header title="Other activities" />
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                {/* Top Merchant */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1">Top Merchant</p>
                            <p className="text-xs text-gray-400">Last updated: 23/09/23, 09:11:04</p>
                        </div>
                        <select className="text-xs border border-gray-200 rounded text-gray-600 font-medium focus:ring-orange-500 focus:border-orange-500 bg-white px-2 py-1 outline-none">
                            <option>By Count</option>
                            <option>By Revenue</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-3 mb-6 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                        <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded flex items-center justify-center font-bold text-gray-400 text-xs">AMAZ</div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">{topMerchant.name}</p>
                            <p className="text-xs text-gray-500">{topMerchant.email}</p>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-xs text-gray-500 font-medium mb-1">Count</p>
                        <p className="text-2xl font-bold text-gray-900">{topMerchant.count}</p>
                    </div>
                </div>

                {/* Most Used Token */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1">Most Used Token</p>
                            <p className="text-xs text-gray-400">Last updated: 23/09/23, 09:11:04</p>
                        </div>
                        <select className="text-xs border border-gray-200 rounded text-gray-600 font-medium focus:ring-orange-500 focus:border-orange-500 bg-white px-2 py-1 outline-none">
                            <option>By Usage</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mb-8 bg-gray-50/50 p-3 rounded-lg border border-gray-100 mt-2">
                        <span className="text-xs text-gray-500 font-medium">Token:</span>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-gray-700 font-mono bg-gray-100 px-2 py-1 rounded">{mostUsedToken.token}</span>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-xs text-gray-500 font-medium mb-1">Usage</p>
                        <p className="text-2xl font-bold text-gray-900">{mostUsedToken.usage}</p>
                    </div>
                </div>

                {/* Fraud Detection */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1">Fraud Detection</p>
                            <p className="text-xs text-gray-400">Last updated: 23/09/23, 09:11:04</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-8 bg-gray-50/50 p-3 rounded-lg border border-gray-100 mt-2">
                        <span className="text-xs text-gray-500 font-medium">Token:</span>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-gray-700 font-mono bg-gray-100 px-2 py-1 rounded">{fraudDetection.token}</span>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-xs text-gray-500 font-medium mb-1">Attempts</p>
                        <p className="text-2xl font-bold text-gray-900">{fraudDetection.attempts}<span className="text-sm font-normal text-gray-400">/{fraudDetection.total}</span></p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
