import React from 'react';

const RatingButtons = ({ isLoading, onRate }) => {
    const options = [1, 2, 3, 4, 5]
    return (
        <div>
            {options.map(opt => <button className={isLoading ? "rating loading" : "rating"} onClick={() => onRate(opt)} key={opt}>{opt}</button>)}
        </div>
    )
}

export default RatingButtons;