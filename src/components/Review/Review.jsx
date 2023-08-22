import React from 'react';
import reviewImg from '../WORK-file/Review_1.png';
import './Review.css';
import StarRating from 'components/FeedbackForm/StarRating';

export const Review = ({review}) => {

  // eslint-disable-next-line
  const {rating, owner, text, avatar, id } = review;

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
        <div>
          <h3 className="review__name">{owner.name}</h3>
          <StarRating rating={rating} id={id}/>
        </div>
      </div>
      <p className="review__comment">{text}</p>
    </div>
  );
};
