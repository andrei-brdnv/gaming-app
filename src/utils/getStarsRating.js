import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const getStarsRating = (rating) => {
    let stars = [];
    // Round down to get whole stars:
    const wholeStars = Math.floor(rating);
    // Check if whole is less than rating.
    // If less than rating, a half star is needed:
    let halfStars = (wholeStars < rating);
    const element = <FontAwesomeIcon icon={faStar} />
    const elementHalf = <FontAwesomeIcon icon={faStarHalfAlt} />
    const elementEmpty = <FontAwesomeIcon icon={emptyStar} />
    // Loop through five stars:
    for (let i = 1; i <= 5; i++) {
        // Less than or equal to stars, display a solid star:
        if (i <= wholeStars) {
            stars.push(element)
            // If iteration is after a whole star and a half star is needed, display half star:
        } else if ( i === wholeStars + 1 && halfStars === true ) {
            stars.push(elementHalf)
            // Otherwise, display a gray empty star:
        } else {
            stars.push(elementEmpty)
        }
    }

    return stars;
}

export default getStarsRating