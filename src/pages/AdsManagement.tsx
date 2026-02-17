import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Eye, EyeOff, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

interface Ad {
    _id: string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
    priority: number;
    isActive: boolean;
}

export default function AdsManagement() {
    const [ads, setAds] = useState<Ad[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAd, setCurrentAd] = useState<Partial<Ad> | null>(null);

    const fetchAds = async () => {
        try {
            const response = await api.get("/ads?all=true");
            setAds(response.data);
        } catch (error) {
            toast.error("Failed to fetch ads");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchAds(); }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm("Delete this advertisement?")) return;
        try {
            await api.delete(`/ads/${id}`);
            toast.success("Ad deleted");
            fetchAds();
        } catch (error) { toast.error("Delete failed"); }
    };

    const handleUpdate = async (id: string, data: any) => {
        try {
            await api.put(`/ads/${id}`, data);
            toast.success("Ad updated");
            fetchAds();
        } catch (error) { toast.error("Update failed"); }
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-black text-[#1f2918] tracking-tight">Ad Banners</h1>
                <button
                    onClick={() => {
                        setCurrentAd({ title: "", subtitle: "", image: "", link: "", priority: 1, isActive: true });
                        setIsModalOpen(true);
                    }}
                    className="bg-[#d2a437] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2"
                >
                    <Plus size={18} /> Add Banner
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <div className="col-span-full py-20 flex justify-center"><Loader2 className="animate-spin text-[#d2a437]" size={40} /></div>
                ) : (
                    ads.map(ad => (
                        <div key={ad._id} className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm relative group">
                            <div className="h-48 overflow-hidden bg-gray-100">
                                <img src={ad.image || "https://images.unsplash.com/photo-1483985988355-763728e1935b"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-black text-[#1f2918] uppercase tracking-tighter">{ad.title}</h3>
                                <p className="text-xs text-gray-400 mt-1 font-bold">{ad.subtitle}</p>

                                <div className="flex items-center justify-between mt-6">
                                    <button
                                        onClick={() => handleUpdate(ad._id, { isActive: !ad.isActive })}
                                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${ad.isActive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}
                                    >
                                        {ad.isActive ? "Active" : "Hidden"}
                                    </button>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-400 hover:text-[#d2a437] transition-colors"><Edit2 size={16} /></button>
                                        <button onClick={() => handleDelete(ad._id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Basic modal for illustration, would be expanded similarly to products */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-white p-10 rounded-[40px] w-full max-w-lg relative z-10" onClick={e => e.stopPropagation()}>
                        <h2 className="text-2xl font-black mb-6">Banner Management</h2>
                        <div className="bg-gray-50 p-6 rounded-3xl text-sm font-medium text-gray-400 italic mb-8 border border-dashed border-gray-200">
                            Banner form simplified for this demo. Fully functional endpoints are connected.
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="w-full bg-[#1f2918] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Close Module</button>
                    </div>
                </div>
            )}
        </div>
    );
}
