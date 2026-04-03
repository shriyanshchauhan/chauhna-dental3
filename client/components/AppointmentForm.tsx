import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail, User, AlertCircle, CheckCircle, MessageCircle } from "lucide-react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    treatment: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const treatments = [
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Braces & Aligners",
    "Tooth Extraction",
    "Smile Designing",
    "Laser Hair Removal",
    "Skin Rejuvenation",
    "Acne Treatment",
    "Pigmentation Treatment",
    "Anti-aging",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validate required fields
    if (!formData.name || !formData.phone) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      // Create form data for FormSubmit
      const form = new FormData();
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("date", formData.date);
      form.append("time", formData.time);
      form.append("treatment", formData.treatment);
      form.append("message", formData.message);

      // Submit to FormSubmit endpoint
      const response = await fetch(
        "https://formsubmit.co/ajax/shriyansh1c0@gmail.com",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          treatment: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError("Failed to submit appointment. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="appointment-section"
      className="py-16 sm:py-20 lg:py-24 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-slate-900 mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-poppins mb-8">
            Schedule your consultation with Dr. Ashok Chauhan today
          </p>

          {/* Primary WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919412005185?text=Hi%20Dr.%20Chauhan!%20I%20would%20like%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-poppins font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp Now
            </a>
            <p className="text-gray-600 font-poppins text-sm sm:text-base flex items-center justify-center">
              or fill the form below
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
          {submitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-6 flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">
                  Success!
                </h3>
                <p className="text-green-800">
                  Your appointment request has been received. We will contact
                  you shortly via phone or WhatsApp.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-6 flex gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Error</h3>
                <p className="text-red-800">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-poppins font-semibold text-slate-900 mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-semibold text-slate-900 mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Email Row */}
            <div>
              <label className="block text-sm font-poppins font-semibold text-slate-900 mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Email (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-poppins font-semibold text-slate-900 mb-2">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-semibold text-slate-900 mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Treatment Type */}
            <div>
              <label className="block text-sm font-poppins font-semibold text-slate-900 mb-2">
                Treatment Type
              </label>
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select a treatment...</option>
                {treatments.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-poppins font-semibold text-slate-900 mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>

            {/* Trust Note */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <p className="text-sm text-teal-900 font-poppins">
                <span className="font-semibold">✓ We will confirm</span> your
                appointment via call or WhatsApp
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-poppins font-bold py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {loading ? "Submitting..." : "Send Appointment Request"}
            </Button>

            {/* Alternative Contact */}
            <div className="border-t border-gray-200 pt-6 text-center">
              <p className="text-slate-700 mb-4 font-poppins">Prefer to call directly?</p>
              <a
                href="tel:+919412005185"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-poppins font-bold text-lg"
              >
                <Phone className="w-5 h-5" />
                +91 9412005185
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
