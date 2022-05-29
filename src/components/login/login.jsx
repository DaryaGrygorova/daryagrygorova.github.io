import styles from './login.module.css'
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { MyInput } from '../../common/fornsControls/formControls';
import { logInThunkCreator } from '../../Redux/Reducers/auth-reducer';
import { connect } from 'react-redux';

const LoginForm = (props) => {

const submit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {
  setSubmitting(false);
    console.log(setSubmitting)
  props.logIn(values.email, values.password, values.rememberMe)
  };

  return (
    <Formik
      initialValues={{email: '', password: '', rememberMe: false}}
      onSubmit={submit}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      } }
       >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
        <label className={styles.label} htmlFor="login">Login</label>
        <Field id="login"
               component={MyInput}
               type="email" name="email"
               className={props.errorStatus ? `${styles.input} ${styles.inputError}` : `${styles.input}`}/>
          <label className={styles.label} htmlFor="password">Password</label>
          <Field id="password"
                 component={MyInput}
                 type="password" name="password"
                 className={props.errorStatus ? `${styles.input} ${styles.inputError}` : `${styles.input}`}
                 autoComplete={"false"}/>
          <Field id="rememberMe" type="checkbox" name="rememberMe" className={styles.checkbox} />
          <label className={styles.checkbox__label} htmlFor="rememberMe">Remember me</label>
          {props.errorStatus ? <div className={styles.error}>{props.errorMessage}</div> : null}
          <button type="submit" disabled={isSubmitting} className={`${styles.button} button`}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  )
}

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={`/profile/ ${props.userId}`} />;
  }

  return (<div className="content">
    <div className={styles.wrapper}>
      <h1 className={styles.title}>LOGIN</h1>
      <LoginForm errorStatus={props.errorStatus} errorMessage={props.errorMessage} logIn={props.logIn} logOut={props.logOut}/>
    </div>
  </div>)
}

const mapStateToProps = (state) => ({
  userId: state.AuthPage.UserID,
  isAuth: state.AuthPage.isAuth,
  errorStatus: state.AuthPage.errorStatus,
  errorMessage: state.AuthPage.errorMessage
});

export default connect (mapStateToProps, {logIn: logInThunkCreator} ) (Login);