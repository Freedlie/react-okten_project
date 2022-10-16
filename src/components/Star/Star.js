import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const Star = ({vote}) => {
    return (
        <div>
            <StarRatings
                rating={vote}
                numberOfStars = {5}
                starDimension="20px"
                starSpacing="20px"
                starRatedColor = "#021B4D"
            />
        </div>
    );
};

export {Star};