import React, {useState} from 'react';
import "./StarRating.scss";
export default function StarRating({rating, setRating}){
	//handle state
	const [hover, setHover] = useState(rating || 0);

	//render or "templates"
	return (
		<div className="stars">
			{[1,2,3,4,5].map(star => (
				<span
					className={star <= hover ? "star on" : "star off"}
					onMouseEnter={()  => setHover(star)}
					onMouseLeave={()  => setHover(rating)}
					onClick={() => setRating(star)}
					key={star}

				>
					&#9733;
				</span>
			))}

		</div>
	)
}
