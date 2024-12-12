export function RatingSelector({ rating, setRating }) {
    return (
        <div>
          <label className="rating-label">Rating</label>
          <div className="star-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="star"
                style={{
                  color: rating >= star ? "gold" : "gray",
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
            <p className="rating-text">Selected Rating: {rating}</p>
          </div>
        </div>
      );
}