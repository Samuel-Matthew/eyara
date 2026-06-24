import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: "#0A0F1C" }}
    >
      <div
        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(247, 182, 16, 0.1)" }}
      >
        <i className="ri-error-warning-line text-4xl text-[#F7B610]"></i>
      </div>
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
        404
      </h1>
      <p className="text-sm text-white/50 mb-6">Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 text-sm font-medium rounded-lg border border-[#F7B610]/50 text-[#F7B610] hover:bg-[#F7B610]/10 transition-colors cursor-pointer whitespace-nowrap"
        style={{ backgroundColor: "rgba(247, 182, 16, 0.08)" }}
      >
        Go Home
      </button>
    </div>
  );
}
