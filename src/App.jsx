import "./index.css"
import { useState } from "react";
  
function App() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <div>
        <h1>Rating</h1>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className="star"
              style={{
                cursor: 'pointer',
                color: rating >= star ? 'gold' : 'gray',
                fontSize: '35px',
              }}
              onClick={() => setRating(star)}
            >
              ★
            </span>
            
          ))}
          <p>Selected Rating: {rating}</p>
        </div>
      </div>
    </>
  );
}

export default App
