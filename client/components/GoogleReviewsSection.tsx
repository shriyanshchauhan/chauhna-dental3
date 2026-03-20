import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { GoogleReview, GoogleReviewsResponse } from "@shared/api";
import { Button } from "@/components/ui/button";

export default function GoogleReviewsSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/google-reviews");
      const data = (await response.json()) as GoogleReviewsResponse;

      if (data.error) {
        setError(data.error);
      } else {
        setReviews(data.reviews || []);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const googleReviewUrl = "https://share.google/Xs6J79hlAaNBRvWEE";

  if (loading) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Patient Reviews
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Loading reviews from Google...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Patient Reviews
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied patients
          </p>
        </div>

        {/* Reviews Grid */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                {/* Rating */}
                <div className="mb-4">{renderStars(review.rating)}</div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed line-clamp-4">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">
                    {review.author_name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 text-center mb-12">
            <p className="text-slate-700 mb-4">
              We're currently setting up Google Reviews integration. Please check back soon!
            </p>
            <p className="text-sm text-slate-600 mb-6">
              To see our reviews, visit our Google Business page:
            </p>
          </div>
        ) : null}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300"
          >
            <span>Write a Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-teal-600 font-semibold py-3 px-6 sm:px-8 rounded-lg border-2 border-teal-500 transition-colors duration-300"
          >
            <span>View All Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
