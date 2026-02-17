import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2 } from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post("/contacts/submit", formData);
            toast.success("Message Sent!", {
                description: "We'll get back to you across your global nodes shortly.",
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error: any) {
            toast.error("Transmission Error", {
                description: error.response?.data?.message || "Failed to reach our servers.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#d2a437] font-black uppercase tracking-[0.4em] mb-4 text-xs">
                        Global Connections
                    </p>
                    <h1 className="text-5xl md:text-6xl font-black text-[#1f2918] tracking-tighter mb-6 italic">
                        Get in <span className="text-[#d2a437]">Touch</span>
                    </h1>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Whether you're looking to partner, trade, or optimize your supply chain,
                        our global support network is ready to assist you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-[#d2a437] mb-6 group-hover:bg-[#d2a437] group-hover:text-white transition-all">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-black text-[#1f2918] mb-2 uppercase tracking-tight">Email Hub</h3>
                            <p className="text-gray-400 text-sm font-medium mb-4 italic">Direct lines to our departments</p>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">General:</p>
                                <p className="text-sm font-black text-[#1f2918]">support@blaunk.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-black text-[#1f2918] mb-2 uppercase tracking-tight">Support Nodes</h3>
                            <p className="text-gray-400 text-sm font-medium mb-4 italic">24/7 Global assistance</p>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">India Office:</p>
                                <p className="text-sm font-black text-[#1f2918]">+91 96189 48456</p>
                            </div>
                        </div>

                        <div className="bg-[#1f2918] p-8 rounded-[40px] shadow-2xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d2a437]/10 rounded-full blur-3xl" />
                            <MapPin size={40} className="text-[#d2a437] mb-6 animate-bounce" />
                            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Headquarters</h3>
                            <p className="text-gray-400 text-xs font-medium leading-relaxed">
                                Blaunk Global Tower, <br />
                                Business District, <br />
                                Hyderabad, India
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-10">
                            <MessageSquare size={24} className="text-[#d2a437]" />
                            <h2 className="text-2xl font-black text-[#1f2918] tracking-tight">Submit Inquiry</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Identification</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-5 text-sm font-bold transition-all outline-none"
                                        placeholder="Full Name / Entity"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Communication Channel</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-5 text-sm font-bold transition-all outline-none"
                                        placeholder="official@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Subject Protocol</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-5 text-sm font-bold transition-all outline-none"
                                    placeholder="E.g. Partnership Opportunity"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Inquiry Payload</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-5 text-sm font-medium transition-all outline-none min-h-[180px]"
                                    placeholder="Provide detailed information regarding your request..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full md:w-fit bg-[#1f2918] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl shadow-black/10 disabled:opacity-50 group active:scale-95"
                            >
                                {loading ? (
                                    <Loader2 size={18} className="animate-spin" />
                                ) : (
                                    <>
                                        Initiate Transmission
                                        <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
