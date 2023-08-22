
import sprite from '../../images/sprite.svg';
import css from './TaskForm.module.css'; 
import { useDispatch, useSelector} from 'react-redux';
import { addTask, editTask } from '../../redux/tasks/operation';
import { useState } from 'react';


export const TaskForm = ({ onClose, action, column, taskToEdit, id }) => {

const useTitle = "";
const useTimeStart = '';
const useTimeEnd ='';
const [usePriority, setUsePriority] = useState("low");
const useCategory = column.toLowerCase().replace(/ /g, '-');
// eslint-disable-next-line
const selectedDate = useSelector(state => state.date);



// Зберігаємо данні натиску Priority
const handleRadioChange = (event) => {
  // event.preventDefault();
  setUsePriority(event.target.value);
};

const {_id, title, start, end, date, category} = taskToEdit;
const dispatch = useDispatch();

  // ВІДПРАВКА ФОРМИ
  const onSubmitFormik = async (e, valuesFormik, actionsFormik) => {
    e.preventDefault();
// Add task
  if (!_id) {
      const title = e.currentTarget.title.value;
      const start = e.currentTarget.start.value;
      const end = e.currentTarget.end.value;
      const priority = usePriority;  
      const category = useCategory;

      
      // Transform date
      let date = selectedDate;
      const transformDate = new Date(date);
      transformDate.setUTCHours(23, 0, 0, 0);
      date = transformDate.toISOString();

      console.log(`Post`, title, start, end, priority, date, category)
      await dispatch(addTask({ title, start, end, priority, date, category}));
      onClose();
// Edit task
  } else {
    const title = e.currentTarget.title.value;
    const start = e.currentTarget.start.value;
    const end = e.currentTarget.end.value;
    const priority = usePriority;

    await dispatch(editTask({ _id, title, start, end, priority, date, category}));
    onClose();
  }

  };
  
  return (
    <div className={css.taskForm_container}>
      <button className={css.button_close_form} type="button" onClick={onClose}>
        <svg className={css.button_close_form_icon}>
          <use href={`${sprite}#icon-x-close`} />
        </svg>
      </button>

        <form 
          // onSubmit={(values, actions) => {onSubmitFormik(values, actions)}} 
          className={css.form} 
          onSubmit={onSubmitFormik}>
          <div className={css.title_container}>

{/* TITLE */}
            <label className={css.label} htmlFor="title">
              Title
              <input
                className={css.input}
                id="title"
                type="text"
                name="title"
                placeholder="Enter text"
                defaultValue={title ? title : useTitle}
                required
              />
            </label>
          </div>
{/* START */}
          <div className={css.time_container}>
            <label className={css.label} htmlFor="start">
              Start
              <input
                className={css.input}
                id="start"
                type="time"
                name="start"
                defaultValue={start ? start : useTimeStart}
                required
              />
            </label>
{/* END */}
            <label className={css.label} htmlFor="end">
              End
              <input className={css.input}
               id="end" 
               type="time" 
               name="end"
               defaultValue={end ? end : useTimeEnd}
               required
                />
            </label>
          </div>

          <div className={css.radiobuttons_container}>
            <div className={css.radio}>
{/* Priority */}
              <label htmlFor="low" className={css.label_radio}>
                <input
                  id="low"
                  type="radio"
                  name="priority"
                  value="low"
                  // checked={priority === "low"}
                  onChange={handleRadioChange}
                  // required
                />
                <span className={css.input_radio_low}>Low</span> 
              </label>
            </div>
            <div className={css.radio}>
              <label htmlFor="medium" className={css.label_radio}>
                <input
                  id="medium"
                  type="radio"
                  name="priority"
                  value="medium"
                  // checked={priority === "medium"}
                  onChange={handleRadioChange}
                />
                <span className={css.input_radio_medium}>Medium</span>
              </label>
            </div>
            <div className={css.radio}>
              <label htmlFor="high" className={css.label_radio}>
                <input
                  id="high"
                  type="radio"
                  name="priority"
                  value="high"
                  // checked={priority === "high"}
                  onChange={handleRadioChange} 

                />
                <span className={css.input_radio_high} >High</span>
              </label>
            </div>
          </div>

          <div className={css.button_container}>
{/* BUTTONS */}
            { title ? 
                      <button type="submit" className={css.button_edit}>
                      <svg className={css.iconPencil}>
                      <use href={sprite + '#icon-pencil'}></use>
                      </svg>
                      Edit
                      </button> 
                    :
                      <button type="submit" className={css.button_add}>
                        <svg className={css.iconPlus}>
                          <use href={sprite + "#icon-plus-square"}></use>
                        </svg>
                        Add
                      </button>
            }

            <button
              type="submit"
              className={css.button_cansel}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
    </div>
  );
};