import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Calendar, MessageCircle } from "lucide-react";

export default function HeroSection() {

  const slides = [
    {
      title: "Your Beautiful Smile Transformation",
      description: "Professional Cosmetic & Laser Solutions",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2F4b0f8e1e2c9d4e14a22eb6d17901856e?format=webp&width=1200&height=900",
      alt: "Modern dental treatment room with advanced equipment",
    },
    {
      title: "Advanced Dental & Cosmetic Laser Treatments",
      description: "30+ Years of Trusted Dental Care",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2F9ce15cc15d4a424981761c82a6bd32f9?format=webp&width=800&height=1200",
      alt: "Chauhan's Dental & Cosmo Laser Centre exterior",
    },
    {
      title: "Expert Dental Care with Latest Technology",
      description: "Painless and Advanced Treatments",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2F1f15749867f54686a0e5d47eefa48330?format=webp&width=800&height=1200",
      alt: "Modern dental treatment reception area",
    },
  ];

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image with Premium Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />

            {/* Premium Dark Overlay - Soft and elegant */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

            {/* Soft blur and lighting effect */}
            <div className="absolute inset-0 backdrop-blur-[1px]" />

            {/* Content Overlay - Centered with luxury spacing */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                {/* Main Heading - Bold and Premium */}
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-white drop-shadow-2xl leading-tight">
                    {slide.title}
                  </h1>

                  {/* Accent Line */}
                  <div className="flex justify-center">
                    <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#0ea5a4' }}></div>
                  </div>
                </div>

                {/* Subtitle - Elegant and refined */}
                <p className="text-lg sm:text-xl lg:text-2xl text-white/95 drop-shadow-lg font-light tracking-wide">
                  {slide.description}
                </p>

                {/* Trust Indicators - Subtle and professional */}
                <div className="flex justify-center gap-6 sm:gap-8 text-white/80 text-sm sm:text-base pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span>500+ Patients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span>30+ Years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span>100% Satisfied</span>
                  </div>
                </div>

                {/* CTA Buttons - Modern and sophisticated */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
                  <a
                    href="https://wa.me/919412005185?text=Hi%20Dr.%20Chauhan!%20I%20would%20like%20to%20book%20a%20free%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-poppins font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    style={{ backgroundColor: '#0ea5a4' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0d8e8d';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0ea5a4';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                  </a>
                  <a
                    href="#appointment-section"
                    className="text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-poppins font-semibold transition-all duration-300 flex items-center justify-center gap-3 border-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{
                      color: '#0ea5a4',
                      borderColor: '#0ea5a4',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Chat Icon - Bottom Right */}
            <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 z-20">
              <a
                href="https://wa.me/919412005185?text=Hi%20Dr.%20Chauhan!%20I%20would%20like%20to%20chat."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: '#0ea5a4',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0d8e8d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0ea5a4';
                }}
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Premium Swiper Navigation Styling */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: rgba(14, 165, 164, 0.6);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(14, 165, 164, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 55px;
            height: 55px;
          }
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(14, 165, 164, 0.9);
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(14, 165, 164, 0.5);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        @media (min-width: 640px) {
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px;
          }
        }

        .swiper-pagination {
          bottom: 30px;
        }

        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }

        .swiper-pagination-bullet-active {
          background-color: #0ea5a4;
          width: 30px;
          border-radius: 5px;
        }

        /* Smooth slide animations */
        .swiper-slide {
          animation: slideInFade 0.8s ease-out;
        }

        @keyframes slideInFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Glassmorphism effect for nav buttons */
        .swiper-button-next,
        .swiper-button-prev {
          background: linear-gradient(135deg, rgba(14, 165, 164, 0.3), rgba(14, 165, 164, 0.5));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </section>
  );
}
