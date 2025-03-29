import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0); // Final selected rating
  const [hover, setHover] = useState(0); // Hovered rating (temporary)

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star)=> (
        <span
          key={star}
          onClick={() => setRating(star)} // Click karne se rating fix ho jayegi
          onMouseEnter={() => setHover(star)} // Hover par temporary rating badlegi
          onMouseLeave={() => setHover(0)} // Mouse hatane par wapas original rating dikhayenge
          style={{ fontSize: "30px", cursor: "pointer", color: star <= (hover || rating) ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
      <h2>Rating: {rating}</h2>
    </div>
  );
}

export default StarRating;

