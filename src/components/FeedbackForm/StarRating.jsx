import React from 'react';

const StarRating = ({ rating }) => {
  const radioInputs = Array.from({ length: 5 }, (_, index) => (
    <React.Fragment key={index}>
      <input
        type="radio"
        id={`star${index + 1}`}
        name={`star`}
        value={index + 1}
        defaultChecked={rating === index + 1}
      />
      <label htmlFor={`star${index + 1}`} title={`${index + 1} star`}></label>
    </React.Fragment>
  ));

  return <div className="rating">{radioInputs}</div>;
};

export default StarRating;