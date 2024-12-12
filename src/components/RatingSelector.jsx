export function RatingSelector({ rating, setRating }) {
    return (
        <div>
          <p>Rating</p>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="star"
                style={{
                  cursor: "pointer",
                  color: rating >= star ? "gold" : "gray",
                  fontSize: "35px",
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
            <p>Selected Rating: {rating}</p>
          </div>
        </div>
      );
}