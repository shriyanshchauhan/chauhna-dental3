import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Nigam Rd, Selakui, Haripur, Uttarakhand 248011",
      link: "https://maps.google.com/?q=Nigam+Rd,+Selakui,+Haripur,+Uttarakhand+248011",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9412005185",
      link: "tel:+919412005185",
    },
    {
      icon: Mail,
      title: "Email",
      content: "shriyansh1c0@gmail.com",
      link: "mailto:shriyansh1c0@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Sun: 10:00 AM - 7:00 PM",
      link: null,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visit us or contact us for more information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-teal-500 transition-colors duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-teal-500 mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.title === "Address" ? "_blank" : undefined
                          }
                          rel={
                            info.title === "Address"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-slate-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-700">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96 sm:h-full min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.7844748482093!2d79.1234!3d30.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a013c0d0000001%3A0x0!2sNigam%20Rd%2C%20Selakui%2C%20Haripur%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chauhan's Dental and Cosmo Laser Centre Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
