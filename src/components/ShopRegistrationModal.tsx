import { useState } from "react";
import { X, Store, User, Mail, Phone, MapPin, Tag, FileText, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

interface ShopRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const categories = ["PET SHOP", "FLOWER SHOP", "ELECTRONICS", "FASHION", "GROCERY", "GIFTS"];

export default function ShopRegistrationModal({ isOpen, onClose }: ShopRegistrationModalProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        shopName: "",
        ownerName: "",
        email: "",
        phone: "",
        category: "",
        city: "",
        pincode: "",
        address: ""
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post("/shops/register", formData);
            toast.success("Registration Submitted!", {
                description: "Our team will verify your shop and contact you soon.",
            });
            onClose();
            setFormData({
                shopName: "",
                ownerName: "",
                email: "",
                phone: "",
                category: "",
                city: "",
                pincode: "",
                address: ""
            });
        } catch (error: any) {
            toast.error("Registration Failed", {
                description: error.response?.data?.message || "Something went wrong.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                {/* Header */}
                <div className="bg-[#1f2918] p-8 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-[#d2a437] rounded-2xl text-[#1f2918] shadow-lg">
                            <Store size={24} />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight uppercase">Register Your <span className="text-[#d2a437]">Shop</span></h2>
                    </div>
                    <p className="text-gray-400 text-sm font-medium italic">Join our global marketplace and scale your local business.</p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8 md:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Shop Name */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Shop Entity Name</label>
                            <div className="relative">
                                <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input
                                    required
                                    type="text"
                                    placeholder="E.g. Pet Paradise"
                                    value={formData.shopName}
                                    onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Owner Name */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Owner / Manager</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input
                                    required
                                    type="text"
                                    placeholder="Full Name"
                                    value={formData.ownerName}
                                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Official Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input
                                    required
                                    type="email"
                                    placeholder="contact@shop.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Contact Number</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input
                                    required
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Category Dropdown */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Business Category</label>
                            <div className="relative">
                                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <select
                                    required
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none transition-all appearance-none"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* City */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">City / Region</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input
                                    required
                                    type="text"
                                    placeholder="E.g. Mumbai"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address Full */}
                    <div className="space-y-1.5 mb-10">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Store Base Address</label>
                        <div className="relative">
                            <FileText className="absolute left-4 top-5 text-gray-300" size={16} />
                            <textarea
                                placeholder="Street, Landmark, City, State..."
                                value={formData.address}
                                rows={3}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-[32px] pl-12 pr-4 py-5 text-sm font-bold outline-none transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] border-2 border-gray-100 text-gray-400 hover:bg-gray-50 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-[2] bg-[#1f2918] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl shadow-black/10 disabled:opacity-50 group"
                        >
                            {loading ? (
                                <Loader2 className="animate-spin" size={18} />
                            ) : (
                                <>
                                    Submit Registration
                                    <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
