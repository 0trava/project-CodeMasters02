import sprite from '../../images/sprite.svg';
import css from './TaskForm.module.css'; 
import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as yup from 'yup';
import { useDispatch, useSelector} from 'react-redux';
import { addTask, editTask } from '../../redux/tasks/operation';

// const taskSchema = yup.object().shape({
//   title: yup
//     .string()
//     .max(250, 'Title must be 250 characters or less.')
//     .required('Title is required!'),
//   start: yup.string().required('Start time is required!'), 
//   end: yup
//     .string()
//     .required('End time is required!')
//     .test(
//       'is-greater',
//       'End time should be greater than start time',
//       function (value) {
//         const { start } = this.parent;
//         if (start && value) {
//           const startTime = new Date(`2000-01-01T${start}`);
//           const endTime = new Date(`2000-01-01T${value}`);
//           return endTime > startTime;
//         }
//         return true;
//       }
//     ), 
//   priority: yup
//     .string()
//     .oneOf(['low', 'medium', 'high'])
//     .required('Priority is required'),
//   date: yup.date().required('Date is required'),
//   category: yup
//     .string()
//     .oneOf(['to-do', 'in-progress', 'done'])
//     .required('Category is required'),
// });

export const TaskForm = ({ onClose, action, column, taskToEdit }) => {

const useTitle = "";
const useTimeStart = '09:00';
const useTimeEnd ='14:00';
const usePriority ="low";
const useCategory = column.toLowerCase().replace(/ /g, '-');
const selectedDate = useSelector(state => state.date);

const {_id, title, priority, start, end, date, category} = taskToEdit;
const dispatch = useDispatch();

  // ВІДПРАВКА ФОРМИ
  const onSubmitFormik = (e, valuesFormik, actionsFormik) => {
    e.preventDefault();
  
// Add task
  if (!_id) {
      const title = e.currentTarget.title.value;
      const start = e.currentTarget.start.value;
      const end = e.currentTarget.end.value;
      const priority = usePriority;   
      const date = selectedDate;
      const category = useCategory;

      dispatch(addTask({ title, start, end, priority, date, category}));
      onClose();
// Edit task
  } else {
    const title = e.currentTarget.title.value;
    const start = e.currentTarget.start.value;
    const end = e.currentTarget.end.value;
    const priority = e.currentTarget.priority.value;

    dispatch(editTask({ _id, title, start, end, priority, date, category}));
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
      <Formik
        // validationSchema={taskSchema}
        onSubmit={(values, actions) => {
          onSubmitFormik(values, actions);
        }}
      >
        <Form className={css.form} onSubmit={onSubmitFormik}>
          <div className={css.title_container}>

{/* TITLE */}
            <label className={css.label} htmlFor="title">
              Title
              <Field
                className={css.input}
                id="title"
                type="text"
                name="title"
                placeholder="Enter text"
                defaultValue={title ? title : useTitle}
                
              />
              <ErrorMessage name="title" component="div" />
            </label>
          </div>
{/* START */}
          <div className={css.time_container}>
            <label className={css.label} htmlFor="start">
              Start
              <Field
                className={css.input}
                id="start"
                type="time"
                name="start"
                defaultValue={start ? start : useTimeStart}
              />
              <ErrorMessage name="start" component="div" />
            </label>
{/* END */}
            <label className={css.label} htmlFor="end">
              End
              <Field className={css.input}
               id="end" 
               type="time" 
               name="end"
               defaultValue={end ? end : useTimeEnd}
                />
              <ErrorMessage name="end" component="div" />
            </label>
          </div>

          <div className={css.radiobuttons_container}>
            <div className={css.radio}>
{/* Priority */}
              <label htmlFor="low" className={css.label_radio}>
                <Field
                  id="low"
                  type="radio"
                  name="priority"
                  value="low"
                  checked={priority === "low"}
                />
                <span className={css.input_radio_low}>Low</span> 
              </label>
            </div>
            <div className={css.radio}>
              <label htmlFor="medium" className={css.label_radio}>
                <Field
                  id="medium"
                  type="radio"
                  name="priority"
                  value="medium"
                  checked={priority === "medium"} 
                />
                <span className={css.input_radio_medium}>Medium</span>
              </label>
            </div>
            <div className={css.radio}>
              <label htmlFor="high" className={css.label_radio}>
                <Field
                  id="high"
                  type="radio"
                  name="priority"
                  value="high"
                  checked={priority === "high"} 
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
        </Form>
      </Formik>
    </div>
  );
};
