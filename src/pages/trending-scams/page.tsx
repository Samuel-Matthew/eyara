import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { trendingTokens, protectionTips, networkStatus } from "@/mocks/tokens";
import type { ScamToken } from "@/mocks/tokens";

function getRiskBadgeClasses(riskLevel: string) {
  switch (riskLevel) {
    case "high":
      return "bg-[#FF4444]/20 text-[#FF4444] border-[#FF4444]/30";
    case "medium":
      return "bg-[#F7B610]/20 text-[#F7B610] border-[#F7B610]/30";
    case "safe":
      return "bg-[#34D399]/20 text-[#34D399] border-[#34D399]/30";
    default:
      return "bg-white/10 text-white/60 border-white/10";
  }
}

function TokenCard({ token }: { token: ScamToken }) {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 md:p-5 rounded-xl border border-white/5 hover:border-white/10 transition-all"
      style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#FF4444]/10">
            <i className="ri-error-warning-line text-lg text-[#FF4444]"></i>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">{token.name}</h3>
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/10 text-white/60 border border-white/10">
                {token.symbol}
              </span>
            </div>
            <p className="text-xs text-white/40 mt-0.5">{token.address}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full border ${getRiskBadgeClasses(token.riskLevel)}`}
        >
          {token.riskLabel}
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
        <span className="flex items-center gap-1">
          <i className="ri-time-line"></i>
          {token.timeAgo}
        </span>
        <span className="flex items-center gap-1">
          <i className="ri-flag-line"></i>
          {token.reports} reports
        </span>
      </div>

      <div className="mb-3">
        <p className="text-xs text-white/40 mb-1">Primary Risk:</p>
        <p className="text-sm font-medium text-white">{token.primaryRisk}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/50 border border-white/10">
          {token.riskTag}
        </span>
        <button
          onClick={() => navigate("/scan-result")}
          className="text-sm font-medium text-[#34D399] hover:text-[#34D399]/80 transition-colors cursor-pointer"
        >
          View Analysis
        </button>
      </div>
    </div>
  );
}

export default function TrendingScams() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTokens = trendingTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
              Solana Trending Scams
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto">
              Real-time updates from our Solana decentralized detection network.
              Community-verified scam tokens to avoid.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Column - Token List */}
            <div className="flex-1">
              {/* Search */}
              <div className="relative mb-5 md:mb-6">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <i className="ri-search-line text-white/40"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search Solana tokens by name or symbol..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F7B610]/30 border border-white/10"
                  style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
                />
              </div>

              {/* Token Cards */}
              <div className="space-y-3 md:space-y-4">
                {filteredTokens.map((token) => (
                  <TokenCard key={token.id} token={token} />
                ))}
              </div>

              {filteredTokens.length === 0 && (
                <div className="text-center py-12">
                  <i className="ri-search-line text-4xl text-white/30 mb-3"></i>
                  <p className="text-sm text-white/40">
                    No Solana tokens found matching your search.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-4 md:space-y-5">
              {/* Protection Tips */}
              <div
                className="p-4 md:p-5 rounded-xl border border-white/5"
                style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-shield-check-line text-[#F7B610]"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    Protection Tips
                  </h3>
                </div>
                <div className="space-y-3">
                  {protectionTips.map((tip) => (
                    <div
                      key={tip.id}
                      className="p-3 rounded-lg border"
                      style={{
                        backgroundColor:
                          tip.color === "green"
                            ? "rgba(16, 185, 129, 0.08)"
                            : tip.color === "yellow"
                              ? "rgba(247, 182, 16, 0.08)"
                              : "rgba(239, 68, 68, 0.08)",
                        borderColor:
                          tip.color === "green"
                            ? "rgba(16, 185, 129, 0.15)"
                            : tip.color === "yellow"
                              ? "rgba(247, 182, 16, 0.15)"
                              : "rgba(239, 68, 68, 0.15)",
                      }}
                    >
                      <h4
                        className="text-sm font-semibold mb-1"
                        style={{
                          color:
                            tip.color === "green"
                              ? "#34D399"
                              : tip.color === "yellow"
                                ? "#F7B610"
                                : "#F87171",
                        }}
                      >
                        {tip.title}
                      </h4>
                      <p className="text-xs text-white/50 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Reporting */}
              <div
                className="p-4 md:p-5 rounded-xl border border-white/5"
                style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-flag-line text-[#F7B610]"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    Community Reporting
                  </h3>
                </div>
                <p className="text-xs text-white/50 mb-3 leading-relaxed">
                  Help protect the Solana community by reporting suspicious
                  tokens.
                </p>
                <button
                  className="w-full py-2.5 text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap border border-[#34D399]/30 text-[#34D399] hover:bg-[#34D399]/10"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.15)" }}
                >
                  Flag a Solana Scam Token
                </button>
              </div>

              {/* Network Status */}
              <div
                className="p-4 md:p-5 rounded-xl border border-white/5"
                style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
              >
                <h3 className="text-sm font-semibold text-white mb-3">
                  Network Status
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Solana Network :</span>
                    <span className="flex items-center gap-1.5 text-[#34D399]">
                      <span className="w-2 h-2 rounded-full bg-[#34D399]"></span>
                      {networkStatus.solanaCanister}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Last Update :</span>
                    <span className="text-white/80">
                      {networkStatus.lastUpdate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Total Solana Scans :</span>
                    <span className="text-[#34D399] font-medium">
                      {networkStatus.totalScans.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
