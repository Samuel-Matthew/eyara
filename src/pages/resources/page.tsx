import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function Resources() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <div
            className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(247, 182, 16, 0.1)" }}
          >
            <i className="ri-tools-line text-3xl text-[#F7B610]"></i>
          </div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
            Under Development
          </h1>
          <p className="text-sm text-white/50 max-w-md mx-auto">
            We're building something great. This page will be available soon.
          </p>
        </div>
      </main>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setShowPopup(false)}
          ></div>
          <div
            className="relative w-full max-w-md p-6 md:p-8 rounded-xl border border-white/10 text-center"
            style={{ backgroundColor: "#14121C" }}
          >
            <div
              className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(247, 182, 16, 0.12)" }}
            >
              <i className="ri-error-warning-line text-2xl text-[#F7B610]"></i>
            </div>
            <h2 className="text-lg font-heading font-bold text-white mb-2">
              Page Under Development
            </h2>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
              This page is currently under development. Our team is working hard
              to bring you valuable resources soon. Check back later!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2.5 text-sm font-medium rounded-lg text-white cursor-pointer whitespace-nowrap transition-all hover:brightness-110"
              style={{ backgroundColor: "#F7B610", color: "#0A0F1C" }}
            >
              Got It
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
