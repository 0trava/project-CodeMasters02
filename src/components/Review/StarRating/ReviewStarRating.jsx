import React from 'react'

export const ReviewStarRating = ({rating, _id}) => {

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
          name={`rate${_id}`} 
          id={`star5${_id}`}
          type="radio" 
          defaultChecked={checkRating(5)} 
          />
        <label title="text" htmlFor={`star5${_id}`}></label>

        <input 
          value="4" 
          name={`rate${_id}`}  
          id={`star4${_id}`} 
          type="radio"
          defaultChecked={checkRating(4)}
          />
        <label title="text" htmlFor={`star4${_id}`}></label>

        <input 
          value="3" 
          name={`rate${_id}`} 
          id={`star3${_id}`} 
          type="radio"
          defaultChecked={checkRating(3)}
          />
        <label title="text" htmlFor={`star3${_id}`}></label>

        <input 
          value="2" 
          name={`rate${_id}`} 
          id={`star2${_id}`} 
          type="radio"
          defaultChecked={checkRating(2)}
          />
        <label title="text" htmlFor={`star2${_id}`}></label>

        <input 
          value="1" 
          name={`rate${_id}`}  
          id={`star1${_id}`} 
          type="radio"
          defaultChecked={checkRating(1)}
          />
        <label title="text" htmlFor={`star1${_id}`}></label>
  </div>
  )
}
