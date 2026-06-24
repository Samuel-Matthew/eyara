import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { homeScamCards } from "@/mocks/tokens";

const homeFeatureCards = [
  {
    id: "1",
    icon: "ri-shield-check-line",
    title: "Real-Time Protection",
    description:
      "Instantly scans Solana smart contracts for honeypots, rug tricks, and malicious code.",
  },
  {
    id: "2",
    icon: "ri-water-flash-line",
    title: "Liquidity Analysis",
    description:
      "Track Solana token liquidity, ownership status, and rug pull risks before investing.",
  },
  {
    id: "3",
    icon: "ri-group-line",
    title: "Community Driven",
    description:
      "Powered by Solana community reports and decentralized reputation scoring.",
  },
];

const homeBadges = [
  { id: "1", label: "Powered by Solana" },
  { id: "2", label: "100% Decentralized" },
  { id: "3", label: "Community Verified" },
];

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleScan = () => {
    const query = searchQuery.trim();
    if (!query) return;
    navigate(`/scan-result?token=${encodeURIComponent(query)}`);
  };

  const getRiskBadgeStyle = (riskLevel: string) => {
    if (riskLevel === "high") {
      return {
        bg: "bg-[#FF4444]/20",
        text: "text-[#FF4444]",
      };
    }
    return {
      bg: "bg-[#34D399]/20",
      text: "text-[#34D399]",
    };
  };

  const getDetectionIcon = (riskLevel: string) => {
    if (riskLevel === "high") {
      return "ri-error-warning-line";
    }
    return "ri-checkbox-circle-line";
  };

  const getDetectionIconColor = (riskLevel: string) => {
    if (riskLevel === "high") {
      return "text-[#FF4444]";
    }
    return "text-[#34D399]";
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-10 md:pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            Detect Crypto Scams Before
            <br />
            They Happen
          </h1>
          <p className="text-sm md:text-base text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
            Advanced blockchain security scanner powered exclusively by Solana.
            Detect scams on the Solana network, analyze wallet behavior, and
            protect your crypto assets.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-16 md:mb-20">
            <div
              className="flex items-center gap-2 p-1.5 rounded-xl border border-white/10"
              style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleScan()}
                placeholder="Enter Solana token address, Contract ID, or URL...."
                className="flex-1 px-4 py-3 bg-transparent text-sm text-white placeholder-white/40 outline-none"
              />
              <button
                onClick={handleScan}
                className="px-5 py-2.5 text-sm font-medium rounded-lg cursor-pointer whitespace-nowrap transition-all hover:brightness-110"
                style={{ backgroundColor: "#F7B610", color: "#0A0F1C" }}
              >
                Scan Now
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {homeFeatureCards.map((card) => (
              <div
                key={card.id}
                className="group p-5 md:p-6 rounded-xl border border-white/5 transition-all duration-300"
                style={{ backgroundColor: "rgba(20, 18, 28, 0.95)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg mb-4"
                  style={{ backgroundColor: "rgba(247, 182, 16, 0.1)" }}
                >
                  <i className={`${card.icon} text-xl text-[#F7B610]`}></i>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16 md:mb-20">
          {homeBadges.map((badge) => (
            <span
              key={badge.id}
              className="inline-flex items-center gap-2 text-sm text-white/50"
            >
              <span className="w-2 h-2 rounded-full bg-[#F7B610]"></span>
              {badge.label}
            </span>
          ))}
        </div>

        {/* Recently Flagged Scams */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
              Recently Flagged Scams
            </h2>
            <p className="text-sm text-white/50">
              Live updates from our Solana decentralized detection network
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-10">
            {homeScamCards.map((card) => {
              const badgeStyle = getRiskBadgeStyle(card.riskLevel);
              return (
                <div
                  key={card.id}
                  className="p-4 md:p-5 rounded-xl border border-white/5"
                  style={{ backgroundColor: "rgba(20, 18, 28, 0.95)" }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-0.5">
                        {card.name}
                      </h3>
                      <p className="text-xs text-white/40">{card.address}</p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${badgeStyle.bg} ${badgeStyle.text}`}
                    >
                      {card.riskLabel}
                    </span>
                  </div>

                  {/* Detection */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <i
                      className={`${getDetectionIcon(card.riskLevel)} text-sm ${getDetectionIconColor(card.riskLevel)}`}
                    ></i>
                    <span className="text-xs text-white/50">
                      {card.detectionText}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <i className="ri-time-line text-xs text-white/40"></i>
                      <span className="text-xs text-white/40">
                        {card.timeAgo}
                      </span>
                    </div>
                    {card.showArrow ? (
                      <button
                        onClick={() => navigate("/scan-result")}
                        className="text-white/40 hover:text-[#F7B610] transition-colors cursor-pointer"
                      >
                        <i className="ri-arrow-right-s-line text-lg"></i>
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate("/scan-result")}
                        className="text-xs text-[#F7B610] hover:text-[#F7B610]/80 transition-colors cursor-pointer"
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center mb-16 md:mb-20">
            <button
              onClick={() => navigate("/trending-scams")}
              className="px-8 py-3 text-sm font-medium rounded-xl cursor-pointer whitespace-nowrap border border-[#F7B610]/50 text-[#F7B610] hover:bg-[#F7B610]/10 transition-colors"
              style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
            >
              View All Trending Scams
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
