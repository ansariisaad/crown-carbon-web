// "use client";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { Button } from "../ui/button";

// export function ContactSection() {
//   return (
//     <section id="contact" className="py-20 bg-slate-100">
//       <div className="container max-w-5xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-12">
//           <div className="md:w-1/2">
//             <h2 className="text-3xl text-center sm:text-left font-bold mb-6 text-slate-900">
//               Contact Us
//             </h2>
//             <p className="text-slate-700 mb-8 text-center md:text-left mx-5 md:mx-0">
//               Reach out to discuss your specific carbon brush requirements. Our
//               team is ready to assist you with customized solutions.
//             </p>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4 mx-10 md:mx-0">
//                 <MapPin className="h-6 w-6 text-blue-600 mt-0.5" />
//                 <div>
//                   <h3 className="font-bold text-slate-900">Address</h3>
//                   <p className="text-slate-600">
//                     Malad West
//                     <br />
//                     Mumbai, 400095, India
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 mx-10 md:mx-0 ">
//                 <Phone className="h-6 w-6 text-blue-600 mt-0.5" />
//                 <div>
//                   <h3 className="font-bold text-slate-900">Phone</h3>
//                   <p className="text-slate-600">+91 7400202234</p>
//                   <p className="text-slate-600">+91 9224245981</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4  mx-10 md:mx-0">
//                 <Mail className="h-6 w-6 text-blue-600 mt-0.5" />
//                 <div>
//                   <h3 className="font-bold text-slate-900">Email</h3>
//                   <p className="text-slate-600">crowncarbonbrush.com</p>
//                   {/* <p className="text-slate-600">sales@crowncarbon.com</p> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-sm">
//             <h3 className="text-2xl font-bold mb-6 text-slate-900">
//               Send an Inquiry
//             </h3>
//             <form className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium mb-1 text-slate-700"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-3 py-2 border border-slate-300 rounded-md"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="company"
//                     className="block text-sm font-medium mb-1 text-slate-700"
//                   >
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     className="w-full px-3 py-2 border border-slate-300 rounded-md"
//                     placeholder="Your company"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-1 text-slate-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-3 py-2 border border-slate-300 rounded-md"
//                   placeholder="Your email"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium mb-1 text-slate-700"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   className="w-full px-3 py-2 border border-slate-300 rounded-md"
//                   placeholder="Your phone number"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-1 text-slate-700"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-md"
//                   placeholder="Your requirements"
//                 ></textarea>
//               </div>
//               <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { useState, ChangeEvent, MouseEvent } from "react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

interface SubmitStatus {
  type: "success" | "error";
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // 
    <section id="contact" className="py-20 bg-slate-100">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl text-center sm:text-left font-bold mb-6 text-slate-900">
              Contact Us
            </h2>
            <p className="text-slate-700 mb-8 text-center md:text-left mx-5 md:mx-0">
              Reach out to discuss your specific carbon brush requirements. Our
              team is ready to assist you with customized solutions.
            </p> 
            <div className="space-y-6">
              <div className="flex items-start gap-4 mx-10 md:mx-0">
                <MapPin className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Address</h3>
                  <p className="text-slate-600">
                    Malad West
                    <br />
                    Mumbai, 400095, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mx-10 md:mx-0 ">
                <Phone className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+91 7400202234</p>
                  <p className="text-slate-600">+91 9224245981</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mx-10 md:mx-0">
                <Mail className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">crowncarbonbrush.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Send an Inquiry
            </h3>

            {submitStatus && (
              <div
                className={`mb-4 p-4 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-slate-700"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1 text-slate-700"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-slate-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1 text-slate-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 text-slate-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your requirements"
                ></textarea>
              </div>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
