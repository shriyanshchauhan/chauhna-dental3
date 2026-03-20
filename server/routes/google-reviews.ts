import { RequestHandler } from "express";

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

export interface GoogleReviewsResponse {
  reviews: GoogleReview[];
  error?: string;
}

export const handleGoogleReviews: RequestHandler = async (_req, res) => {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return res.status(400).json({
        error: "Google Places API key or Place ID not configured",
        reviews: [],
      } as GoogleReviewsResponse);
    }

    // Fetch place details from Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API error:", data);
      return res.status(200).json({
        reviews: [],
        error: "Unable to fetch reviews",
      } as GoogleReviewsResponse);
    }

    // Get top 5 reviews
    const reviews = (data.result?.reviews || [])
      .slice(0, 5)
      .map((review: any) => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        relative_time_description: review.relative_time_description,
      }));

    res.json({ reviews } as GoogleReviewsResponse);
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    res.status(200).json({
      reviews: [],
      error: "Failed to fetch reviews",
    } as GoogleReviewsResponse);
  }
};
