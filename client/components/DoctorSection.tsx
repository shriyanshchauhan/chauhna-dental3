import { Award, Heart, Zap } from "lucide-react";

export default function DoctorSection() {
  const qualifications = [
    {
      icon: Award,
      title: "Highly Qualified",
      description: "Advanced training in modern dental techniques",
    },
    {
      icon: Heart,
      title: "Patient Focused",
      description: "Dedicated to painless and comfortable care",
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "State-of-the-art equipment and laser treatments",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1576091160069-2d4294f375a6?w=600&q=80"
              alt="Dr. Ashok Chauhan"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              Dr. Ashok Chauhan
            </h2>
            <p className="text-lg sm:text-xl font-semibold mb-6" style={{ color: '#0ea5a4' }}>
              BDS, Advanced Cosmetic & Laser Specialist
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              With over 30 years of experience, Dr. Ashok Chauhan is a renowned
              dental professional specializing in advanced treatments. His
              commitment to painless procedures and smile transformations has
              made him a trusted name in dental and cosmetic laser care.
            </p>

            {/* Highlights */}
            <div className="space-y-6 mb-8">
              {qualifications.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 mt-1" style={{ color: '#0ea5a4' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Special Focus */}
            <div className="rounded-xl p-6 border-l-4" style={{ backgroundColor: 'rgba(14, 165, 164, 0.08)', borderLeftColor: '#0ea5a4' }}>
              <p className="text-slate-900 font-semibold mb-2">
                Special Focus:
              </p>
              <p className="text-slate-700">
                Advanced laser treatments, painless procedures, and complete
                smile transformations using the latest technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
