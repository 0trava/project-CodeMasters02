import css from './FeedbackBtn.module.css';

export const FeedbackBtn = ({ onClick }) => {
  return (
    <button type="button" className={css.feedbackBtn} onClick={onClick}>
      Feedback
    </button>
  );
};
