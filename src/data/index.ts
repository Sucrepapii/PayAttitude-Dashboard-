import {
  ChartDataPoint,
  Merchant,
  TokenActivityStat,
  TopMerchantActivity,
  MostUsedTokenActivity,
  FraudDetectionActivity,
  Transaction,
} from "../types";

export const mockOverviewStats = [
  { label: "Token Requested today", value: "2300" },
  { label: "Token Requested", value: "20,010" },
  { label: "Successful Token Requests", value: "18,910" },
  { label: "Failed Token Requests", value: "100" },
  { label: "Total TSPs", value: "14" },
  { label: "Total Merchants", value: "250" },
  { label: "Token Usage", value: "5,200" },
  { label: "Pending Actions", value: "250" },
];

export const mockChartData: ChartDataPoint[] = [
  { name: "Jan", tokenization: 400, detokenization: 240 },
  { name: "Feb", tokenization: 300, detokenization: 139 },
  { name: "Mar", tokenization: 200, detokenization: 980 },
  { name: "Apr", tokenization: 278, detokenization: 390 },
  { name: "May", tokenization: 189, detokenization: 480 },
  { name: "Jun", tokenization: 239, detokenization: 380 },
  { name: "Jul", tokenization: 349, detokenization: 430 },
  { name: "Aug", tokenization: 450, detokenization: 310 },
  { name: "Sep", tokenization: 550, detokenization: 210 },
  { name: "Oct", tokenization: 650, detokenization: 110 },
  { name: "Nov", tokenization: 750, detokenization: 810 },
  { name: "Dec", tokenization: 850, detokenization: 910 },
];

// Split the chart data to fit the Performance charts mockup
export const mockTokenizationPerfData = [
  { name: "Jan", successful: 2400, failed: 400 },
];
export const mockDetokenizationPerfData = [
  { name: "Jan", successful: 1398, failed: 1980 },
];

export const mockMerchants: Merchant[] = [
  { id: "UP08230306", name: "Jumia", email: "Info@jumia.com", revenue: 2500 },
  { id: "UP08230307", name: "Uber", email: "Info@uber.com", revenue: 2500 },
  { id: "UP08230308", name: "Glovo", email: "Info@glovo.com", revenue: 2500 },
  {
    id: "UP08230309",
    name: "Bolt",
    email: "customercare@info.bolt.com",
    revenue: 2500,
  },
  {
    id: "UP08230310",
    name: "Amazon",
    email: "Info@amazon.co.ng",
    revenue: 2500,
  },
];

export const mockTokenActivityStats: TokenActivityStat[] = [
  { label: "Tokenization", value: 3500 },
  { label: "Detokenization", value: 3293 },
  { label: "Token Expired", value: 201 },
  { label: "Token Deactivated", value: 32 },
  { label: "Token Reactivated", value: 0 },
  { label: "Token Deleted", value: 1 },
];

export const mockTopMerchant: TopMerchantActivity = {
  id: "jumia-01",
  name: "Jumia",
  email: "info@jumia.com",
  count: 2,
};

export const mockMostUsedToken: MostUsedTokenActivity = {
  token: "5128 xxxx xxxx 0127",
  usage: 2904,
};

export const mockFraudDetection: FraudDetectionActivity = {
  token: "5128 xxxx xxxx 0127",
  attempts: 23,
  total: 100,
};

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    timestamp: "22/09/23, 09:11:04",
    reference: "UTO00230306",
    merchantId: "UP08230306",
    merchantName: "Anthony Chaiuzor",
    amount: 36150.0,
    status: "Failed",
  },
  {
    id: "2",
    timestamp: "22/09/23, 09:11:04",
    reference: "UTO00230306",
    merchantId: "UP08230306",
    merchantName: "Kunle Suleimon",
    amount: 33750.0,
    status: "Success",
  },
  {
    id: "3",
    timestamp: "22/09/23, 09:11:04",
    reference: "UTO00230306",
    merchantId: "UP08230306",
    merchantName: "Saheed Abiodun",
    amount: 213875.0,
    status: "Failed",
  },
  {
    id: "4",
    timestamp: "22/09/23, 09:11:04",
    reference: "UTO00230306",
    merchantId: "UP08230306",
    merchantName: "Segun Peters",
    amount: 52000.0,
    status: "Success",
  },
  {
    id: "5",
    timestamp: "22/09/23, 09:11:04",
    reference: "UTO00230306",
    merchantId: "UP08230306",
    merchantName: "Segun Johnson",
    amount: 125000.0,
    status: "Removed",
  },
  {
    id: "6",
    timestamp: "22/09/23, 09:11:04",
    reference: "UTO00230306",
    merchantId: "UP08230306",
    merchantName: "Segun Johnson",
    amount: 125000.0,
    status: "Success",
  },
];
