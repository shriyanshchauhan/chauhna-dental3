import { useEffect, useState } from "react";
import { Star, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GoogleReview, GoogleReviewsResponse } from "@shared/api";

export default function GoogleReviewsSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [selectedReview, setSelectedReview] = useState<GoogleReview | null>(null);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    // Auto-rotate carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (filteredReviews.length || 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredReviews.length]);

  useEffect(() => {
    applyFilter(filter);
  }, [reviews]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/google-reviews");
      const data = (await response.json()) as GoogleReviewsResponse;

      if (data.error) {
        setError(data.error);
      } else {
        const allReviews = (data.reviews || []).filter((r) => r.rating >= 4);
        setReviews(allReviews);

        if (allReviews.length > 0) {
          const avg =
            allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
          setAverageRating(Math.round(avg * 10) / 10);
        }

        applyFilter("all", allReviews);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  const applyFilter = (newFilter: string, reviewsData = reviews) => {
    setFilter(newFilter);
    setCurrentIndex(0);

    if (newFilter === "all") {
      setFilteredReviews(reviewsData);
    } else if (newFilter === "5") {
      setFilteredReviews(reviewsData.filter((r) => r.rating === 5));
    } else if (newFilter === "4") {
      setFilteredReviews(reviewsData.filter((r) => r.rating === 4));
    }
  };

  const renderStars = (rating: number, animated = false) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 transition-all duration-500 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
            style={
              animated
                ? { transitionDelay: `${i * 100}ms` }
                : {}
            }
          />
        ))}
      </div>
    );
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (filteredReviews.length || 1));
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? (filteredReviews.length || 1) - 1 : prev - 1
    );
  };

  const googleReviewUrl =
    "https://www.google.com/search?q=Chauhan%27s+Dental+and+Cosmo+Laser+Centre&hl=en&ctzn=Asia/Kolkata#lrd=0x39a013c0d0000001:0x0,3";

  if (loading) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Patient Reviews
            </h2>
            <p className="text-lg text-slate-600">Loading reviews...</p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-full h-12 w-12 border-4 border-gray-200"
              style={{
                borderTopColor: "#0ea5a4",
                animation: "spin 1s linear infinite",
              }}
            ></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by 500+ Happy Patients
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Real reviews from Google Business Profile
          </p>

          {/* Aggregate Rating */}
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "#0ea5a4" }}>
                  {averageRating}
                </div>
                <div className="flex gap-1 justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <p className="text-sm text-slate-600">
                  Based on {reviews.length} reviews
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Filter Buttons */}
        {reviews.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center mb-10 sm:mb-12">
            {[
              { label: "All Reviews", value: "all" },
              { label: "5 Stars", value: "5" },
              { label: "4 Stars", value: "4" },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => applyFilter(btn.value)}
                className="px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300"
                style={
                  filter === btn.value
                    ? {
                        backgroundColor: "#0ea5a4",
                        color: "white",
                        boxShadow: "0 4px 12px rgba(14, 165, 164, 0.3)",
                      }
                    : {
                        backgroundColor: "#f3f4f6",
                        color: "#374151",
                      }
                }
                onMouseEnter={(e) => {
                  if (filter !== btn.value) {
                    e.currentTarget.style.backgroundColor = "#e5e7eb";
                  }
                }}
                onMouseLeave={(e) => {
                  if (filter !== btn.value) {
                    e.currentTarget.style.backgroundColor = "#f3f4f6";
                  }
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {/* Carousel */}
        {filteredReviews.length > 0 ? (
          <div className="mb-12">
            {/* Review Card Carousel */}
            <div className="relative mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Main Review Card */}
                <div
                  className="rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 animate-fadeIn transition-all duration-500"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      {/* Rating */}
                      <div className="mb-4">
                        {renderStars(
                          filteredReviews[currentIndex].rating,
                          true
                        )}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed line-clamp-5">
                        "{filteredReviews[currentIndex].text}"
                      </p>

                      {/* Author */}
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-semibold text-slate-900 text-base">
                          {filteredReviews[currentIndex].author_name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {filteredReviews[currentIndex].relative_time_description}
                        </p>
                      </div>

                      {/* Read More Button */}
                      <button
                        onClick={() =>
                          setSelectedReview(filteredReviews[currentIndex])
                        }
                        className="mt-6 text-sm font-semibold transition-colors duration-300"
                        style={{ color: "#0ea5a4" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#0d8e8d")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#0ea5a4")
                        }
                      >
                        Read Full Review →
                      </button>
                    </div>

                    {/* Google Badge */}
                    <div
                      className="bg-white rounded-lg p-3 flex items-center gap-2 border border-gray-200 flex-shrink-0"
                      title="Verified Google Review"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        className="fill-gray-400"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-600">
                        Google
                      </span>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Carousel */}
                <div className="hidden lg:flex flex-col gap-3">
                  {filteredReviews.slice(0, 3).map((review, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className="text-left p-4 rounded-lg border-2 transition-all duration-300"
                      style={{
                        backgroundColor:
                          currentIndex === idx ? "rgba(14, 165, 164, 0.1)" : "#f9fafb",
                        borderColor:
                          currentIndex === idx ? "#0ea5a4" : "#e5e7eb",
                      }}
                    >
                      <div className="flex gap-2 mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {review.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-2 font-semibold">
                        {review.author_name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="p-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(14, 165, 164, 0.1)",
                    color: "#0ea5a4",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(14, 165, 164, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(14, 165, 164, 0.1)";
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {filteredReviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor:
                          idx === currentIndex ? "#0ea5a4" : "#d1d5db",
                        width: idx === currentIndex ? "2rem" : "0.5rem",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(14, 165, 164, 0.1)",
                    color: "#0ea5a4",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(14, 165, 164, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(14, 165, 164, 0.1)";
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ) : error ? (
          <div
            className="rounded-lg p-6 sm:p-8 text-center mb-12"
            style={{ backgroundColor: "rgba(14, 165, 164, 0.08)" }}
          >
            <p className="text-slate-700 mb-4">
              We're currently setting up Google Reviews integration. Please check back soon!
            </p>
            <p className="text-sm text-slate-600">
              To see our reviews, visit our Google Business page
            </p>
          </div>
        ) : null}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ backgroundColor: "#0ea5a4" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0d8e8d")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0ea5a4")
            }
          >
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "rgba(14, 165, 164, 0.2)",
              color: "#0ea5a4",
              border: "2px solid #0ea5a4",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(14, 165, 164, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(14, 165, 164, 0.2)";
            }}
          >
            <span>Write a Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Modal for Full Review */}
      {selectedReview && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl max-h-96 overflow-y-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            {/* Review Content */}
            <div className="mb-6">
              {renderStars(selectedReview.rating)}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {selectedReview.author_name}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              "{selectedReview.text}"
            </p>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-sm">
                Reviewed {selectedReview.relative_time_description}
              </p>
            </div>

            {/* Google Badge */}
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="fill-gray-400"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="font-semibold">Verified Google Review</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-slideUp { animation: slideUp 0.6s ease-out; }
      `}</style>
    </section>
  );
}
