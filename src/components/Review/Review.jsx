import React from 'react';
import reviewImg from '../WORK-file/Review_1.png';
import './Review.css';
import {ReviewStarRating} from './StarRating/ReviewStarRating'

export const Review = ({review}) => {

  // eslint-disable-next-line
  const {rating, owner, text, avatar } = review;

  return (
    <div>
      <div className="review__header">
        <div className="review__avatar">
          {avatar ? (
            <img src={reviewImg} alt="reviewImg" key="reviewImg" />
          ) : (
            <p>{owner.name[0]}</p>
          )}
        </div>
        <div className='review_starrating'>
          <h3 className="review__name">{owner.name}</h3>
          <ReviewStarRating rating={rating} _id={owner._id}/>
        </div>
      </div>
      <p className="review__comment">{text}</p>
    </div>
  );
};
