import { useState, useEffect } from "react";
import {
    Plus,
    Edit2,
    Trash2,
    Eye,
    EyeOff,
    X,
    Loader2,
    MoveUp,
    MoveDown
} from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

interface Section {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    type: string;
    order: number;
    isActive: boolean;
}

export default function HomepageManagement() {
    const [sections, setSections] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState<Partial<Section> | null>(null);
    const [formLoading, setFormLoading] = useState(false);

    const fetchSections = async () => {
        try {
            const response = await api.get("/homepage?all=true");
            setSections(response.data.sections);
        } catch (error) {
            toast.error("Failed to fetch sections");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSections();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this section?")) return;
        try {
            await api.delete(`/homepage/sections/${id}`);
            toast.success("Section deleted successfully");
            fetchSections();
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormLoading(true);
        try {
            if (currentSection?._id) {
                await api.put(`/homepage/sections/${currentSection._id}`, currentSection);
                toast.success("Section updated");
            } else {
                await api.post("/homepage/sections", currentSection);
                toast.success("Section added");
            }
            setIsModalOpen(false);
            fetchSections();
        } catch (error) {
            toast.error("Operation failed");
        } finally {
            setFormLoading(false);
        }
    };

    const handleToggleActive = async (section: Section) => {
        try {
            await api.put(`/homepage/sections/${section._id}`, { isActive: !section.isActive });
            toast.success(`Section ${!section.isActive ? 'activated' : 'deactivated'}`);
            fetchSections();
        } catch (error) {
            toast.error("Update failed");
        }
    };

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-[#1f2918] tracking-tight">Homepage Architect</h1>
                    <p className="text-gray-500 font-medium">Design and structure your global landing page experience.</p>
                </div>
                <button
                    onClick={() => {
                        setCurrentSection({
                            title: "",
                            subtitle: "",
                            description: "",
                            type: "product-grid",
                            order: sections.length + 1,
                            isActive: true
                        });
                        setIsModalOpen(true);
                    }}
                    className="bg-[#d2a437] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#d2a437]/20 hover:bg-black transition-all flex items-center gap-3"
                >
                    <Plus size={20} />
                    Add New Section
                </button>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 gap-6">
                {loading ? (
                    <div className="bg-white p-20 rounded-[40px] flex flex-col items-center justify-center gap-4">
                        <Loader2 className="animate-spin text-[#d2a437]" size={40} />
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Loading Architecture...</p>
                    </div>
                ) : (
                    sections.map((section, index) => (
                        <div key={section._id} className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all group">
                            <div className="flex items-center gap-6 flex-1">
                                <div className="w-14 h-14 rounded-3xl bg-[#f8f9fa] flex items-center justify-center text-[#1f2918] font-black text-xl shadow-inner group-hover:bg-[#d2a437] group-hover:text-white transition-colors">
                                    {section.order}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-[#1f2918]">{section.title}</h3>
                                    <p className="text-xs text-[#d2a437] font-bold uppercase tracking-widest">{section.type}</p>
                                    <p className="text-sm text-gray-400 font-medium mt-1 max-w-md line-clamp-1">{section.description}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => handleToggleActive(section)}
                                    className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${section.isActive
                                        ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                        : "bg-red-50 text-red-600 border-red-100"
                                        }`}
                                >
                                    {section.isActive ? "Live" : "Hidden"}
                                </button>

                                <div className="h-10 w-[1px] bg-gray-100 hidden md:block" />

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => {
                                            setCurrentSection(section);
                                            setIsModalOpen(true);
                                        }}
                                        className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-[#d2a437] hover:bg-[#d2a437]/5 transition-all"
                                    >
                                        <Edit2 size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(section._id)}
                                        className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Section Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
                    <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden">
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-[#f8f9fa]">
                            <div>
                                <h2 className="text-2xl font-black text-[#1f2918]">{currentSection?._id ? "Edit Section" : "Create Section"}</h2>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Section Layout Module</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-3 bg-white rounded-2xl text-gray-400 hover:text-black shadow-sm"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Section Title</label>
                                <input
                                    type="text"
                                    required
                                    value={currentSection?.title || ""}
                                    onChange={(e) => setCurrentSection({ ...currentSection, title: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-bold transition-all outline-none"
                                    placeholder="E.g. Featured Electronics"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Display Order</label>
                                    <input
                                        type="number"
                                        required
                                        value={currentSection?.order || ""}
                                        onChange={(e) => setCurrentSection({ ...currentSection, order: Number(e.target.value) })}
                                        className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-bold transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Section Type</label>
                                    <select
                                        value={currentSection?.type || ""}
                                        onChange={(e) => setCurrentSection({ ...currentSection, type: e.target.value })}
                                        className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-bold transition-all outline-none"
                                    >
                                        <option value="hero">Hero Slider</option>
                                        <option value="product-grid">Product Grid</option>
                                        <option value="banner">Promotional Banner</option>
                                        <option value="category-slider">Category Slider</option>
                                        <option value="hospitality-slider">Hospitality Slider</option>
                                        <option value="text-image">Text & Image</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Description</label>
                                <textarea
                                    value={currentSection?.description || ""}
                                    onChange={(e) => setCurrentSection({ ...currentSection, description: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-medium transition-all outline-none min-h-[100px]"
                                />
                            </div>

                            <div className="flex items-center gap-3 pt-4 cursor-pointer group w-fit" onClick={() => setCurrentSection({ ...currentSection, isActive: !currentSection?.isActive })}>
                                <div className={`w-12 h-6 rounded-full transition-all relative ${currentSection?.isActive ? "bg-emerald-500" : "bg-gray-200"}`}>
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${currentSection?.isActive ? "right-1" : "left-1"}`} />
                                </div>
                                <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Section Active Status</span>
                            </div>

                            <div className="pt-8 flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest border-2 border-gray-100 text-gray-400 hover:bg-gray-50 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={formLoading}
                                    className="flex-[2] bg-[#1f2918] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-black transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                                >
                                    {formLoading ? <Loader2 size={18} className="animate-spin" /> : currentSection?._id ? "Update Architecture" : "Save Architecture"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
