import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  caption: string;
  category: string;
}

export default function GallerySection() {
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      title: "Clinic Reception",
      caption: "Modern and welcoming reception area",
      category: "Clinic",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1606811841689-23ace3c3a136?w=600&h=400&fit=crop",
      title: "Treatment Room",
      caption: "State-of-the-art treatment facilities",
      category: "Clinic",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1576091160677-112d6ce86fa0?w=600&h=400&fit=crop",
      title: "Dental Equipment",
      caption: "Advanced laser technology",
      category: "Equipment",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1609286849393-d3ecaf357cb9?w=600&h=400&fit=crop",
      title: "Consultation Room",
      caption: "Private patient consultation area",
      category: "Clinic",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1631217314831-c02b2e9de0bb?w=600&h=400&fit=crop",
      title: "Sterilization Unit",
      caption: "Highest hygiene standards",
      category: "Equipment",
    },
    {
      id: 6,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2F4f5656686a594178b8ac6eec0a69eb7d?format=webp&width=800",
      title: "Clinic Interior",
      caption: "Professional and comfortable environment",
      category: "Clinic",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];
  const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.indexOf(image));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
    setSelectedImage(filteredImages[(currentImageIndex + 1) % filteredImages.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
    setSelectedImage(
      filteredImages[currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1]
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-slate-900 mb-4">
            Our Facility & Equipment
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-poppins">
            Tour our modern clinic with cutting-edge dental technology
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setCurrentImageIndex(0);
              }}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-full font-poppins font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-teal-500 text-white shadow-lg"
                  : "bg-gray-100 text-slate-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-zoomIn"
              style={{ animationDelay: `${idx * 50}ms` }}
              onClick={() => openLightbox(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-poppins font-bold text-xl mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">{image.caption}</p>
                <div className="flex items-center gap-2 text-teal-300">
                  <Eye className="w-5 h-5" />
                  <span className="font-poppins font-semibold">View Details</span>
                </div>
              </div>

              {/* Icon on Hover */}
              <div className="absolute top-4 right-4 bg-teal-500 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image */}
            <div className="relative overflow-hidden bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="bg-slate-900 text-white p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg mb-4 font-poppins">
                {selectedImage.caption}
              </p>
              <span className="inline-block px-4 py-2 bg-teal-500 rounded-full text-sm font-poppins font-semibold">
                {selectedImage.category}
              </span>
            </div>

            {/* Navigation */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="pointer-events-auto bg-teal-500 hover:bg-teal-600 text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="pointer-events-auto bg-teal-500 hover:bg-teal-600 text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black bg-opacity-60 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-poppins font-semibold">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
