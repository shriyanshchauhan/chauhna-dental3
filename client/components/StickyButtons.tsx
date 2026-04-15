import { MessageCircle, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyButtons() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // Show sticky bar when user scrolls down
      setIsVisible(window.scrollY > 300);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // WhatsApp button (always visible)
  return (
    <>
      {/* WhatsApp Floating Button - Always visible on right side */}
      <a
        href="https://wa.me/919412005185?text=Hi%20Dr.%20Chauhan!%20I%20would%20like%20to%20book%20a%20free%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-24 md:bottom-6 right-6 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 z-50 hover:scale-110 animate-pulse md:animate-none"
        style={{ backgroundColor: '#0ea5a4' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0d8e8d')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0ea5a4')}
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
      </a>

      {/* Mobile Sticky Bar - Only on small screens */}
      {isMobile && isVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t-2 shadow-2xl z-40" style={{ borderTopColor: '#0ea5a4' }}>
          <div className="flex gap-0 h-16">
            {/* Book Appointment Button */}
            <a
              href="#appointment-section"
              className="flex-1 flex items-center justify-center gap-2 text-white hover:bg-slate-800 transition-colors duration-200 border-r border-slate-700"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-semibold">Book</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919412005185"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-white hover:bg-slate-800 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
