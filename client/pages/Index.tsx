import HeroSection from "@/components/HeroSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorSection from "@/components/DoctorSection";
import AppointmentForm from "@/components/AppointmentForm";
import ContactSection from "@/components/ContactSection";
import StickyButtons from "@/components/StickyButtons";

export default function Index() {
  return (
    <div className="w-full">
      {/* Navigation Header */}
      <header className="sticky top-0 z-30 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Clinic Name */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CD</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                  Chauhan's Dental
                </h1>
                <p className="text-xs text-teal-600">Cosmetic & Laser</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex gap-8">
              <a
                href="/"
                className="text-slate-700 hover:text-teal-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-teal-600 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#doctor"
                className="text-slate-700 hover:text-teal-600 font-medium transition-colors"
              >
                Doctor
              </a>
              <a
                href="#appointment-section"
                className="text-slate-700 hover:text-teal-600 font-medium transition-colors"
              >
                Appointment
              </a>
            </nav>

            {/* Call Button */}
            <a
              href="tel:+919412005185"
              className="hidden sm:inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Call
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Google Reviews Section */}
        <GoogleReviewsSection />

        {/* Services Section */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* Doctor Section */}
        <div id="doctor">
          <DoctorSection />
        </div>

        {/* Appointment Form */}
        <AppointmentForm />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Chauhan's Dental & Cosmo Laser
              </h3>
              <p className="text-gray-400">
                30+ years of trusted dental and cosmetic laser care with modern
                facilities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-teal-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-teal-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#doctor" className="hover:text-teal-400 transition-colors">
                    About Doctor
                  </a>
                </li>
                <li>
                  <a
                    href="#appointment-section"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="tel:+919412005185"
                    className="hover:text-teal-400 transition-colors"
                  >
                    +91 9412005185
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:shriyansh1c0@gmail.com"
                    className="hover:text-teal-400 transition-colors"
                  >
                    shriyansh1c0@gmail.com
                  </a>
                </li>
                <li className="text-sm">
                  Nigam Rd, Selakui, Haripur, Uttarakhand 248011
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Chauhan's Dental & Cosmo Laser Centre. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Buttons */}
      <StickyButtons />
    </div>
  );
}
