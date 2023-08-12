import React, { useState } from 'react';
import reviewImg from '../WORK-file/Review_1.png';
import './Review.css';

export const Review = () => {
  const name = 'Olena Doe';
  const comment =
    'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.';
  const stars = 3;
  const avatar = '';

  const checked = value => {
    if (value === stars) {
      return true;
    }
    return false;
  };

  const [setIsChecked] = useState(false);

  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div className="review__header">
        <div className="review__avatar">
          {avatar ? (
            <img src={reviewImg} alt="reviewImg" key="reviewImg" />
          ) : (
            <p>{name[0]}</p>
          )}
        </div>
        <div>
          <h3 className="review__name">{name}</h3>
          <div className="rating">
            <input
              type="radio"
              id="star5"
              name="rate"
              value="5"
              checked={checked(5)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="star5" title="text"></label>
            <input
              type="radio"
              id="star4"
              name="rate"
              value="4"
              checked={checked(4)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="star4" title="text"></label>
            <input
              type="radio"
              id="star3"
              name="rate"
              value="3"
              checked={checked(3)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="star3" title="text"></label>
            <input
              type="radio"
              id="star2"
              name="rate"
              value="2"
              checked={checked(2)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="star2" title="text"></label>
            <input
              type="radio"
              id="star1"
              name="rate"
              value="1"
              checked={checked(1)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="star1" title="text"></label>
          </div>
        </div>
      </div>
      <p className="review__comment">{comment}</p>
    </div>
  );
};
