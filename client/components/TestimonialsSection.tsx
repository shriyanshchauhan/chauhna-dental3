import { Star, Quote } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  text: string;
  image: string;
  treatment: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Patel",
      city: "Haripur",
      rating: 5,
      treatment: "Dental Implants",
      text: "Dr. Chauhan is amazing! I was nervous about the implant procedure, but the entire team made me feel comfortable. The painless treatment was a game-changer. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Priya Sharma",
      city: "Dehradun",
      rating: 5,
      treatment: "Teeth Whitening",
      text: "Got my teeth whitened and the results are incredible. My confidence has boosted so much. The clinic is very clean and professional. Best decision ever!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Vikram Singh",
      city: "Selakui",
      rating: 5,
      treatment: "Root Canal Treatment",
      text: "Had severe tooth pain and was dreading the procedure. Dr. Chauhan's expertise made it completely painless. The follow-up care was also excellent. Thank you!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Anjali Gupta",
      city: "Haripur",
      rating: 5,
      treatment: "Smile Design",
      text: "Dr. Chauhan transformed my smile completely! The treatment was quick and painless. Now I smile confidently in all my photos. Truly professional!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Arjun Desai",
      city: "Nainital",
      rating: 5,
      treatment: "Laser Hair Removal",
      text: "Got the laser treatment done and it's been smooth sailing. No pain, great results, and the staff is very friendly. Perfect clinic experience!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 6,
      name: "Sneha Kapoor",
      city: "Almora",
      rating: 5,
      treatment: "Skin Rejuvenation",
      text: "The laser skin treatment has given me amazing results. My skin looks fresh and glowing. Dr. Chauhan and his team are extremely professional and caring.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 7,
      name: "Dikshat Sharma",
      city: "Haripur",
      rating: 5,
      treatment: "Orthodontic Treatment",
      text: "I had an excellent experience with my orthodontic treatment at Chauhan's Dental and Cosmo Laser Centre. Dr. Christy was extremely professional, kind, and attentive throughout the process. She explained every step clearly and made sure I was comfortable at all times. My tooth alignment has improved beautifully, and I'm very happy with the results. The clinic staff were also friendly and helpful, making each visit smooth and pleasant.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 8,
      name: "Viaml Bhatt",
      city: "Dehradun",
      rating: 5,
      treatment: "Complete Dental Care",
      text: "I've visited many clinics, but none match the quality and comfort of Chauhan's Dental & Cosmo Laser Centre. The doctors are compassionate, the procedures are painless, and the results are excellent. Without a doubt, the best dental clinic in Dehradun.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      id: 9,
      name: "Mahavir Bisht",
      city: "Dehradun",
      rating: 5,
      treatment: "Dental Laminates",
      text: "I was nervous about getting laminates, but the results at Chauhan's Dental & Cosmo Laser Centre blew me away. My smile looks perfect now. The clinic lives up to its reputation as the best dental clinic in Dehradun.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-slate-900 mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-poppins">
            Real stories from our satisfied patients across Uttarakhand
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-200 animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-teal-200 mb-4" />

                {/* Stars */}
                <div className="mb-4">{renderStars(testimonial.rating)}</div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed font-poppins text-sm sm:text-base">
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-6">
                  {/* Profile Section */}
                  <div>
                    <h4 className="font-poppins font-bold text-slate-900 text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-poppins">
                      {testimonial.city}
                    </p>
                  </div>

                  {/* Treatment Badge */}
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-poppins font-semibold" style={{ backgroundColor: 'rgba(14, 165, 164, 0.1)', color: '#0ea5a4' }}>
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-10 sm:mt-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full transition-colors duration-300"
              style={{ backgroundColor: 'rgba(14, 165, 164, 0.15)', color: '#0ea5a4' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(14, 165, 164, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(14, 165, 164, 0.15)')}
            >
              <span className="text-xl">←</span>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: idx === currentIndex ? '#0ea5a4' : '#d1d5db',
                    width: idx === currentIndex ? '2rem' : '0.625rem'
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full transition-colors duration-300"
              style={{ backgroundColor: 'rgba(14, 165, 164, 0.15)', color: '#0ea5a4' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(14, 165, 164, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(14, 165, 164, 0.15)')}
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 sm:mt-20 rounded-2xl p-8 sm:p-12 border-2" style={{ backgroundColor: 'rgba(14, 165, 164, 0.08)', borderColor: 'rgba(14, 165, 164, 0.3)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-poppins font-bold mb-2" style={{ color: '#0ea5a4' }}>
                4.9★
              </div>
              <p className="text-slate-700 font-poppins font-semibold">
                Average Rating
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-poppins font-bold mb-2" style={{ color: '#0ea5a4' }}>
                2000+
              </div>
              <p className="text-slate-700 font-poppins font-semibold">
                Happy Patients
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-poppins font-bold mb-2" style={{ color: '#0ea5a4' }}>
                98%
              </div>
              <p className="text-slate-700 font-poppins font-semibold">
                Would Recommend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
