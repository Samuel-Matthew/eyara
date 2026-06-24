import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Trending Scams", path: "/trending-scams" },
    { label: "Resources", path: "/resources" },
    { label: "About", path: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="w-full border-b border-white/5"
      style={{ backgroundColor: "rgba(10, 15, 28, 0.95)" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="url(#sunburst-nav)" />
                <path
                  d="M20 2 L20 8 M20 32 L20 38 M2 20 L8 20 M32 20 L38 20 M6.34 6.34 L10.6 10.6 M29.4 29.4 L33.66 33.66 M6.34 33.66 L10.6 29.4 M29.4 10.6 L33.66 6.34"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-[#F7B610]"
                />
                <defs>
                  <radialGradient id="sunburst-nav" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F7B610" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#F7B610" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <span className="text-lg md:text-xl font-heading font-bold tracking-wider text-white">
              EYARA
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  isActive(link.path)
                    ? "text-[#F7B610]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Connect Wallet */}
          <div className="hidden md:block">
            <button
              className="px-5 py-2.5 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 border border-[#F7B610]/50 hover:bg-[#F7B610]/10"
              style={{ backgroundColor: "rgba(247, 182, 16, 0.15)" }}
            >
              <i className="ri-wallet-3-line text-base"></i>
              Connect Wallet
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i
              className={`ri-${mobileMenuOpen ? "close" : "menu"}-line text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-white/5"
          style={{ backgroundColor: "rgba(10, 15, 28, 0.98)" }}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  isActive(link.path)
                    ? "text-[#F7B610] bg-[#F7B610]/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                className="w-full px-5 py-2.5 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 border border-[#F7B610]/50"
                style={{ backgroundColor: "rgba(247, 182, 16, 0.15)" }}
              >
                <i className="ri-wallet-3-line text-base"></i>
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
