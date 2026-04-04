import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Transformation {
  before: string;
  after: string;
  title: string;
  treatment: string;
}

export default function BeforeAfterSection() {
  const transformations: Transformation[] = [
    {
      before:
        "https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2F0738500b13194f80be75ea281e939805?format=webp&width=800&height=1200",
      after:
        "https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2F0e760fa2b1864ff58b5f28cd0c524b36?format=webp&width=800&height=1200",
      title: "Complete Smile Restoration",
      treatment: "Dental Implants & Smile Design",
    },
    {
      before:
        "https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2F919f02c22b9d4d1db33efc6cb3525bf5?format=webp&width=800&height=1200",
      after:
        "https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2F0e760fa2b1864ff58b5f28cd0c524b36?format=webp&width=800&height=1200",
      title: "Teeth Whitening Excellence",
      treatment: "Professional Teeth Whitening",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const current = transformations[currentIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, percentage)));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPos(50);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? transformations.length - 1 : prev - 1
    );
    setSliderPos(50);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-slate-900 mb-4">
            Transformation Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-poppins">
            See the incredible results our patients achieve with our advanced treatments
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Slider Container */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl cursor-move"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image */}
            <img
              src={current.after}
              alt={`${current.title} - After`}
              className="w-full h-auto object-cover aspect-square sm:aspect-auto"
            />

            {/* Before Image - Overlaid */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={current.before}
                alt={`${current.title} - Before`}
                className="w-full h-full object-cover"
                style={{ width: `calc(100% / ${sliderPos / 100})` }}
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-red-600 transition-all duration-150"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center">
                <div className="flex gap-1">
                  <ChevronLeft className="w-5 h-5 text-red-600" />
                  <ChevronRight className="w-5 h-5 text-red-600" />
                </div>
              </div>
            </div>

            {/* Before/After Labels */}
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg font-semibold text-sm">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-lg font-semibold text-sm">
              After
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="animate-slideUp">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-slate-900 mb-2">
                {current.title}
              </h3>
              <p className="text-lg text-red-600 font-poppins font-semibold mb-4">
                {current.treatment}
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                This patient underwent a complete smile transformation using our
                advanced dental techniques. The results speak for themselves - a
                brighter, more confident smile achieved through professional care
                and expertise.
              </p>
            </div>

            {/* Treatment Benefits */}
            <div className="space-y-3">
              <h4 className="font-poppins font-semibold text-slate-900 text-lg">
                Key Benefits:
              </h4>
              <ul className="space-y-2">
                {[
                  "Natural-looking results",
                  "Painless procedure",
                  "Long-lasting results",
                  "Boosted confidence",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full" />
                    <span className="text-gray-700 font-poppins">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-900 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-900 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2 ml-auto items-center">
                {transformations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setSliderPos(50);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "bg-red-600 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Smile Transformations" },
            { number: "98%", label: "Patient Satisfaction" },
            { number: "25+", label: "Awards & Recognition" },
            { number: "30+", label: "Years Experience" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <p className="text-3xl sm:text-4xl font-poppins font-bold text-red-600 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-700 font-poppins text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
