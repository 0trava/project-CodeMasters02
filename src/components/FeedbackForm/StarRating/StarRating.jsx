import React from 'react'

export const StarRating = ({rating, handleChangeRating}) => {

  const checkRating = (id) => {
    if (rating === id) {
        return true;
    } else {
      return false;
    }
  }

  return (
    <div className="rating">
        <input 
          value="5" 
          name="rate" 
          id="star5" 
          type="radio" 
          defaultChecked={checkRating(5)} 
          onChange={() => handleChangeRating(5)}/>
        <label title="text" htmlFor="star5"></label>

        <input 
          value="4" 
          name="rate" 
          id="star4" 
          type="radio"
          defaultChecked={checkRating(4)}
          onChange={() => handleChangeRating(4)}/>
        <label title="text" htmlFor="star4"></label>

        <input 
          value="3" 
          name="rate" 
          id="star3" 
          type="radio"
          defaultChecked={checkRating(3)}
          onChange={() => handleChangeRating(3)}/>
        <label title="text" htmlFor="star3"></label>

        <input 
          value="2" 
          name="rate" 
          id="star2" 
          type="radio"
          defaultChecked={checkRating(2)}
          onChange={() => handleChangeRating(2)}/>
        <label title="text" htmlFor="star2"></label>

        <input 
          value="1" 
          name="rate" 
          id="star1" 
          type="radio"
          defaultChecked={checkRating(1)}
          onChange={() => handleChangeRating(1)}/>
        <label title="text" htmlFor="star1"></label>
  </div>
  )
}
