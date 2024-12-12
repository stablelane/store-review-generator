import "./index.css"
import { useState } from "react";
  
function App() {
  const [rating, setRating] = useState(0);
  const [keywords, setKeywords] = useState("");
  
  async function handleSubmit() {
    try {
      console.log("working")
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Free-tier friendly model
          messages: [{ role: "user", content: `Generate a breif review for a store based on the following.Keywords: ${keywords}.
            Ensure the tone is positive and with something like 'Overall, I would give it a solid ${rating}-star experience.`}],
          max_tokens: 60, // Limits the output to conserve tokens
          temperature: 0.7, // Adds some creativity to the response
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.choices[0].message.content.trim());
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  return (
    <>
      {/* text area for keywords */}
      <div>
        <p>Keywords</p>
        <textarea value={keywords} onChange={e => setKeywords(e.target.value)}></textarea>
      </div>

      {/* star rating */}
      <div>
        <p>Rating</p>
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
      {/* submit button */}
      <button className="btn" onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default App
