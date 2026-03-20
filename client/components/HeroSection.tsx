import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    {
      title: "Advanced Dental & Cosmetic Laser Treatments",
      description: "30+ Years of Trusted Dental Care",
      image:
        "https://images.unsplash.com/photo-1606811841689-23ace3c3a136?w=1200&q=80",
      alt: "Modern dental clinic interior",
    },
    {
      title: "Expert Dental Care with Latest Technology",
      description: "Painless and Advanced Treatments",
      image:
        "https://images.unsplash.com/photo-1609286849393-d3ecaf357cb9?w=1200&q=80",
      alt: "Dentist treating patient",
    },
    {
      title: "Your Beautiful Smile Transformation",
      description: "Professional Cosmetic & Laser Solutions",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
      alt: "Smile transformation",
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
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(20, 184, 166, 0.4)), url(${slide.image})`,
              }}
            />

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 drop-shadow-md">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <Button
                    onClick={scrollToAppointment}
                    className="bg-teal-500 hover:bg-teal-600 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </Button>
                  <a
                    href="tel:+919412005185"
                    className="bg-white hover:bg-gray-100 text-teal-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation Styling */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: rgba(20, 184, 166, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: background-color 0.3s;
        }

        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 50px;
            height: 50px;
          }
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(20, 184, 166, 1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }

        @media (min-width: 640px) {
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px;
          }
        }

        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .swiper-pagination-bullet-active {
          background-color: rgb(20, 184, 166);
        }
      `}</style>
    </section>
  );
}
