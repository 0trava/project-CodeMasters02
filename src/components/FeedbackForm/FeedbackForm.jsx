import React from 'react';
import './FeedbackForm.css';
import { useState } from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { selectUserReview } from 'redux/reviews/selectors';
import { useDispatch } from "react-redux";
import { addReview, deleteReview, editReview } from 'redux/reviews/operations';

export const FeedbackForm =  ({ onClose }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const {rating, text} = useSelector(selectUserReview);
  const [changeReview, setChangeReview] = useState(false);
  const [valueText, setValueText] = useState("");
  let Review = text;

  // BUTTON - change review
  const handleChage = () => {
    setChangeReview(true);
  };

  // COMMAND - delete review
  const toDelete = async (e) => {
    e.preventDefault();
    // !!!! КОМАНДА НА БЕКЕНД
    dispatch(deleteReview);
    const { payload } = await dispatch(deleteReview());
    setValueText("");
    
    
  };

  // COMMAND - add Review
  const changeAddReview = async (e) => {
    e.preventDefault();
    // !!!!!! RATING TEST
    const rating = 1;
    const text = valueText;

    if ( text || rating) {
      const { payload } = await dispatch(addReview({ rating, text }));
      console.log(payload);
      // onClose();
    } else {
      return;
    }
  }

   // COMMAND - change (edit) Review
  const cahngeEditReview = async (e) => {
      e.preventDefault();
      // !!!!!! RATING TEST
      const rating = 5;
      const text = valueText;

      if ( text || rating) {
        console.log("start");
        const { payload } = await dispatch(editReview({ rating, text }));

      } else {
        return;
      }
   }

// Save - text from Textarea
 const changeText = (e) => {
  e.preventDefault();
  setValueText(e.target.value);
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

      <form className="FeedbackForm__form" >

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
        
{/* TEXT -----------------------------------------------*/}
        <textarea
          className="FeedbackForm_input"
          name="text"
          type="text"
          id="textarea"
          rows="5"
          onChange={changeText}
          placeholder="Enter your text"
          defaultValue={Review ? Review : valueText}
        ></textarea>
{/* TEXT -----------------------------------------------*/}



        {changeReview || !Review ? (
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
