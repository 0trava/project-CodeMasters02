import css from './FeedbackForm.module.css';
import sprite from 'images/sprite.svg'

export default function FeedbackForm() {
    return (
        <div className={css.feetback_container}>
            <div className={css.container}>
                <button className={css.button_close} type="button">
                    <svg className={css.icon} width='24' height='24'>
                        <use href={sprite + '#icon-x-close'}></use>
                    </svg>
                </button>
                <button className={css.button_edit} type="button">
                    <svg className={css.icon} width='24' height='24'>
                        <use href={sprite + '#icon-x-close'}></use>
                    </svg>
                </button>
                <button className={css.button_remove} type="button">
                    <svg className={css.icon} width='24' height='24'>
                        <use href={sprite + '#icon-x-close'}></use>
                    </svg>
                </button>
                <form className={css.form}>
                    <label className={css.label}>Rating
                        <input 
                        className={css.input}
                        type="text" 
                        placeholder='ЗАГЛУШКА (МАЮТЬ БУТИ ЗІРОЧКИ)' /> 
                    </label>
                    <label className={css.label}>Review
                        <input 
                            className={css.input}
                            type="text"
                            placeholder='Enter text' />
                    </label>
                </form>
                <div className={css.button_container}>                
                    <button className={css.button_save} type="submit">Save</button>
                    <button className={css.button_cancel} type="submit">Cancel</button>
                </div>
            </div>
        </div>
    )
};