import React, { useEffect, useState } from "react";
import reviewData from "../reviews_data.json";
import ReviewHighlighter from "./ReviewHighlighter";
import "../ReviewList.css";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewData);
  }, []);

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="review-header">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
              }
              alt={review.source.name}
              className="review-logo"
            />
            <div className="review-title">
              <span>{review.reviewer_name}</span>
              <span className="review-wrote"> wrote a review at</span>{" "}
              <a href={review.review_url}>{review.source.name}</a>
            </div>
            <div className="review-icons">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-bookmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </div>
            </div>
          </div>
          <div className="review-details">
            <div className="review-rating">
              {review.rating_review_score}/10
              <span className="review-date">{review.date}</span>
            </div>
            <ReviewHighlighter
              content={review.content}
              analytics={review.analytics}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
