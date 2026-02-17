import { useState, useEffect } from "react";
import {
    Plus,
    Edit2,
    Trash2,
    Eye,
    EyeOff,
    X,
    Loader2
} from "lucide-react";
import { toast } from "sonner";
import api from "../services/api";

interface Product {
    _id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    isActive: boolean;
    isFeatured: boolean;
    images: { url: string }[];
}

export default function ProductsManagement() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Partial<Product> | null>(null);
    const [formLoading, setFormLoading] = useState(false);

    const fetchProducts = async () => {
        try {
            const response = await api.get("/products?all=true");
            setProducts(response.data);
        } catch (error) {
            toast.error("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        try {
            await api.delete(`/products/${id}`);
            toast.success("Product deleted successfully");
            fetchProducts();
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormLoading(true);
        try {
            if (currentProduct?._id) {
                await api.put(`/products/${currentProduct._id}`, currentProduct);
                toast.success("Product updated");
            } else {
                await api.post("/products", currentProduct);
                toast.success("Product added");
            }
            setIsModalOpen(false);
            fetchProducts();
        } catch (error) {
            toast.error("Operation failed");
        } finally {
            setFormLoading(false);
        }
    };

    const handleToggleActive = async (product: Product) => {
        try {
            await api.put(`/products/${product._id}`, { isActive: !product.isActive });
            toast.success(`Product ${!product.isActive ? 'activated' : 'deactivated'}`);
            fetchProducts();
        } catch (error) {
            toast.error("Update failed");
        }
    };

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-[#1f2918] tracking-tight">Products Inventory</h1>
                    <p className="text-gray-500 font-medium">Manage your global catalog and inventory levels.</p>
                </div>
                <button
                    onClick={() => {
                        setCurrentProduct({
                            name: "",
                            price: 0,
                            category: "Cakes",
                            description: "",
                            isActive: true,
                            images: [{ url: "" }]
                        });
                        setIsModalOpen(true);
                    }}
                    className="bg-[#d2a437] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#d2a437]/20 hover:bg-black transition-all flex items-center gap-3"
                >
                    <Plus size={20} />
                    Add New Product
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-20 flex flex-col items-center justify-center gap-4">
                        <Loader2 className="animate-spin text-[#d2a437]" size={40} />
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Syncing Catalog...</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-50">
                                    <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">Product</th>
                                    <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">Category</th>
                                    <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">Price</th>
                                    <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">Status</th>
                                    <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-sm">
                                {products.map((product) => (
                                    <tr key={product._id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl border border-gray-100 overflow-hidden bg-gray-50">
                                                    <img
                                                        src={product.images[0]?.url || "https://images.unsplash.com/photo-1563805042-7684c019e1cb"}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-black text-[#1f2918]">{product.name}</p>
                                                    <p className="text-[10px] text-gray-400 font-medium uppercase truncate max-w-[200px]">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className="bg-[#f8f9fa] px-3 py-1 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-tighter">
                                                {product.category}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <p className="font-black text-[#d2a437] underline decoration-2 underline-offset-4 decoration-[#d2a437]/20">${product.price}.00</p>
                                        </td>
                                        <td className="p-6">
                                            <button
                                                onClick={() => handleToggleActive(product)}
                                                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${product.isActive
                                                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                                        : "bg-red-50 text-red-600 border border-red-100"
                                                    }`}
                                            >
                                                {product.isActive ? <Eye size={12} /> : <EyeOff size={12} />}
                                                {product.isActive ? "Active" : "Disabled"}
                                            </button>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => {
                                                        setCurrentProduct(product);
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="p-2 rounded-xl text-gray-400 hover:text-[#d2a437] hover:bg-[#d2a437]/5 transition-all"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product._id)}
                                                    className="p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Product Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
                    <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden animate-gpu">
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-[#f8f9fa]">
                            <div>
                                <h2 className="text-2xl font-black text-[#1f2918]">{currentProduct?._id ? "Edit Product" : "Add New Item"}</h2>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Product Configuration Module</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-3 bg-white rounded-2xl text-gray-400 hover:text-black shadow-sm"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto hide-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Product Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={currentProduct?.name || ""}
                                        onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                                        className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-bold transition-all outline-none"
                                        placeholder="E.g. Vintage Leather Watch"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Price (USD)</label>
                                    <input
                                        type="number"
                                        required
                                        value={currentProduct?.price || ""}
                                        onChange={(e) => setCurrentProduct({ ...currentProduct, price: Number(e.target.value) })}
                                        className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-bold transition-all outline-none"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Category</label>
                                <select
                                    value={currentProduct?.category || ""}
                                    onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-bold transition-all outline-none"
                                >
                                    <option value="Cakes">Cakes & Bakes</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Industrial">Industrial</option>
                                    <option value="General">General</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Description</label>
                                <textarea
                                    value={currentProduct?.description || ""}
                                    onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-medium transition-all outline-none min-h-[120px]"
                                    placeholder="Tell us about the product..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Main Image URL</label>
                                <input
                                    type="text"
                                    required
                                    value={currentProduct?.images?.[0]?.url || ""}
                                    onChange={(e) => setCurrentProduct({
                                        ...currentProduct,
                                        images: [{ url: e.target.value }]
                                    })}
                                    className="w-full bg-gray-50 border border-transparent focus:border-[#d2a437]/30 rounded-2xl p-4 text-sm font-medium transition-all outline-none"
                                    placeholder="https://images.unsplash.com/..."
                                />
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={currentProduct?.isActive ?? true}
                                        onChange={(e) => setCurrentProduct({ ...currentProduct, isActive: e.target.checked })}
                                        className="w-5 h-5 rounded-lg border-gray-200 text-[#d2a437] focus:ring-[#d2a437]/30"
                                    />
                                    <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Mark as Active</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={currentProduct?.isFeatured || false}
                                        onChange={(e) => setCurrentProduct({ ...currentProduct, isFeatured: e.target.checked })}
                                        className="w-5 h-5 rounded-lg border-gray-200 text-[#d2a437] focus:ring-[#d2a437]/30"
                                    />
                                    <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Featured Item</span>
                                </label>
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
                                    {formLoading ? <Loader2 size={18} className="animate-spin" /> : currentProduct?._id ? "Update Product" : "Save Product"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
