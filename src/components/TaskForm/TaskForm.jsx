// import styles  from './TaskForm.module.css';
// import {useDispatch} from 'react-redux';

// import { useState } from 'react';
// import {fetchTasks, addTask} from '../../redux/tasks/operation';
// // import { useDate } from 'hooks/useDate';
// // const { format, addMonths } = require('date-fns');

// export const TaskForm =({date,onClose,column})=> {
//   const [title,setIsTitle]=useState('');
//   const [start,setIsStart]=useState('');
//   const [end,setIsEnd]=useState('');
//   const [priority,setIsPriority]=useState('');
//   const dispatch = useDispatch();

  
//   // const urlDate = useDate();
//   // const from = format(urlDate, 'yyyy-MM-dd');
//   // const to = format(addMonths(urlDate, 1), 'yyyy-MM-dd');
//   // const data = {
//   //   from,
//   //   to,
//   // };

//   const handleChange = event => {
//     const { name, id, value } = event.target;

//     if(name==='title'){setIsTitle(value)};
//     if(name==='start'){setIsStart(value)};
//     if(name==='end'){setIsEnd(value)};
//     if(name==='priority'){setIsPriority(id)};
//   };

//   const onSubmit = async(evt)=> {
//     evt.preventDefault()
//     await dispatch(fetchTasks({title,start,end,priority,date,column}));
//     await dispatch(addTask(data));
//     onClose()
//   }

//   return (
//     <div  className={styles.container}>
//       <form className={styles.form} onSubmit={onSubmit}>
//         <div className=''>
//           <label className={styles.label} htmlFor='title'>
//             <p>Title</p>
//           </label>
//           <input
//             id='title'
//             type='text'
//             name="title"
//             placeholder="Enter text"
//             onChange={handleChange}
//             className={styles.input}
//             maxLength={250}
//             value={title}
//           />
//         </div>
//         <div className={styles.flex}>
//           <div className={styles.start}>
//           <label  className={styles.label} htmlFor='start'>
//             <p>Start</p>
//           </label>
//           <input
//             id='start'
//             type='time'
//             name='start'
//             onChange={handleChange}
//             className={styles.input}
//             value={start}
//           />
//         </div>
//         <div className="">
//           <label  className={styles.label} htmlFor='end'>
//             <p>End</p>
//           </label>
//           <input
//             id='end'
//             type='time'
//             name='end'
//             onChange={handleChange}
//             className={styles.input}
//             value={end}
//           />
//         </div>
//         </div>
//         <div className={styles.flex}>
//             <label htmlFor='low'  className={styles.check}>
//               <div className={styles.flex}>
//                 <input
//                   id='low'
//                   type='radio'
//                   name='priority'
//                   onChange={handleChange}
//                   className={styles.checkbox1}
//                 />
//                 <span>Low</span>
//               </div>
//             </label>
//             <label htmlFor='medium' className={styles.check}>
//                <div className={styles.flex}>
//                 <input
//                   id='medium'
//                   type='radio'
//                   name='priority'
//                   onChange={handleChange}
//                   className={styles.checkbox2}
//                 />
//                 <span>Medium</span>
//               </div>
//             </label>
//             <label htmlFor='high' className={styles.check} >
//               <div className={styles.flex}>
//                 <input
//                   id='high'
//                   type='radio'
//                   name='priority'
//                   onChange={handleChange}
//                   className={styles.checkbox3}
//                 />
//                 <span>High</span>
//               </div>
//             </label>
//         </div>
//         <div className={styles.flex}>
//             <button type="submit" className={styles.button}>
//               <>
                
//                 Add
//               </>
//             </button>
//             <button className={styles.btn_cansel} onClick={onClose}>Cancel</button>
//           </div>
//       </form>
      
//     </div>
//   );
// };


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
    start: yup
        .string()
        .required('Start time is required!'), //?????????????????????
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
          ),    //???????????????????????
    priority: yup
        .string()
        .oneOf(['low', 'medium', 'high'])
        .required('Priority is required'),
    date: yup
        .date()
        .required('Date is required'),
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
            <button 
                className={css.button_close_form}
                type="button">
                X
            </button>
        <Formik
            initialValues={initialValues}
            validationSchema={taskSchema}
            onSubmit={handleSubmit}
            >

            <Form 
                className={css.form} 
            >
                <div className={css.title_container}>
                    <label className={css.label} htmlFor='title'>
                        Title
                        <Field 
                            className={css.input}
                            id='title'
                            type='text'
                            name="title"
                            placeholder="Enter text"
                        />
                        <ErrorMessage name="title" component="div" />
                    </label>
                </div>

                <div className={css.time_container}>
                    <label  className={css.label} htmlFor='start'>
                        Start
                        <Field 
                            className={css.input}
                            id='start'
                            type='time'
                            name='start'
                        />
                        <ErrorMessage name="start" component="div" />
                    </label>
                    <label  className={css.label} htmlFor='end'>
                        End
                        <Field
                            className={css.input} 
                            id='end'
                            type='time'
                            name='end'
                        />
                        <ErrorMessage name="end" component="div" />
                    </label>
                </div>
                
                <div className={css.radiobuttons_container}>
                    <div className={css.radio}>
                         <label htmlFor='low' className={css.label_radio}>
                            <Field 
                                className={css.input_radio_low}
                                checked
                                id='low'
                                type='radio'
                                name='priority'
                                value='low'
                            />
                            Low
                        </label>
                    </div>
                    <div className={css.radio}>
                        <label htmlFor='medium' className={css.label_radio}>
                            <Field 
                                className={css.input_radio_medium}
                                id='medium'
                                type='radio'
                                name='priority'
                                value='medium'
                            />
                        Medium
                        </label>
                    </div>
                    <div className={css.radio}>                   
                        <label htmlFor='high' className={css.label_radio}>
                            <Field
                                className={css.input_radio_high}
                                id='high'
                                type='radio'
                                name='priority'
                                value='high'
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
                    <button type="submit" className={css.button_cansel}>
                        Cancel
                    </button>
                </div>
            </Form>
        </Formik>
    </div>
)};
