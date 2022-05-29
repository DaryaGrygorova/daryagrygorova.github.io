import React from 'react';
import styles from './formControls.module.css';

export const MyTextarea = ({field, form: { touched, errors}, ...props}) => {
  return (
  <div className={styles.input__wrapper}>
    <textarea className={styles.input} row={props.row} {...field} {...props}></textarea>
    {touched[field.name] && errors[field.name] && <div className={styles.error}>{errors[field.name]}</div>}
  </div>
);}

export const MyInput = ({field, form: { touched, errors}, ...props}) => {
  return (
    <div className={styles.input__wrapper}>
      <input className={styles.input} {...field} {...props} />
      {touched[field.name] && errors[field.name] && <div className={styles.error}>{errors[field.name]}</div>}
    </div>
  );}