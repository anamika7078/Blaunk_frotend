import { useState, useEffect } from "react";
import { Mail, Trash2, CheckCircle, Clock, Loader2, MessageSquare, ExternalLink, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

interface ContactMessage {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    type: 'general' | 'logistics' | 'partnership';
    details?: any;
    status: 'new' | 'read' | 'replied';
    createdAt: string;
}

export default function ContactsManagement() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const fetchMessages = async () => {
        try {
            const response = await api.get("/contacts");
            setMessages(response.data);
        } catch (error) {
            toast.error("Failed to fetch messages");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchMessages(); }, []);

    const toggleItem = (id: string) => {
        setExpandedItems(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleStatusUpdate = async (id: string, status: string) => {
        try {
            await api.put(`/contacts/${id}`, { status });
            toast.success(`Marked as ${status}`);
            fetchMessages();
        } catch (error) {
            toast.error("Update failed");
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Delete this message?")) return;
        try {
            await api.delete(`/contacts/${id}`);
            toast.success("Message deleted");
            fetchMessages();
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-black text-[#1f2918] tracking-tight">Comms Ledger</h1>
                    <p className="text-gray-500 font-medium">Inbound global inquiries and support requests.</p>
                </div>
                <div className="px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase text-gray-400">Total Entries:</span>
                    <span className="text-lg font-black text-[#d2a437]">{messages.length}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {loading ? (
                    <div className="bg-white p-24 rounded-[40px] flex justify-center items-center shadow-sm">
                        <Loader2 className="animate-spin text-[#d2a437]" size={40} />
                    </div>
                ) : messages.length === 0 ? (
                    <div className="bg-white p-20 rounded-[40px] text-center border-2 border-dashed border-gray-100">
                        <MessageSquare size={48} className="mx-auto text-gray-200 mb-4" />
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No active transmissions found</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div key={msg._id} className={`bg-white rounded-[40px] p-8 shadow-sm border ${msg.status === 'new' ? 'border-[#d2a437]/20 bg-[#d2a437]/[0.02]' : 'border-gray-100'} transition-all hover:shadow-xl group`}>
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${msg.status === 'new' ? 'bg-amber-50 text-amber-600 border-amber-100 animate-pulse' :
                                                msg.status === 'read' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                    'bg-emerald-50 text-emerald-600 border-emerald-100'
                                                }`}>
                                                {msg.status}
                                            </span>
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-600 border border-gray-200`}>
                                                {msg.type || 'general'}
                                            </span>
                                            <span className="text-[10px] font-bold text-gray-400 flex items-center gap-2 italic">
                                                <Clock size={12} />
                                                {new Date(msg.createdAt).toLocaleString()}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => toggleItem(msg._id)}
                                            className={`p-2 rounded-xl transition-all duration-300 ${expandedItems.includes(msg._id) ? 'bg-[#d2a437] text-white rotate-180' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                                        >
                                            <ChevronDown size={20} />
                                        </button>
                                    </div>

                                    <h3 className="text-2xl font-black text-[#1f2918] mb-2">{msg.subject}</h3>
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-black">@</div>
                                            <p className="text-sm font-black text-[#d2a437]">{msg.email}</p>
                                        </div>
                                        <p className="text-sm font-bold text-gray-500 underline underline-offset-4 decoration-[#d2a437]/30">{msg.name}</p>
                                    </div>

                                    {/* Collapsible Content */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedItems.includes(msg._id) ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        {msg.message && (
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-gray-600 text-sm leading-relaxed font-medium mb-4">
                                                {msg.message}
                                            </div>
                                        )}

                                        {msg.type === 'logistics' && msg.details && (
                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#fdfaf3] p-8 rounded-[32px] border border-[#d2a437]/10 mb-2">
                                                {Object.entries(msg.details).map(([key, value]: [string, any]) => (
                                                    value && typeof value === 'string' && !['name', 'email'].includes(key) && (
                                                        <div key={key} className="space-y-1">
                                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</p>
                                                            <p className="text-sm font-black text-[#1f2918] capitalize leading-tight">{value}</p>
                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-row lg:flex-col gap-3 lg:border-l lg:border-gray-50 lg:pl-8 justify-center">
                                    <button
                                        onClick={() => handleStatusUpdate(msg._id, msg.status === 'new' ? 'read' : 'replied')}
                                        className="flex-1 lg:flex-none p-4 rounded-2xl bg-[#1f2918] text-white hover:bg-black transition-all flex items-center justify-center gap-2"
                                    >
                                        <CheckCircle size={18} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Acknowledge</span>
                                    </button>
                                    <a
                                        href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                                        className="flex-1 lg:flex-none p-4 rounded-2xl bg-[#d2a437] text-white hover:bg-black transition-all flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink size={18} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Reply</span>
                                    </a>
                                    <button
                                        onClick={() => handleDelete(msg._id)}
                                        className="flex-1 lg:flex-none p-4 rounded-2xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
                                    >
                                        <Trash2 size={18} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Discard</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
