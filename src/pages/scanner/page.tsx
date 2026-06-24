import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function Scanner() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [tokenAddress, setTokenAddress] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scanSteps = [
    "Checking Solana contract verification",
    "Analyzing Solana token tax rates",
    "Verifying liquidity locks on Solana",
    "Scanning ownership patterns",
    "Checking Solana program source code",
    "Analyzing Solana trading patterns",
  ];

  const startScan = (address: string) => {
    if (!address.trim()) return;
    setIsScanning(true);
    setCurrentStep(0);
    setCompletedSteps([]);

    let step = 0;
    intervalRef.current = setInterval(() => {
      if (step < scanSteps.length) {
        setCompletedSteps((prev) => [...prev, step]);
        setCurrentStep(step + 1);
        step++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        navigate(`/scan-result?token=${encodeURIComponent(address)}`);
      }
    }, 800);
  };

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setTokenAddress(token);
      startScan(token);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startScan(tokenAddress);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {!isScanning ? (
          /* Scanner Input */
          <div className="w-full max-w-xl">
            <div className="text-center mb-8">
              <div
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(247, 182, 16, 0.1)" }}
              >
                <i className="ri-shield-check-line text-3xl md:text-4xl text-[#F7B610]"></i>
              </div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                Solana Token Scanner
              </h1>
              <p className="text-sm md:text-base text-white/60">
                Enter a Solana token contract address to analyze its security.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-search-line text-white/40"></i>
                </div>
                <input
                  type="text"
                  placeholder="Enter Solana token contract address..."
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F7B610]/30 border border-white/10"
                  style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap border border-[#F7B610]/50 hover:bg-[#F7B610]/10"
                style={{ backgroundColor: "rgba(247, 182, 16, 0.15)" }}
              >
                Scan Solana Token
              </button>
            </form>

            {/* Recent Scans */}
            <div
              className="mt-8 p-4 rounded-xl border border-white/10"
              style={{ backgroundColor: "rgba(15, 20, 35, 0.8)" }}
            >
              <h3 className="text-sm font-semibold text-white mb-3">
                Recent Solana Scans
              </h3>
              <div className="space-y-2">
                {[
                  {
                    addr: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    name: "SafeSolana",
                    risk: "Safe",
                  },
                  {
                    addr: "3a9cB2d1X3a9cB2d1X3a9cB2d1X3a9cB2d1",
                    name: "MetaFrog Solana",
                    risk: "Medium",
                  },
                  {
                    addr: "7nY7H7jXN7nH7jXN7nH7jXN7nH7jXN7nH7jX",
                    name: "SolanaPump",
                    risk: "High",
                  },
                ].map((scan, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setTokenAddress(scan.addr);
                      startScan(scan.addr);
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer text-left hover:bg-white/5"
                    style={{ backgroundColor: "rgba(10, 15, 28, 0.5)" }}
                  >
                    <div>
                      <p className="text-sm font-medium text-white">
                        {scan.name}
                      </p>
                      <p className="text-xs text-white/40">
                        {scan.addr.slice(0, 12)}...{scan.addr.slice(-4)}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        scan.risk === "High"
                          ? "bg-red-500/20 text-red-400"
                          : scan.risk === "Medium"
                            ? "bg-[#F7B610]/20 text-[#F7B610]"
                            : "bg-emerald-500/20 text-emerald-400"
                      }`}
                    >
                      {scan.risk}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Scanning Animation */
          <div className="w-full max-w-md relative">
            {/* Subtle gold glow behind card */}
            <div
              className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(247, 182, 16, 0.15), transparent 70%)",
              }}
            ></div>

            <div
              className="relative p-6 md:p-8 rounded-2xl border border-[#F7B610]/30 text-center"
              style={{ backgroundColor: "rgba(15, 20, 35, 0.9)" }}
            >
              {/* Shield Animation */}
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#F7B610]/30 animate-pulse"></div>
                <div
                  className="absolute inset-2 rounded-full border-2 border-[#F7B610]/60 animate-spin"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="ri-shield-check-line text-4xl md:text-5xl text-[#F7B610]"></i>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                Scanning Solana Token...
              </h2>
              <p className="text-sm text-white/50 mb-6">
                Analyzing Solana contract for security vulnerabilities
              </p>

              {/* Steps List */}
              <div className="space-y-3 text-left">
                {scanSteps.map((step, idx) => {
                  const isCompleted = completedSteps.includes(idx);
                  const isActive = currentStep === idx;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {isCompleted ? (
                          <i className="ri-check-line text-sm text-white"></i>
                        ) : isActive ? (
                          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          isCompleted
                            ? "text-white/50"
                            : isActive
                              ? "text-white"
                              : "text-white/40"
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsScanning(false);
                setCurrentStep(0);
                setCompletedSteps([]);
              }}
              className="mt-6 flex items-center gap-2 mx-auto text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              Back To Scanner
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
