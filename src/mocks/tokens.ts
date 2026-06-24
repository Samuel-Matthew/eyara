// Mock data for home page scam cards
export const homeScamCards = [
  {
    id: 1,
    name: "Fake MetaMask",
    address: "FakeM...Mask1",
    riskLevel: "high",
    riskLabel: "High Risk",
    detectionText: "Detected as honeypot",
    timeAgo: "2 hours ago",
    showArrow: true,
  },
  {
    id: 2,
    name: "Rug Pull Token",
    address: "Rug...Pull2",
    riskLevel: "high",
    riskLabel: "High Risk",
    detectionText: "Owner has mint access",
    timeAgo: "5 hours ago",
    showArrow: true,
  },
  {
    id: 3,
    name: "Safe Project",
    address: "Safe...Project3",
    riskLevel: "low",
    riskLabel: "Safe",
    detectionText: "Contract verified",
    timeAgo: "1 day ago",
    showArrow: false,
  },
];

// Mock data for trending scams
export const trendingTokens: ScamToken[] = [
  {
    id: 1,
    name: "Fake Uniswap",
    symbol: "UNIF",
    address: "0x...UNIF",
    riskLevel: "high",
    riskLabel: "High Risk",
    timeAgo: "30 mins ago",
    reports: 45,
    primaryRisk: "Honeypot Contract",
    riskTag: "honeypot",
  },
  {
    id: 2,
    name: "Rug Pull Coin",
    symbol: "RUG",
    address: "0x...RUG",
    riskLevel: "high",
    riskLabel: "High Risk",
    timeAgo: "1 hour ago",
    reports: 32,
    primaryRisk: "Rug Pull Risk",
    riskTag: "rug-pull",
  },
  {
    id: 3,
    name: "Safe Token",
    symbol: "SAFE",
    address: "0x...SAFE",
    riskLevel: "safe",
    riskLabel: "Safe",
    timeAgo: "2 hours ago",
    reports: 0,
    primaryRisk: "No Risk Detected",
    riskTag: "verified",
  },
];

export const protectionTips = [
  {
    id: 1,
    title: "Verify Contract Address",
    description:
      "Always double-check the contract address from official sources before investing",
    icon: "ri-shield-check-line",
    color: "green",
  },
  {
    id: 2,
    title: "Check Holder Distribution",
    description:
      "Review if any single address holds more than 10% of the token supply",
    icon: "ri-pie-chart-line",
    color: "yellow",
  },
  {
    id: 3,
    title: "Analyze Liquidity",
    description:
      "Ensure sufficient liquidity exists to prevent price manipulation",
    icon: "ri-water-flash-line",
    color: "green",
  },
];

export const networkStatus = {
  ethereum: { name: "Ethereum", status: "active", block: 19500000 },
  polygon: { name: "Polygon", status: "active", block: 58000000 },
  solana: { name: "Solana", status: "active", block: 290000000 },
  solanaCanister: "Active",
  lastUpdate: "Just now",
  totalScans: 45230,
};

// Scan result mock data - Safe result
export const scanResultSafe: Omit<ScanResult, "address"> = {
  status: "safe",
  score: 95,
  riskScore: 5,
  isSafe: true,
  tokenName: "USDC",
  symbol: "USDC",
  riskLabel: "Safe",
  recommendation: "Safe to trade",
  checks: [
    {
      id: 1,
      name: "contract_verified",
      status: "safe",
      title: "Contract Verified",
      description: "Contract source code has been verified",
      statusLabel: "Safe",
      details: "The contract source code matches the deployed bytecode.",
    },
    {
      id: 2,
      name: "no_suspicious_functions",
      status: "safe",
      title: "No Suspicious Functions",
      description: "No honeypot patterns detected",
      statusLabel: "Safe",
      details:
        "Contract does not contain common rug pull or honeypot patterns.",
    },
    {
      id: 3,
      name: "ownership_renounced",
      status: "safe",
      title: "Ownership Renounced",
      description: "Contract ownership has been renounced",
      statusLabel: "Safe",
      details: "The contract owner does not have privileged access.",
    },
  ],
};

// Scan result mock data - Danger result
export const scanResultDanger: Omit<ScanResult, "address"> = {
  status: "danger",
  score: 15,
  riskScore: 85,
  isSafe: false,
  tokenName: "SCAM Token",
  symbol: "SCAM",
  riskLabel: "High Risk",
  recommendation: "Do not trade",
  checks: [
    {
      id: 1,
      name: "contract_not_verified",
      status: "danger",
      title: "Contract Not Verified",
      description: "Source code has not been verified",
      statusLabel: "Danger",
      details: "Unable to verify contract source code matches deployment.",
    },
    {
      id: 2,
      name: "suspicious_functions",
      status: "danger",
      title: "Suspicious Functions Detected",
      description: "Honeypot patterns found",
      statusLabel: "Danger",
      details: "Contract contains patterns commonly used in rug pull scams.",
    },
    {
      id: 3,
      name: "owner_control",
      status: "warning",
      title: "Owner Control Risk",
      description: "Owner has significant control over token transfers",
      statusLabel: "Warning",
      details: "Owner can pause trades or modify transaction limits.",
    },
  ],
};

export const scanningSteps: Omit<ScanStep, "status">[] = [
  {
    id: 1,
    name: "Analyzing Contract",
    icon: "ri-code-line",
    label: "Analyzing Contract",
  },
  {
    id: 2,
    name: "Checking Security",
    icon: "ri-shield-check-line",
    label: "Checking Security",
  },
  {
    id: 3,
    name: "Verifying Holders",
    icon: "ri-group-line",
    label: "Verifying Holders",
  },
  {
    id: 4,
    name: "Final Analysis",
    icon: "ri-file-check-line",
    label: "Final Analysis",
  },
];

// Type definitions
export type RiskCheck = {
  id: number;
  name: string;
  status: "safe" | "warning" | "danger";
  title: string;
  description: string;
  statusLabel: string;
  details?: string;
};

export type ScanResult = {
  status: "safe" | "danger";
  score: number;
  riskScore: number;
  isSafe: boolean;
  tokenName: string;
  symbol: string;
  riskLabel: string;
  recommendation: string;
  checks: RiskCheck[];
  address?: string;
};

export type ScanStep = {
  id: number;
  name: string;
  icon: string;
  label: string;
  status?: "pending" | "checking" | "complete";
};

export type ScamToken = {
  id: number;
  name: string;
  symbol: string;
  address: string;
  riskLevel: "safe" | "medium" | "high";
  riskLabel: string;
  timeAgo: string;
  reports: number;
  primaryRisk: string;
  riskTag: string;
};
