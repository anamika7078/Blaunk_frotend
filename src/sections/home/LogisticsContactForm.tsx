import { useFormik } from "formik";
import * as Yup from "yup";
import { Send, Loader2, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import api from "../../services/api";

const countries = [
    { name: "India", flag: "🇮🇳", code: "+91" },
    { name: "USA", flag: "🇺🇸", code: "+1" },
    { name: "UK", flag: "🇬🇧", code: "+44" },
    { name: "UAE", flag: "🇦🇪", code: "+971" },
];

const services = ["Cab Booking", "Taxi Booking", "Hourly Driver", "Outstation Trip", "Permanent Driver"];
const requirements = ["Local Trip", "Outstation Trip", "Hourly Hire", "Daily Hire"];
const purposes = ["Personal", "Business", "Event", "Airport Transfer"];
const slots = ["Morning (6am-12pm)", "Afternoon (12pm-5pm)", "Evening (5pm-10pm)", "Night (10pm-6am)"];

const validationSchema = Yup.object({
    country: Yup.string().required("Required"),
    pincode: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    contact: Yup.string().required("Required"),
    services: Yup.string().required("Required"),
    requirement: Yup.string().required("Required"),
    purpose: Yup.string().required("Required"),
    pickupSlot: Yup.string().required("Required"),
});

export default function LogisticsContactForm() {
    const formik = useFormik({
        initialValues: {
            country: "India",
            pincode: "",
            city: "",
            contact: "",
            services: "",
            requirement: "",
            purpose: "",
            pickupSlot: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                await api.post("/contacts/submit", {
                    subject: `Logistics Form: ${values.services} in ${values.city}`,
                    type: "logistics_form",
                    details: values,
                });
                toast.success("Requirement Submitted Successfully");
                resetForm();
            } catch (error) {
                toast.error("Failed to submit. Please try again.");
            }
        },
    });

    return (
        <section className="relative w-full max-w-6xl mx-auto my-12 overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-gray-400/30">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                    alt="Logistics Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 p-8 md:p-12">
                {/* Top Dark Bar Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-black/60 rounded-b-3xl" />

                <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
                    <p className="text-white text-2xl font-black uppercase tracking-tighter opacity-80">add country</p>
                </div>

                <form onSubmit={formik.handleSubmit} className="mt-8">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs font-bold px-1 uppercase tracking-wider">Country</label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                                    <span>🇮🇳</span>
                                </div>
                                <select
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    className="w-full bg-[#fdfaf3] border border-gray-300 rounded-lg pl-10 pr-10 py-3 text-sm font-bold text-gray-700 appearance-none focus:ring-2 focus:ring-[#d2a437] outline-none"
                                >
                                    {countries.map((c) => (
                                        <option key={c.name} value={c.name}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs font-bold px-1 uppercase tracking-wider">Pin Code</label>
                            <input
                                name="pincode"
                                placeholder="Enter pin code"
                                value={formik.values.pincode}
                                onChange={formik.handleChange}
                                className="w-full bg-[#fdfaf3] border border-gray-300 rounded-lg px-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-[#d2a437] outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs font-bold px-1 uppercase tracking-wider">City</label>
                            <input
                                name="city"
                                placeholder="Enter city"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                className="w-full bg-[#fdfaf3] border border-gray-300 rounded-lg px-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-[#d2a437] outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs font-bold px-1 uppercase tracking-wider">Mobile No.</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-500">+91</span>
                                <input
                                    name="contact"
                                    placeholder="9785645447"
                                    value={formik.values.contact}
                                    onChange={formik.handleChange}
                                    className="w-full bg-[#fdfaf3] border border-gray-300 rounded-lg pl-12 pr-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-[#d2a437] outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs font-bold px-1 uppercase tracking-wider">Services</label>
                            <div className="relative">
                                <select
                                    name="services"
                                    value={formik.values.services}
                                    onChange={formik.handleChange}
                                    className="w-full bg-[#fdfaf3] border border-gray-300 rounded-lg px-4 py-3 text-sm font-bold text-gray-700 appearance-none focus:ring-2 focus:ring-[#d2a437] outline-none"
                                >
                                    <option value="">Select a services</option>
                                    {services.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs font-bold px-1 uppercase tracking-wider">Requirement</label>
                            <div className="relative">
                                <select
                                    name="requirement"
                                    value={formik.values.requirement}
                                    onChange={formik.handleChange}
                                    className="w-full bg-[#fdfaf3] border border-gray-300 rounded-lg px-4 py-3 text-sm font-bold text-gray-700 appearance-none focus:ring-2 focus:ring-[#d2a437] outline-none"
                                >
                                    <option value="">Select an option</option>
                                    {requirements.map((r) => (
                                        <option key={r} value={r}>
                                            {r}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs font-bold px-1 uppercase tracking-wider">Purpose</label>
                            <div className="relative">
                                <select
                                    name="purpose"
                                    value={formik.values.purpose}
                                    onChange={formik.handleChange}
                                    className="w-full bg-[#fdfaf3] border border-gray-300 rounded-lg px-4 py-3 text-sm font-bold text-gray-700 appearance-none focus:ring-2 focus:ring-[#d2a437] outline-none"
                                >
                                    <option value="">Select an option</option>
                                    {purposes.map((p) => (
                                        <option key={p} value={p}>
                                            {p}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs font-bold px-1 uppercase tracking-wider">Pick-up slot</label>
                            <div className="relative">
                                <select
                                    name="pickupSlot"
                                    value={formik.values.pickupSlot}
                                    onChange={formik.handleChange}
                                    className="w-full bg-[#fdfaf3] border border-gray-300 rounded-lg px-4 py-3 text-sm font-bold text-gray-700 appearance-none focus:ring-2 focus:ring-[#d2a437] outline-none"
                                >
                                    <option value="">Select a time slot</option>
                                    {slots.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Description White Box */}
                    <div className="mt-12 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <p className="text-[#111] text-xs font-bold leading-relaxed">
                                BLAUNK LOGISTC services offer to book a Cab driver or Taxi Booking. utilize our various service options
                                offered by Vendor Directly without any Commission or Agents. Services offer will help you to find
                                hourly, daily, or permanent driver hire, with options for local and outstation trips Cab Booking.
                                Contact the company's / Vendor service provider customer service number to book and get chat directly
                                on their whatsap.
                            </p>
                            <p className="text-[#111] text-xs font-bold leading-relaxed mt-4">
                                On our platforms few vendor may allow you to specify the type of vehicle you need the driver to
                                operate. Enjoy your weekend !
                            </p>
                        </div>

                        <div className="flex items-end justify-end gap-3 min-w-fit">
                            <button
                                type="button"
                                className="bg-[#5a4d4d] text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-black transition-colors"
                            >
                                View More
                            </button>
                            <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="bg-[#6b7b1e] text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-[#4b5a0a] transition-all flex items-center gap-2 disabled:opacity-50"
                            >
                                {formik.isSubmitting ? <Loader2 size={14} className="animate-spin" /> : "Submit Requirement"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
