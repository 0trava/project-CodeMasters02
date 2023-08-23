import React, { useEffect } from 'react';
import './FeedbackForm.css';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { selectUserReview } from 'redux/reviews/selectors';
import { useDispatch } from "react-redux";
import { addReview, deleteReview, editReview } from 'redux/reviews/operations';
import sprite from '../../images/sprite.svg';
import {StarRating} from './StarRating/StarRating';

export const FeedbackForm =  ({ onClose }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const {rating, text} = useSelector(selectUserReview);
  const [changeReview, setChangeReview] = useState(false);
  const [valueText, setValueText] = useState("");
  const [editRating, setEditRating] = useState(false);
  const [selectedRating, setSelectedRating] = useState(rating);

  let Review = text;
  let Rating = rating;

  // Перевірка наявності рейтингу на старті
  useEffect(() => {
    if (Rating) {
      setEditRating(true);
    }
  }, [Rating]);

  // Зберігаємо данні рейтинга
  const handleChangeRating = (value) => {
    setSelectedRating(value);
  };
  



  // BUTTON - change review
  const handleChage = (e) => {
    e.preventDefault();
    setChangeReview(true);
    document.getElementById('textarea').removeAttribute('readOnly');
    setEditRating(false);


  };

  // COMMAND - delete review
  const toDelete = async (e) => {
    e.preventDefault();
    // dispatch(deleteReview);
    // eslint-disable-next-line
    await dispatch(deleteReview());
    setValueText("");
    setChangeReview(false);
    document.getElementById('textarea').removeAttribute('readOnly');
    document.getElementById('textarea').value = "";
    setEditRating(false);
    Rating= "";
    
  };

  // COMMAND - add Review
  const changeAddReview = async (e) => {
    e.preventDefault();
    const rating = selectedRating;
    const text = valueText;
    setEditRating(true);

    if ( text || rating) {
      await dispatch(addReview({ rating, text }));
      onClose();
    } else {
      return;
    }
  }

   // COMMAND - change (edit) Review
  const cahngeEditReview = async (e) => {
      e.preventDefault();
      const rating = selectedRating;
      const text = valueText;

      if ( text || rating) {
        await dispatch(editReview({ rating, text }));
        setValueText(text);
        setChangeReview(false);
        document.getElementById('textarea').setAttribute('readOnly', true);
        setEditRating(true);
        
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

      <form className="FeedbackForm__form">

        <label className="FeedbackForm__title">Rating</label>
        
{/* STAR RATING ---------------------------------- */}
        <div className={editRating ? "FeedbackForm__StarRating-save" : "FeedbackForm__StarRating"}>
          <StarRating 
          rating={Rating} 
          className="FeedbackForm__StarRating"
          handleChangeRating={handleChangeRating}/>
        </div>


        <div className="FeedbackForm__title-block">
          <label className="FeedbackForm__title">Review</label>

          {Review ? (
            <div className="FeedbackForm__btn-changeblock">
              <button onClick={handleChage} className="btn_icon_pencil">
                <svg className="iconPencil" width="16" height="16">
                  <use href={sprite + '#icon-pencil'}></use>
                </svg>
              </button>
              <button onClick={toDelete} className="btn_icon_trash" >
                <svg width="16" height="16">
                  <use href={sprite + '#icon-trash-2'}></use>
                </svg>
              </button>
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
          readOnly={Review ? true : false}
          onChange={changeText}
          placeholder="Enter text"
          defaultValue={Review ? Review : ""}
          // value={valueText}
          maxLength="300"
          required
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