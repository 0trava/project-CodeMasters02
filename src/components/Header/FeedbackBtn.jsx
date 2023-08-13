import css from './FeedbackBtn.module.css';

export const FeedbackBtn = () => {
  return (
    <button className={css.btn} type="primary" onClick={() => {}}>
      <span className={css.btn_text}>Feedback</span>
    </button>
  );
}