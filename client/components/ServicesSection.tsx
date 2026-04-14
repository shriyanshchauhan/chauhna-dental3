import { Smile, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const dentalServices = [
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Braces & Aligners",
    "Tooth Extraction",
    "Smile Designing",
  ];

  const cosmeticServices = [
    "Laser Hair Removal",
    "Skin Rejuvenation",
    "Acne Treatment",
    "Pigmentation Treatment",
    "Anti-aging",
  ];

  const ServiceCard = ({
    title,
    services,
    icon: Icon,
  }: {
    title: string;
    services: string[];
    icon: React.ComponentType<{ className: string }>;
  }) => (
    <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-8 h-8" style={{ color: '#0ea5a4' }} />
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {title}
        </h3>
      </div>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-slate-700 text-base sm:text-lg"
          >
            <span className="inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0ea5a4' }} />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive dental and cosmetic laser treatments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <ServiceCard
            title="Dental Services"
            services={dentalServices}
            icon={Smile}
          />
          <ServiceCard
            title="Cosmetic & Laser"
            services={cosmeticServices}
            icon={Sparkles}
          />
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-8 sm:p-10 border-2" style={{ borderColor: '#0ea5a4' }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-4xl font-bold mb-2" style={{ color: '#0ea5a4' }}>30+</p>
              <p className="text-slate-700 font-semibold">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2" style={{ color: '#0ea5a4' }}>5000+</p>
              <p className="text-slate-700 font-semibold">Happy Patients</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2" style={{ color: '#0ea5a4' }}>100%</p>
              <p className="text-slate-700 font-semibold">
                Painless Treatment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
