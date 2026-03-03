export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface OverviewStat {
  label: string;
  value: string | number;
}

export interface ChartDataPoint {
  name: string;
  tokenization: number;
  detokenization: number;
}

export interface Merchant {
  id: string;
  name: string;
  email: string;
  revenue: number;
}

export interface TokenActivityStat {
  label: string;
  value: number;
}

export interface TopMerchantActivity {
  id: string;
  name: string;
  email: string;
  count: number;
}

export interface MostUsedTokenActivity {
  token: string;
  usage: number;
}

export interface FraudDetectionActivity {
  token: string;
  attempts: number;
  total: number;
}

export interface Transaction {
  id: string;
  timestamp: string;
  reference: string;
  merchantId: string;
  merchantName: string;
  amount: number;
  status: "Success" | "Failed" | "Removed";
}

export type FilterPeriod =
  | "Today"
  | "Last 7 days"
  | "Last 30 days"
  | "Last 90 days";
