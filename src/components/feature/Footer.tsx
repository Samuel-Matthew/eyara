import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Trending Scammers", path: "/trending-scams" },
    { label: "Resources", path: "/resources" },
    { label: "About", path: "/about" },
  ];

  const legalLinks = [
    { label: "Terms of Service", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Contact Us", path: "/contact" },
    { label: "Cookie Policy", path: "/cookies" },
  ];

  return (
    <footer
      className="w-full border-t border-white/5"
      style={{ backgroundColor: "#070B14" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="url(#sunburst-footer)" />
                  <path
                    d="M20 2 L20 8 M20 32 L20 38 M2 20 L8 20 M32 20 L38 20 M6.34 6.34 L10.6 10.6 M29.4 29.4 L33.66 33.66 M6.34 33.66 L10.6 29.4 M29.4 10.6 L33.66 6.34"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-[#F7B610]"
                  />
                  <defs>
                    <radialGradient
                      id="sunburst-footer"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop offset="0%" stopColor="#F7B610" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#F7B610" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-lg font-heading font-bold tracking-wider text-white">
                EYARA
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Protecting the Web3 ecosystem with advanced scam detection powered
              by Solana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-white/50 hover:text-[#F7B610] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-white/50 hover:text-[#F7B610] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2025 Eyara. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#F7B610] transition-colors"
            >
              <i className="ri-twitter-x-line text-lg"></i>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#F7B610] transition-colors"
            >
              <i className="ri-telegram-line text-lg"></i>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#F7B610] transition-colors"
            >
              <i className="ri-discord-line text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
