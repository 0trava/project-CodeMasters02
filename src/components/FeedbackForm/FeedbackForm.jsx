import React from 'react';
import './FeedbackForm.css';
import { useState } from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { selectUserReview } from 'redux/reviews/selectors';
import { useDispatch } from "react-redux";
import { addReview, deleteReview } from 'redux/reviews/operations';

export const FeedbackForm = ({ onClose }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { rating, text } = useSelector(selectUserReview);
    
  const [editReview, setEditReview] = useState(false);
  const Review = text;

  // BUTTON - change review
  const handleChage = () => {
    setEditReview(true);
  };

  // COMMAND - delete review
  const toDelete = () => {
    // !!!! КОМАНДА НА БЕКЕНД
    dispatch(deleteReview);
    onClose();
  };

  // COMMAND - add Review
  const changeAddReview = (e) => {
    // !!!!!! RATING TEST
    const rating = 1;
    const text = e.currentTarget.text.value;

    if ( text || rating) {
      dispatch(addReview({ rating, text }));
      onClose();
    } else {
      return;
    }
  }

   // COMMAND - change (edit) Review
  const cahngeEditReview = (e) => {
      // !!!!!! RATING TEST
      const rating = 1;
      const text = e.currentTarget.text.value;

      if ( text || rating) {
        dispatch(editReview({ rating, text }));
        onClose();
      } else {
        return;
      }
   }

  return (
    <div className="FeedbackForm__container">
      <button
        className="FeedbackForm__button-close"
        type="button"
        onClick={onClose}
      >
        <RiCloseLine className="FeedbackForm__icon" />
      </button>

      <form className="FeedbackForm__form">
        <label className="FeedbackForm__title">Rating</label>
        <div className="FeedbackForm__stars">
          <div className="rating">
            <input type="radio" id="star5" name="star5" value="5" />
            <label htmlFor="star5" title="text"></label>
            <input type="radio" id="star4" name="star4" value="4" />
            <label htmlFor="star4" title="text"></label>
            <input type="radio" id="star3" name="star3" value="3" />
            <label htmlFor="star3" title="text"></label>
            <input type="radio" id="star2" name="star2" value="2" />
            <label htmlFor="star2" title="text"></label>
            <input type="radio" id="star1" name="star1" value="1" />
            <label htmlFor="star1" title="text"></label>
          </div>
        </div>
        <div className="FeedbackForm__title-block">
          <label className="FeedbackForm__title">Review</label>

          {Review ? (
            <div className="FeedbackForm__btn-changeblock">
              <div onClick={handleChage} className="FeedbackForm__btn-pencil">
                <RiPencilLine className="FeedbackForm__icon-pencil" />
              </div>
              <div onClick={toDelete} className="FeedbackForm__btn-trash">
                <RiDeleteBinLine className="FeedbackForm__icon" />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        <textarea
          className="FeedbackForm_input"
          name="text"
          type="text"
          rows="5"
          placeholder="Enter your text"
        />
        {editReview || !Review ? (
          <div className="FeedbackForm_btn-block">
            {Review ? (
              <button type="submite" className="FeedbackForm__btn" onClick={cahngeEditReview}>
                Edit
              </button>
            ) : (
              <button type="submite" className="FeedbackForm__btn" onClick={changeAddReview}>
                Save
              </button>
            )}

            <button
              type="button"
              className="FeedbackForm__btn-cansel"
              onClick={onClose}
            >
              Cansel
            </button>
          </div>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};
