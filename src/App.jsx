import { KeywordsInput } from "./components/KeywordsInput";
import { RatingSelector } from "./components/RatingSelector";
import { SubmitButton } from "./components/SubmitButton";
import "./index.css"
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  const [keywords, setKeywords] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    if (!keywords.trim()) {
      alert("Please enter some keywords.");
      return;
    }
  
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }
    try {
      console.log("working")
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
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
    <form onSubmit={handleSubmit} className="review-form">
      <KeywordsInput keywords={keywords} setKeywords={setKeywords} />
      <RatingSelector rating={rating} setRating={setRating} />
      <SubmitButton />
    </form>
      
  );
}

export default App
