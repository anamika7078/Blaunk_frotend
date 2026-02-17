import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Mail, Shield, Loader2 } from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

export default function UsersManagement() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await api.get("/users");
            setUsers(response.data);
        } catch (error) { toast.error("Failed to fetch users"); }
        finally { setLoading(false); }
    };

    useEffect(() => { fetchUsers(); }, []);

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-black text-[#1f2918] tracking-tight">Admin Control</h1>
                <button className="bg-[#1f2918] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2">
                    <Plus size={18} /> New Administrator
                </button>
            </div>

            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-[#d2a437]" size={40} /></div>
                ) : (
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-50">
                                <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Administrator</th>
                                <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Authorization</th>
                                <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Contact</th>
                                <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {users.map(user => (
                                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6">
                                        <p className="font-black text-[#1f2918]">{user.name}</p>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">ID: {user._id.slice(-6)}</p>
                                    </td>
                                    <td className="p-6">
                                        <span className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest w-fit px-3 py-1 rounded-full ${user.role === 'superadmin' ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-blue-50 text-blue-600 border border-blue-100"}`}>
                                            <Shield size={12} />
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-6 flex items-center gap-2 text-gray-500 font-medium">
                                        <Mail size={14} className="text-gray-300" />
                                        {user.email}
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:text-[#d2a437] transition-colors"><Edit2 size={16} /></button>
                                            <button className="p-2 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
