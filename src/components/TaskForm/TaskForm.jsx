import sprite from '../../images/sprite.svg';
import css from './TaskForm.module.css'; 
// import { RiCloseLine } from 'react-icons/ri';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../../redux/tasks/operation';

const taskSchema = yup.object().shape({
  title: yup
    .string()
    .max(250, 'Title must be 250 characters or less.')
    .required('Title is required!'),
  start: yup.string().required('Start time is required!'), //?????????????????????
  end: yup
    .string()
    .required('End time is required!')
    .test(
      'is-greater',
      'End time should be greater than start time',
      function (value) {
        const { start } = this.parent;
        if (start && value) {
          const startTime = new Date(`2000-01-01T${start}`);
          const endTime = new Date(`2000-01-01T${value}`);
          return endTime > startTime;
        }
        return true;
      }
    ), //???????????????????????
  priority: yup
    .string()
    .oneOf(['low', 'medium', 'high'])
    .required('Priority is required'),
  date: yup.date().required('Date is required'),
  category: yup
    .string()
    .oneOf(['to-do', 'in-progress', 'done'])
    .required('Category is required'),
});

export const TaskForm = ({ onClose, action, column, taskToEdit }) => {
  //     const { _id, title, start, end, priority, date } = taskToEdit;

  // const dispatch = useDispatch();

  //     const handleSubmit = (values, { resetForm }) => {
  //         if (action === 'add') {
  //             dispatch(addTask(values));
  //         }
  //         if (action === 'edit') {
  //             dispatch(editTask({ _id, ...values }));
  //         }
  //         resetForm();
  //         onClose();
  //     };

  //     const setCategory = () => {
  //         if (column === 'To do') return 'to-do';
  //         if (column === 'In progress') return 'in-progress';
  //         if (column === 'Done') return 'done';
  //     };

  const initialValues = {
    title: '',
    start: '09:00',
    end: '14:00',
    priority: 'low',
    date: new Date(),
    // category: setCategory(),
  };

  const handleSubmit = (values, action) => {
    console.log(values);
    console.log(action);
  };

  return (
    <div className={css.taskForm_container}>
      <button className={css.button_close_form} type="button" onClick={onClose}>
        <svg className={css.iconClose}>
          <use href={`${sprite}#icon-x-close`} />
        </svg>
      </button>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.title_container}>
            <label className={css.label} htmlFor="title">
              Title
              <Field
                className={css.input}
                id="title"
                type="text"
                name="title"
                placeholder="Enter text"
              />
              <ErrorMessage name="title" component="div" />
            </label>
          </div>

          <div className={css.time_container}>
            <label className={css.label} htmlFor="start">
              Start
              <Field
                className={css.input}
                id="start"
                type="time"
                name="start"
              />
              <ErrorMessage name="start" component="div" />
            </label>
            <label className={css.label} htmlFor="end">
              End
              <Field className={css.input} id="end" type="time" name="end" />
              <ErrorMessage name="end" component="div" />
            </label>
          </div>

          <div className={css.radiobuttons_container}>
            <div className={css.radio}>
              <label htmlFor="low" className={css.label_radio}>
                <Field
                  className={css.input_radio_low}
                  checked
                  id="low"
                  type="radio"
                  name="priority"
                  value="low"
                />
                Low
              </label>
            </div>
            <div className={css.radio}>
              <label htmlFor="medium" className={css.label_radio}>
                <Field
                  className={css.input_radio_medium}
                  id="medium"
                  type="radio"
                  name="priority"
                  value="medium"
                />
                Medium
              </label>
            </div>
            <div className={css.radio}>
              <label htmlFor="high" className={css.label_radio}>
                <Field
                  className={css.input_radio_high}
                  id="high"
                  type="radio"
                  name="priority"
                  value="high"
                />
                High
              </label>
            </div>
          </div>

          <div className={css.button_container}>
            {/* {action === 'add' ? (
                    <button type="submit" className={css.button_add}>
                        Add
                    </button>                        
                    ) : (
                    <button type="submit" className={css.button_edit}>
                        Edit
                    </button>                        
                    )} */}

            <button type="submit" className={css.button_add}>
              Add
            </button>
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
