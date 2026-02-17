import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));

      toast.success("Login Successful!", {
        description: `Welcome back, ${response.data.name}`,
      });

      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error);
      toast.error("Login Failed", {
        description: error.response?.data?.message || "Invalid credentials. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f140a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d2a437]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4b5a0a]/20 rounded-full blur-[120px]" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo / Brand Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-gradient-to-br from-[#d2a437] to-[#a38a44] rounded-3xl mb-6 shadow-2xl shadow-[#d2a437]/20 border border-white/20 animate-gpu">
            <ShieldCheck size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2 italic">
            BLAUNK <span className="text-[#d2a437]">ADMIN</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium uppercase tracking-[0.3em]">
            Global Hub Management
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] p-8 border border-white/10 shadow-3xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">
                Admin Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#d2a437] transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-[#d2a437]/50 focus:outline-none focus:ring-4 focus:ring-[#d2a437]/10 transition-all"
                  placeholder="admin@blaunk.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">
                Secret Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#d2a437] transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-gray-600 focus:border-[#d2a437]/50 focus:outline-none focus:ring-4 focus:ring-[#d2a437]/10 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-black/40 text-[#d2a437] focus:ring-[#d2a437]/30" />
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Keep me signed in</span>
              </label>
              <a href="#" className="text-xs text-[#d2a437] font-bold hover:underline underline-offset-4">Forgot ID?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full group bg-[#d2a437] hover:bg-white text-black font-black py-4 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-[#d2a437]/10 disabled:opacity-50 transform hover:-translate-y-1 active:scale-95 border-2 border-transparent hover:border-[#d2a437]"
            >
              <span className="uppercase tracking-widest">
                {loading ? "Verifying Access..." : "SECURE LOGIN"}
              </span>
              {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {/* Demo Credentials Reference */}
          <div className="mt-6 p-4 bg-[#d2a437]/10 border border-[#d2a437]/30 rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#d2a437]/20 rounded-lg">
                <ShieldCheck size={16} className="text-[#d2a437]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-black text-[#d2a437] uppercase tracking-widest mb-2">Demo Credentials</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-300 font-mono">
                    <span className="text-gray-500">Email:</span> admin@blaunk.com
                  </p>
                  <p className="text-xs text-gray-300 font-mono">
                    <span className="text-gray-500">Password:</span> password123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <p className="mt-8 text-center text-gray-500 text-xs font-medium">
          Protected by Blaunk <span className="text-gray-400">Quantum Security</span>. <br />
          Unauthorized access is strictly prohibited.
        </p>
      </div>
    </div>
  );
}
