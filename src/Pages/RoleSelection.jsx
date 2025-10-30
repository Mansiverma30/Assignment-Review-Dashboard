import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#0a1624] via-[#101922] to-[#122b49] overflow-hidden">
      {/* Soft glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,127,236,0.15)_0%,transparent_70%)]"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center w-[90%] max-w-md bg-[#101922]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_35px_-10px_rgba(19,127,236,0.4)] rounded-2xl p-10 text-center"
      >
        {/* Logo/Icon */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#137fec]/10 mb-6">
          <span className="material-symbols-outlined text-[#137fec] text-5xl">
            assignment
          </span>
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl font-bold tracking-tight">
          Assignment Dashboard
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          Select your role to continue
        </p>

        {/* Buttons */}
        <div className="flex flex-col w-full gap-4 mt-8">
          <button
            onClick={() => {
              localStorage.setItem("role", "admin");
              navigate("/admin");
            }}
            className="flex items-center justify-center gap-2 h-12 rounded-lg bg-linear-to-r from-[#137fec] to-[#4ea7ff] text-white font-semibold tracking-wide transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined">shield_person</span>
            Continue as Admin
          </button>

          <button
            onClick={() => {
              localStorage.setItem("role", "student");
              navigate("/student");
            }}
            className="flex items-center justify-center gap-2 h-12 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold tracking-wide transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined">school</span>
            Continue as Student
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RoleSelection;
