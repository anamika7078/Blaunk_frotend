import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Calendar, Loader2 } from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

export default function FestivalsManagement() {
    const [festivals, setFestivals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchFestivals = async () => {
        try {
            const response = await api.get("/festivals");
            setFestivals(response.data);
        } catch (error) { toast.error("Failed to fetch festivals"); }
        finally { setLoading(false); }
    };

    useEffect(() => { fetchFestivals(); }, []);

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-black text-[#1f2918] tracking-tight">Seasonal Festivals</h1>
                <button className="bg-[#d2a437] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2">
                    <Plus size={18} /> Schedule Event
                </button>
            </div>

            <div className="space-y-4">
                {loading ? (
                    <div className="py-20 flex justify-center"><Loader2 className="animate-spin text-[#d2a437]" size={40} /></div>
                ) : (
                    festivals.map(fest => (
                        <div key={fest._id} className="bg-white p-6 rounded-[32px] border border-gray-100 flex items-center justify-between group hover:shadow-lg transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-3xl bg-amber-50 flex items-center justify-center text-[#d2a437]">
                                    <Calendar size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-[#1f2918] tracking-tight">{fest.name}</h3>
                                    <div className="flex gap-4 mt-1">
                                        <p className="text-[10px] font-black uppercase text-gray-400">Offer: <span className="text-emerald-500">{fest.discountOffer}</span></p>
                                        <p className="text-[10px] font-black uppercase text-gray-400">Starts: <span className="text-[#d2a437]">{new Date(fest.startDate).toLocaleDateString()}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-3 text-gray-400 hover:text-[#d2a437] transition-colors"><Edit2 size={18} /></button>
                                <button className="p-3 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
