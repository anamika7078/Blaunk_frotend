import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Phone, MapPin, Truck, Clock, FileText, Send, User, Loader2 } from "lucide-react";
import { toast } from "sonner";
import api from "../../services/api";

const validationSchema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  country: Yup.string().required("Country required"),
  pincode: Yup.string().required("Pincode required"),
  city: Yup.string().required("City required"),
  services: Yup.string().required("Services required"),
  contact: Yup.string().required("Contact number required"),
});

export default function LogisticsExcellenceSection() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      pincode: "",
      city: "",
      services: "",
      contact: "",
      requirement: "",
      purpose: "",
      pickupSlot: "",
      additional: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await api.post("/contacts/submit", {
          name: values.name,
          email: values.email,
          subject: `Logistics Enquiry: ${values.services} in ${values.city}`,
          type: "logistics",
          details: values
        });
        toast.success("Logistics Request Submitted", {
          description: "Our experts will contact you shortly with a quote."
        });
        resetForm();
      } catch (error) {
        toast.error("Submission failed. Please try again.");
      }
    },
  });

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden my-10 animate-in fade-in duration-700 section-optimize">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left Column: Form Section */}
        <div className="p-8 md:p-12 bg-white">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 bg-[#6b7b1e] rounded-full" />
              <p className="text-sm text-[#6b7b1e] font-bold uppercase tracking-wider">
                Logistics Excellence
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] leading-tight mb-4">
              Connect with our experts
            </h2>
            <p className="text-gray-500 max-w-md">
              Fill out the form below to get a customized logistics solution tailored to your global trade needs.
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { name: "name", placeholder: "Your Name", icon: User },
              { name: "email", placeholder: "Email Address", icon: Mail },
              { name: "country", placeholder: "Country", icon: MapPin },
              { name: "pincode", placeholder: "Pincode", icon: MapPin },
              { name: "city", placeholder: "City", icon: MapPin },
              { name: "services", placeholder: "Services", icon: Truck },
              { name: "contact", placeholder: "Contact Number", icon: Phone },
              { name: "purpose", placeholder: "Purpose", icon: FileText },
              { name: "pickupSlot", placeholder: "Pickup Slot", icon: Clock },
              { name: "requirement", placeholder: "Requirement", icon: FileText },
            ].map(({ name, placeholder, icon: Icon }) => (
              <div key={name} className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Icon size={18} />
                </div>
                <input
                  name={name}
                  placeholder={placeholder}
                  value={(formik.values as any)[name]}
                  onChange={formik.handleChange}
                  className="w-full border-b border-gray-200 bg-gray-50/50 rounded-lg pl-10 pr-4 py-3.5 text-sm outline-none transition-all focus:border-[#6b7b1e] focus:bg-white focus:shadow-sm"
                />
                {formik.touched[name as keyof typeof formik.values] &&
                  formik.errors[name as keyof typeof formik.errors] && (
                    <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4 left-1">
                      {(formik.errors as any)[name]}
                    </p>
                  )}
              </div>
            ))}

            <div className="md:col-span-2 mt-4 relative">
              <div className="absolute left-3 top-4 text-gray-400">
                <Mail size={18} />
              </div>
              <textarea
                name="additional"
                placeholder="Additional Requirements"
                rows={3}
                value={formik.values.additional}
                onChange={formik.handleChange}
                className="w-full border-b border-gray-200 bg-gray-50/50 rounded-lg pl-10 pr-4 py-3 text-sm outline-none transition-all focus:border-[#6b7b1e] focus:bg-white focus:shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="md:col-span-2 bg-[#d2a437] text-[#1f2918] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-[#1f2918] hover:text-white group shadow-md hover:shadow-xl mt-4 disabled:opacity-50"
            >
              {formik.isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  <span>Submit Your Request</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Image/Banner Section */}
        <div className="relative hidden lg:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
            alt="Logistics Support"
            loading="lazy"
            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-1000 animate-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-[#4b5a0a]/20 z-0" />

          <div className="absolute bottom-12 left-12 right-12 z-20 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#d2a437] rounded-full flex items-center justify-center text-black">
                <Truck size={24} />
              </div>
              <h4 className="text-xl font-bold text-white">Why Choose Blaunk?</h4>
            </div>
            <ul className="space-y-3">
              {[
                "Global Network Access",
                "Real-time Shipment Tracking",
                "Industry-leading Compliance",
                "24/7 Dedicated Support"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d2a437]" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
