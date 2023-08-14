
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { editReview, fetchReviewById } from 'redux/reviews/operetions';
export const FeedbackForm = ({ isEditReview, editedRating, editedMessage, editedId, handleEditReview }) => {
    const dispatch = useDispatch();

    const [rating, setRating] = useState(editedRating || 0);
    const [message, setMessage] = useState(editedMessage || '');
    const [hover, setHover] = useState(null);
    const [id, setId] = useState('');

    useEffect(() => {
        if (isEditReview) {
            setRating(editedRating);
            setMessage(editedMessage);
            setId(editedId);
        }
    }, [isEditReview, editedRating, editedMessage, editedId]);

    const reset = () => {
        setMessage('');
        setRating(0);
        // setHover(null);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const currentMessage = e.currentTarget.message.value;
        if (!rating) {
            Notify.failure('Rating is empty');
            return;
        }
        if (message.length <= 5) {
            Notify.failure('Message is too short');
            return;
        }
        if (message.length > 300) {
            Notify.failure('Message is too long');
            return;
        }
        if (isEditReview) {
            if (editedMessage === currentMessage && editedRating === rating) {
                Notify.failure('Make changes');
                return;
            }

            await dispatch(
                editReview({
                    id: id,
                    review: { stars: rating, comment: currentMessage },
                }));
            Notify.success('Your feedback is saved successfully');
            await dispatch(fetchReviewById());
            reset();
        }
        handleEditReview();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Rating</label>
            <div>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = 5 - i;
                    return (
                        <label key={i}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <svg>
                                <use
                                    href='../../images/sprite.svg#icon-Star'
                                    fill={
                                        ratingValue <= (hover || rating) ? '#ffd129' : '#8f8b85'
                                    }
                                    width={24}
                                    height={24}
                                    style={{ marginRight: 1 }}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </svg>
                        </label>
                    );
                })}
            </div>
            <label>
                Review
            </label>
            <input
                type="text"
                required
                value={message}
                onChange={event => setMessage(event.currentTarget.value)}
                name="message"
                placeholder={'Enter text'}
            />
            {isEditReview ? (
                <div>
                    <button style={{ width: '50%' }}>{'Edit'}</button>
                    <button
                        btn="cancel"
                        style={{ width: '50%' }}
                        onClick={() => {
                            handleEditReview();
                            reset();
                        }}
                    >
                        {'Cancel'}
                    </button>
                </div>
            ) : (
                <button type="submit">{'Save'}</button>
            )}
        </form>
    );
};