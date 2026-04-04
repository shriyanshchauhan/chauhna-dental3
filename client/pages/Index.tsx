import HeroSection from "@/components/HeroSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DoctorSection from "@/components/DoctorSection";
import AppointmentForm from "@/components/AppointmentForm";
import ContactSection from "@/components/ContactSection";
import StickyButtons from "@/components/StickyButtons";
import DentalLogo from "@/components/DentalLogo";

export default function Index() {
  return (
    <div className="w-full">
      {/* Navigation Header */}
      <header className="sticky top-0 z-30 bg-white shadow-md border-b-2 border-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Clinic Name */}
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <DentalLogo />
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:flex gap-8">
              <a
                href="/"
                className="text-slate-700 hover:text-red-600 font-poppins font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-red-600 font-poppins font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#transformations"
                className="text-slate-700 hover:text-red-600 font-poppins font-medium transition-colors"
              >
                Results
              </a>
              <a
                href="#gallery"
                className="text-slate-700 hover:text-red-600 font-poppins font-medium transition-colors"
              >
                Gallery
              </a>
              <a
                href="#doctor"
                className="text-slate-700 hover:text-red-600 font-poppins font-medium transition-colors"
              >
                Doctor
              </a>
            </nav>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/919412005185?text=Hi%20Dr.%20Chauhan!%20I%20would%20like%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-poppins font-semibold transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* Before & After Section */}
        <div id="transformations">
          <BeforeAfterSection />
        </div>

        {/* Gallery Section */}
        <div id="gallery">
          <GallerySection />
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Google Reviews Section */}
        <GoogleReviewsSection />

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
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <DentalLogo />
              </div>
              <p className="text-gray-400 font-poppins">
                30+ years of trusted dental and cosmetic laser care with modern
                facilities and expert care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-teal-400 transition-colors font-poppins">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-teal-400 transition-colors font-poppins">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#transformations" className="hover:text-teal-400 transition-colors font-poppins">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-teal-400 transition-colors font-poppins">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#doctor" className="hover:text-teal-400 transition-colors font-poppins">
                    About Doctor
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="tel:+919412005185"
                    className="hover:text-teal-400 transition-colors font-poppins"
                  >
                    +91 9412005185
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:shriyansh1c0@gmail.com"
                    className="hover:text-teal-400 transition-colors font-poppins"
                  >
                    shriyansh1c0@gmail.com
                  </a>
                </li>
                <li className="text-sm font-poppins">
                  Nigam Rd, Selakui, Haripur, Uttarakhand 248011
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p className="font-poppins">&copy; 2024 Chauhan's Dental & Cosmo Laser Centre. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-400 transition-colors font-poppins">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors font-poppins">
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
