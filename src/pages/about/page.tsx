import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";



const stats = [
  {
    id: "1",
    value: "147,832+",
    label: "Total Solana Scans",
    icon: "ri-radar-line",
  },
  {
    id: "2",
    value: "12,450+",
    label: "Scams Detected",
    icon: "ri-error-warning-line",
  },
  {
    id: "3",
    value: "98.7%",
    label: "Detection Accuracy",
    icon: "ri-checkbox-circle-line",
  },
  {
    id: "4",
    value: "45,000+",
    label: "Community Members",
    icon: "ri-group-line",
  },
];

const coreValues = [
  {
    id: "1",
    icon: "ri-shield-check-line",
    title: "Security First",
    description:
      "Every line of our detection engine is built with one goal — keeping Solana traders safe from malicious contracts and bad actors.",
  },
  {
    id: "2",
    icon: "ri-eye-line",
    title: "Radical Transparency",
    description:
      "Our scanning methodology is open-source. We believe transparency builds trust, and trust builds a stronger Solana ecosystem.",
  },
  {
    id: "3",
    icon: "ri-group-2-line",
    title: "Community Powered",
    description:
      "Eyara is only as strong as its community. Every scam report, every flag, every verification strengthens the network for everyone.",
  },
  {
    id: "4",
    icon: "ri-rocket-2-line",
    title: "Speed Matters",
    description:
      "In crypto, seconds matter. Our engine delivers comprehensive Solana token analysis in under 5 seconds from scan to result.",
  },
];

const howItWorks = [
  {
    id: "1",
    step: "01",
    title: "Enter Token Address",
    description:
      "Paste any Solana token contract address into the Eyara scanner. We support all SPL tokens on the Solana blockchain.",
  },
  {
    id: "2",
    step: "02",
    title: "Comprehensive Scan",
    description:
      "Our engine runs 6 simultaneous security checks — honeypot detection, tax analysis, ownership verification, liquidity locks, distribution, and audit status.",
  },
  {
    id: "3",
    step: "03",
    title: "Instant Risk Score",
    description:
      "Get an immediate 0-100% risk score with detailed breakdowns. Green means safe to trade, red means stay away.",
  },
  {
    id: "4",
    step: "04",
    title: "Community Verification",
    description:
      "Results are cross-referenced with community reports. Multiple confirmations increase confidence in the final verdict.",
  },
];

