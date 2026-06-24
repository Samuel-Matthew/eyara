import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import {
  scanResultSafe,
  scanResultDanger,
  scanningSteps,
} from "@/mocks/tokens";
import type { RiskCheck, ScanResult, ScanStep } from "@/mocks/tokens";

function RiskCheckCard({ check }: { check: RiskCheck }) {
  const [expanded, setExpanded] = useState(false);

  const iconMap = {
    danger: "ri-close-circle-line",
    warning: "ri-error-warning-line",
    safe: "ri-checkbox-circle-line",
  };

  const statusIconColorMap = {
    danger: "text-[#FF4444]",
    warning: "text-[#F7B610]",
    safe: "text-[#34D399]",
  };

  const badgeBgColorMap = {
    danger: "bg-[#FF4444]/15 text-[#FF4444] border-[#FF4444]/30",
    warning: "bg-[#F7B610]/15 text-[#F7B610] border-[#F7B610]/30",
    safe: "bg-[#34D399]/15 text-[#34D399] border-[#34D399]/30",
  };

  const iconBgMap = {
    danger: "rgba(255, 68, 68, 0.1)",
    warning: "rgba(247, 182, 16, 0.1)",
    safe: "rgba(52, 211, 153, 0.1)",
  };

  return (
    <div
      className="rounded-xl border border-white/5 overflow-hidden"
      style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 md:p-5 cursor-pointer text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ backgroundColor: iconBgMap[check.status] }}
          >
            <i
              className={`${iconMap[check.status]} text-lg ${statusIconColorMap[check.status]}`}
            ></i>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{check.title}</h3>
            <p className="text-xs text-white/50 mt-0.5">{check.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className={`px-2.5 py-1 text-xs font-medium rounded-full border ${badgeBgColorMap[check.status]}`}
          >
            {check.statusLabel}
          </span>
          <i
            className={`ri-arrow-down-s-line text-white/40 transition-transform ${expanded ? "rotate-180" : ""}`}
          ></i>
        </div>
      </button>
      {expanded && check.details && (
        <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
          <div className="pl-12 border-t border-white/5 pt-3">
            <p className="text-sm text-white/60 leading-relaxed">
              {check.details}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const knownSafeSolanaTokens = [
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  "So11111111111111111111111111111111111111112",
  "safe",
  "solana",
];

function isSafeSolanaToken(address: string): boolean {
  const lowerAddr = address.toLowerCase();
  return knownSafeSolanaTokens.some((safe) =>
    lowerAddr.includes(safe.toLowerCase()),
  );
}

function getResultForToken(address: string): ScanResult {
  if (isSafeSolanaToken(address)) {
    return { ...scanResultSafe, address };
  }
  return { ...scanResultDanger, address };
}

export default function ScanResult() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const result = getResultForToken(token);

  const [scanning, setScanning] = useState(true);
  const [scanSteps, setScanSteps] = useState<ScanStep[]>(() =>
    scanningSteps.map((s) => ({ ...s, status: "pending" as const })),
  );
  const [showResults, setShowResults] = useState(false);
  const scanTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!token) {
      setScanning(false);
      setShowResults(true);
      return;
    }

    let currentStep = 0;
    const totalSteps = scanSteps.length;

    scanTimerRef.current = setInterval(() => {
      if (currentStep >= totalSteps) {
        if (scanTimerRef.current) clearInterval(scanTimerRef.current);
        setTimeout(() => {
          setScanning(false);
          setTimeout(() => setShowResults(true), 600);
        }, 350);
        return;
      }

      setScanSteps((prev) =>
        prev.map((step, i) => {
          if (i < currentStep) return { ...step, status: "complete" as const };
          if (i === currentStep)
            return { ...step, status: "checking" as const };
          return step;
        }),
      );

      currentStep++;
    }, 750);

    return () => {
      if (scanTimerRef.current) clearInterval(scanTimerRef.current);
    };
  }, [token]);

  const riskPercentage = result.riskScore;
  const isSafe = result.isSafe;

  const riskBarGradient = isSafe
    ? "linear-gradient(90deg, #34D399, #10B981)"
    : "linear-gradient(90deg, #FF4444, #FF6B6B)";

  const riskTextColor = isSafe ? "text-[#34D399]" : "text-[#FF4444]";
  const riskBadgeBg = isSafe
    ? "bg-[#34D399]/20 text-[#34D399]"
    : "bg-[#FF4444]/20 text-[#FF4444]";
  const headerIcon = isSafe
    ? "ri-checkbox-circle-line"
    : "ri-close-circle-line";
  const headerIconColor = isSafe ? "text-[#34D399]" : "text-[#FF4444]";
  const headerIconBg = isSafe
    ? "rgba(52, 211, 153, 0.1)"
    : "rgba(255, 68, 68, 0.1)";

  const getStepIcon = (status: ScanStep["status"]) => {
    if (status === "checking") return "ri-loader-4-line animate-spin";
    if (status === "complete") return "ri-checkbox-circle-line";
    return "ri-checkbox-blank-circle-line";
  };

  const getStepColor = (status: ScanStep["status"]) => {
    if (status === "checking") return "text-[#F7B610]";
    if (status === "complete") return "text-[#34D399]";
    return "text-white/25";
  };

  const getStepBg = (status: ScanStep["status"]) => {
    if (status === "checking") return "rgba(247, 182, 16, 0.15)";
    if (status === "complete") return "rgba(52, 211, 153, 0.1)";
    return "rgba(255, 255, 255, 0.03)";
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 md:py-12 relative z-10">
        {/* Scanning Animation */}
        {scanning && (
          <div className="max-w-2xl mx-auto animate-fadeIn">
            {/* Scanning Header */}
            <div className="text-center mb-10 md:mb-12">
              {/* Pulsing radar indicator */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{ backgroundColor: "rgba(247, 182, 16, 0.15)" }}
                ></div>
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(247, 182, 16, 0.2) 0%, rgba(247, 182, 16, 0.05) 60%, transparent 70%)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(247, 182, 16, 0.12)" }}
                  >
                    <i className="ri-radar-line text-2xl md:text-3xl text-[#F7B610]"></i>
                  </div>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
                Scanning Solana Token
              </h2>
              <p className="text-sm text-white/40 font-mono bg-white/5 px-4 py-2 rounded-lg inline-block max-w-full break-all">
                {token}
              </p>
            </div>

            {/* Scanning Steps */}
            <div className="space-y-2.5 md:space-y-3">
              {scanSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex items-center gap-3 md:gap-4 px-4 md:px-5 py-3 md:py-3.5 rounded-xl border border-white/5 transition-all duration-500"
                  style={{ backgroundColor: getStepBg(step.status) }}
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`${getStepIcon(step.status)} text-lg ${getStepColor(step.status)}`}
                    ></i>
                  </div>
                  <span
                    className={`text-sm transition-colors duration-500 ${
                      step.status === "complete"
                        ? "text-[#34D399]"
                        : step.status === "checking"
                          ? "text-[#F7B610]"
                          : "text-white/30"
                    }`}
                  >
                    {step.label}
                  </span>
                  {step.status === "complete" && (
                    <span className="ml-auto text-[11px] text-[#34D399]/70 font-medium whitespace-nowrap">
                      PASSED
                    </span>
                  )}
                  {step.status === "checking" && (
                    <span className="ml-auto text-[11px] text-[#F7B610]/70 font-medium whitespace-nowrap animate-pulse">
                      CHECKING...
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.06)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${(scanSteps.filter((s) => s.status === "complete").length / scanSteps.length) * 100}%`,
                    background: "linear-gradient(90deg, #F7B610, #E5A800)",
                  }}
                ></div>
              </div>
              <p className="text-xs text-white/30 text-center mt-2">
                {scanSteps.filter((s) => s.status === "complete").length} of{" "}
                {scanSteps.length} checks completed
              </p>
            </div>
          </div>
        )}

        {/* Results - with fade-in transition */}
        {showResults && !scanning && (
          <div className="max-w-3xl mx-auto animate-fadeIn">
            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-6 cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              Back To Home
            </button>

            {/* Scan Complete Badge */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#34D399]/15 flex-shrink-0">
                <i className="ri-check-line text-xs text-[#34D399]"></i>
              </div>
              <span className="text-xs text-[#34D399] font-medium">
                Scan Complete
              </span>
            </div>

            {/* Token Header */}
            <div
              className="p-4 md:p-5 rounded-xl border border-white/5 mb-4 md:mb-5"
              style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg md:text-xl font-heading font-bold text-white">
                      {result.tokenName}
                    </h2>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/10 text-white/60 border border-white/10">
                      {result.symbol}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 font-mono">{token}</p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${riskBadgeBg}`}
                >
                  {result.riskLabel}
                </span>
              </div>
            </div>

            {/* Risk Score */}
            <div
              className="p-4 md:p-5 rounded-xl border border-white/5 mb-4 md:mb-5"
              style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ backgroundColor: headerIconBg }}
                >
                  <i
                    className={`${headerIcon} text-xl md:text-2xl ${headerIconColor}`}
                  ></i>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Overall Risk Score
                  </h3>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className="h-3 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${riskPercentage}%`,
                      background: riskBarGradient,
                    }}
                  ></div>
                </div>
              </div>

              <p className={`text-sm font-medium ${riskTextColor}`}>
                {riskPercentage}% Risk Level - {result.recommendation}
              </p>
            </div>

            {/* Risk Checks */}
            <div className="space-y-3 md:space-y-4">
              {result.checks.map((check) => (
                <RiskCheckCard key={check.id} check={check} />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 md:mt-8">
              <button
                onClick={() => navigate("/")}
                className="w-full sm:flex-1 py-3 border border-[#F7B610]/50 text-[#F7B610] hover:bg-[#F7B610]/10 text-sm font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap"
                style={{ backgroundColor: "rgba(247, 182, 16, 0.08)" }}
              >
                Scan Another Solana Token
              </button>
              <button className="w-full sm:w-auto px-6 py-3 text-sm text-[#F7B610] hover:text-[#F7B610]/80 transition-colors cursor-pointer whitespace-nowrap">
                Report False Positive
              </button>
            </div>
          </div>
        )}

        {/* No token provided state */}
        {!token && showResults && (
          <div className="max-w-xl mx-auto text-center py-20 animate-fadeIn">
            <div
              className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(247, 182, 16, 0.1)" }}
            >
              <i className="ri-search-line text-2xl text-[#F7B610]"></i>
            </div>
            <h2 className="text-xl font-heading font-bold text-white mb-2">
              No Token Address Provided
            </h2>
            <p className="text-sm text-white/50 mb-6">
              Enter a Solana token address to start scanning.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2.5 text-sm font-medium rounded-xl cursor-pointer whitespace-nowrap transition-all hover:brightness-110"
              style={{ backgroundColor: "#F7B610", color: "#0A0F1C" }}
            >
              Go To Scanner
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
