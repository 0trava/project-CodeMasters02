import React from 'react';
import reviewImg from '../WORK-file/Review_1.png';
import './Review.css';

export const Review = ({listReview}) => {


  // console.log(review.listReview.owner);
  // eslint-disable-next-line
  const {rating, owner, comment, avatar, id } = listReview;

  // const checkID = (value) => {

  //   if (value === rating) {
  //     return true;
  //   }
  //   return false;
  // };


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
          <div className="rating">
            <input
              type="radio"
              id="star5"
              name={id}
              value="5"
              
            />
            <label htmlFor="star5" title="text"></label>
            <input
              type="radio"
              id="star4"
              name={id}
              value="4"
              
            />
            <label htmlFor="star4" title="text"></label>
            <input
              type="radio"
              id="star3"
              name={id}
              value="3"
              
            />
            <label htmlFor="star3" title="text"></label>
            <input
              type="radio"
              id="star2"
              name={id}
              value="2"
              
            />
            <label htmlFor="star2" title="text"></label>
            <input
              type="radio"
              id="star1"
              name={id}
              value="1"
              
            />
            <label htmlFor="star1" title="text"></label>
          </div>
        </div>
      </div>
      <p className="review__comment">{comment}</p>
    </div>
  );
};