const timeline = [
  {
    id: "1",
    year: "Q1 2025",
    title: "Eyara Founded",
    description:
      "After a devastating rug pull in the Solana ecosystem, our founder assembled a team of blockchain security experts to build the scanner the community desperately needed.",
  },
  {
    id: "2",
    year: "Q2 2025",
    title: "Beta Launch",
    description:
      "Launched private beta with 500 trusted community members. Scanned over 10,000 Solana tokens in the first month alone.",
  },
  {
    id: "3",
    year: "Q3 2025",
    title: "Public Release",
    description:
      "Opened Eyara to the public. Grew to 25,000 users within the first week. Detection accuracy reached 96.2%.",
  },
  {
    id: "4",
    year: "Q4 2025",
    title: "Community Governance",
    description:
      "Introduced community-driven scam reporting and verification. Launched the Eyara reputation system for trusted community scanners.",
  },
  {
    id: "5",
    year: "Q1 2026",
    title: "Machine Learning Integration",
    description:
      "Deployed advanced ML models trained on millions of Solana transactions. Detection accuracy jumped to 98.7%.",
  },
  {
    id: "6",
    year: "Q2 2026",
    title: "Global Expansion",
    description:
      "Now the most trusted Solana security scanner worldwide. Over 147,000 scans processed and 45,000 community members strong.",
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gold accent line */}
          <div
            className="w-16 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: "#F7B610" }}
          ></div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            Protecting the Solana
            <br />
            <span style={{ color: "#F7B610" }}>Ecosystem Together</span>
          </h1>
          <p className="text-sm md:text-base text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto">
            Eyara is the most advanced Solana blockchain security scanner, built
            by traders for traders. We analyze smart contracts in real-time to
            detect honeypots, rug pulls, and malicious code before they claim
            your funds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 text-sm font-medium rounded-xl cursor-pointer whitespace-nowrap transition-all hover:brightness-110"
              style={{ backgroundColor: "#F7B610", color: "#080D1C" }}
            >
              Start Scanning Now
            </button>
            <button
              onClick={() => navigate("/trending-scams")}
              className="px-8 py-3 text-sm font-medium rounded-xl cursor-pointer whitespace-nowrap transition-all border border-[#F7B610]/40 text-[#F7B610] hover:bg-[#F7B610]/10"
            >
              View Trending Scams
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section — Gold cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-4 md:p-5 rounded-xl text-center border transition-all duration-300"
                style={{
                  backgroundColor: "rgba(247, 182, 16, 0.06)",
                  borderColor: "rgba(247, 182, 16, 0.15)",
                }}
              >
                <div
                  className="w-9 h-9 mx-auto mb-3 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(247, 182, 16, 0.15)" }}
                >
                  <i
                    className={`${stat.icon} text-lg`}
                    style={{ color: "#F7B610" }}
                  ></i>
                </div>
                <div
                  className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-1"
                  style={{ color: "#F7B610" }}
                >
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story — Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Section header with gold accent */}
          <div className="text-center mb-10 md:mb-14">
            <div
              className="w-12 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: "#F7B610" }}
            ></div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              Our Story
            </h2>
            <p className="text-sm text-white/50 max-w-xl mx-auto">
              From a painful rug pull to the most trusted Solana security
              platform — this is how Eyara came to be.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ backgroundColor: "rgba(247, 182, 16, 0.2)" }}
            ></div>

            <div className="space-y-8 md:space-y-10">
              {timeline.map((item, idx) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div
                      className="w-3 h-3 rounded-full border-2"
                      style={{
                        backgroundColor: "#F7B610",
                        borderColor: "#080D1C",
                      }}
                    ></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-10 md:pl-0`}
                  >
                    <div
                      className="inline-block p-4 md:p-5 rounded-xl border transition-all duration-300"
                      style={{
                        backgroundColor: "rgba(15, 20, 35, 0.75)",
                        borderColor: "rgba(247, 182, 16, 0.12)",
                      }}
                    >
                      <span
                        className="text-xs font-medium tracking-wider uppercase mb-1 block"
                        style={{ color: "#F7B610" }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-base font-semibold text-white mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — Gold icon cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div
              className="w-12 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: "#F7B610" }}
            ></div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              What We Stand For
            </h2>
            <p className="text-sm text-white/50 max-w-xl mx-auto">
              These principles guide every decision we make and every line of
              code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="group p-5 md:p-6 rounded-xl border transition-all duration-300 hover:border-[#F7B610]/30"
                style={{
                  backgroundColor: "rgba(15, 20, 35, 0.75)",
                  borderColor: "rgba(255, 255, 255, 0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "rgba(247, 182, 16, 0.12)" }}
                  >
                    <i
                      className={`${value.icon} text-xl`}
                      style={{ color: "#F7B610" }}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Gold numbered steps */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div
              className="w-12 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: "#F7B610" }}
            ></div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              How Eyara Works
            </h2>
            <p className="text-sm text-white/50 max-w-xl mx-auto">
              From token address to risk score in seconds. Here's how our
              detection engine protects you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {howItWorks.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(15, 20, 35, 0.75)",
                  borderColor: "rgba(255, 255, 255, 0.06)",
                }}
              >
                <div
                  className="w-11 h-11 mx-auto mb-3 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(247, 182, 16, 0.12)" }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#F7B610" }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Why Solana — Gold-highlighted section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="p-6 md:p-10 rounded-2xl border text-center"
            style={{
              backgroundColor: "rgba(247, 182, 16, 0.05)",
              borderColor: "rgba(247, 182, 16, 0.15)",
            }}
          >
            <div
              className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(247, 182, 16, 0.12)" }}
            >
              <i
                className="ri-sun-line text-2xl"
                style={{ color: "#F7B610" }}
              ></i>
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-4">
              Why Exclusively Solana?
            </h2>
            <p className="text-sm text-white/55 leading-relaxed max-w-2xl mx-auto mb-6">
              We chose to focus entirely on the Solana blockchain because it's
              where innovation happens fastest — and where scammers are most
              active. By specializing rather than spreading thin across chains,
              Eyara achieves deeper analysis, faster detection, and unmatched
              accuracy on Solana. Our engine understands Solana's unique SPL
              token architecture at a level no multi-chain scanner can match.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs"
                style={{
                  backgroundColor: "rgba(247, 182, 16, 0.1)",
                  color: "#F7B610",
                }}
              >
                <i className="ri-flashlight-line"></i>
                Lightning Speed
              </span>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs"
                style={{
                  backgroundColor: "rgba(247, 182, 16, 0.1)",
                  color: "#F7B610",
                }}
              >
                <i className="ri-fingerprint-line"></i>
                Deep SPL Analysis
              </span>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs"
                style={{
                  backgroundColor: "rgba(247, 182, 16, 0.1)",
                  color: "#F7B610",
                }}
              >
                <i className="ri-shield-check-line"></i>
                Unmatched Accuracy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — Full gold */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="p-8 md:p-12 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(247, 182, 16, 0.15) 0%, rgba(247, 182, 16, 0.08) 50%, rgba(247, 182, 16, 0.04) 100%)",
              border: "1px solid rgba(247, 182, 16, 0.2)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Ready to Scan Smarter?
            </h2>
            <p className="text-sm text-white/55 mb-8 max-w-lg mx-auto leading-relaxed">
              Join 45,000+ Solana traders who trust Eyara to protect their
              investments. Start scanning tokens today — it's free and always
              will be.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigate("/")}
                className="px-8 py-3 text-sm font-medium rounded-xl cursor-pointer whitespace-nowrap transition-all hover:brightness-110"
                style={{ backgroundColor: "#F7B610", color: "#080D1C" }}
              >
                Start Scanning Free
              </button>
              <button
                onClick={() => navigate("/trending-scams")}
                className="px-8 py-3 text-sm font-medium rounded-xl cursor-pointer whitespace-nowrap border border-[#F7B610]/40 text-[#F7B610] hover:bg-[#F7B610]/10 transition-colors"
              >
                Explore Trending Scams
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
