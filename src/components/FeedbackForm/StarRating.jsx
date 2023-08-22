import React from 'react';

const StarRating = ({ rating, id }) => {
    const test = (index) => {
        if (Number(rating) === index + 1) {
            return " ";
        }
    }



  const radioInputs = Array.from({ length: 5 }, (_, index) => (
    <React.Fragment key={index}>
      <input
        type="radio"
        id={`star${index + 1}`}
        name={`star${id}`}
        value={index + 1}
        className="star"
        defaultChecked={test(index + 1)}
      />
      <label htmlFor={`star${index + 1}`} title={`${index + 1} star`}></label>
    </React.Fragment>
  ));

  return <div className="rating">{radioInputs}</div>;
};

export default StarRating;